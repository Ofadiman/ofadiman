import { mkdir, readFile, writeFile } from "node:fs/promises";
import MarkdownIt from "markdown-it";
import { chromium } from "playwright";

const rootDirectory = new URL("../", import.meta.url);
const outputDirectory = new URL("dist/", rootDirectory);
const htmlOutput = new URL("resume.html", outputDirectory);
const pdfOutput = new URL("resume.pdf", outputDirectory);
const A4_WIDTH_IN_PIXELS = 794;

const inlineFontFiles = async (stylesheetUrl: URL): Promise<string> => {
  const stylesheet = await readFile(stylesheetUrl, "utf8");
  const fileReferences = new Set(
    stylesheet.match(/\.\/files\/[^)]+\.woff2/g) ?? [],
  );
  let inlined = stylesheet;
  for (const fileReference of fileReferences) {
    const font = await readFile(new URL(fileReference, stylesheetUrl));
    inlined = inlined.replaceAll(
      fileReference,
      `data:font/woff2;base64,${font.toString("base64")}`,
    );
  }
  return inlined;
};

const restructure = (): void => {
  const header = document.createElement("header");
  const main = document.createElement("main");
  let section: HTMLElement | null = null;

  for (const element of [...document.body.children]) {
    if (element.tagName === "H2") {
      section = document.createElement("section");
      main.append(section);
    }
    (section ?? header).append(element);
  }
  document.body.replaceChildren(header, main);

  const name = header.querySelector(":scope > h1");
  const [fullName, ...headlineParts] = (name?.textContent ?? "").split(" | ");
  if (name && fullName && headlineParts.length > 0) {
    const headline = document.createElement("span");
    headline.className = "headline";
    headline.textContent = headlineParts.join(" | ");
    name.replaceChildren(fullName, headline);
  }

  header.querySelector(":scope > p")?.classList.add("intro");
  const highlights = header.querySelector(":scope > ul");
  highlights?.classList.add("highlights");
  for (const title of highlights?.querySelectorAll(
    ":scope > li > strong:first-child",
  ) ?? []) {
    title.textContent = (title.textContent ?? "").replace(/\.$/, "");
  }

  for (const candidate of main.querySelectorAll("section")) {
    const heading = candidate.querySelector(":scope > h2");
    const list = candidate.querySelector(":scope > ul");
    if (heading?.textContent?.trim() === "Contact" && list) {
      list.classList.add("contact");
      header.querySelector(":scope > h1")?.after(list);
      candidate.remove();
    }
  }

  for (const jobTitle of main.querySelectorAll("section > h3")) {
    const job = document.createElement("article");
    job.className = "job";
    jobTitle.before(job);

    const jobHeading = document.createElement("div");
    jobHeading.className = "job-heading";
    let sibling = jobTitle.nextElementSibling;
    jobHeading.append(jobTitle);
    job.append(jobHeading);

    while (sibling && sibling.tagName !== "H3" && sibling.tagName !== "H2") {
      const next = sibling.nextElementSibling;
      job.append(sibling);
      sibling = next;
    }

    const details = jobHeading.nextElementSibling;
    const role = details?.querySelector(":scope > strong:first-child");
    if (details?.tagName === "P" && role) {
      const dates = (details.textContent ?? "")
        .slice((role.textContent ?? "").length)
        .replace(/^\s*\|\s*/, "");
      const datesElement = document.createElement("span");
      datesElement.className = "dates";
      datesElement.textContent = dates.trim();
      jobHeading.append(datesElement);
      details.className = "role";
      details.textContent = role.textContent;
    }
  }
};

const markdown = new MarkdownIt({ typographer: true });
const readme = await readFile(new URL("README.md", rootDirectory), "utf8");
const content = markdown.render(readme);
const title = markdown.renderInline(readme.match(/^# (.+)$/m)?.[1] ?? "Resume");
const fonts = await inlineFontFiles(
  new URL(import.meta.resolve("@fontsource-variable/inter")),
);
const styles = await readFile(new URL("styles.css", import.meta.url), "utf8");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${title}</title>
<style>${fonts}</style>
<style>${styles}</style>
</head>
<body>${content}</body>
</html>`;

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: A4_WIDTH_IN_PIXELS, height: 1123 },
  });
  await page.emulateMedia({ media: "print" });
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(restructure);
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  const height = await page.evaluate(() =>
    Math.ceil(document.documentElement.getBoundingClientRect().height),
  );

  await mkdir(outputDirectory, { recursive: true });
  await writeFile(htmlOutput, await page.content());
  await page.pdf({
    path: pdfOutput.pathname,
    width: "210mm",
    height: `${height + 1}px`,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
    printBackground: true,
  });
  console.log(`Wrote ${pdfOutput.pathname} (210mm × ${height}px)`);
} finally {
  await browser.close();
}
