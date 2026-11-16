# Tooling

Run every `node` and `pnpm` command through `mise exec --`, for example `mise exec -- pnpm run build:pdf`. Agent shells don't activate mise, so a bare `pnpm` or `node` resolves to the user's global versions instead of the ones pinned in `mise.toml`.

Keep `.npmrc`; it pins the public npm registry.

If Chromium is missing, install it with `mise exec -- pnpm exec playwright install --only-shell chromium`. Installing deletes cached Playwright browsers that no installed Playwright version references, so tell the user when it removes any.

Node runs `pdf/build.ts` directly by stripping types, so use only erasable TypeScript syntax: no `enum`, `namespace`, or constructor parameter properties. `erasableSyntaxOnly` in `tsconfig.json` enforces this.

Before finishing a change, run the `typescript:check` and `prettier:check` scripts. `.tmp/` holds the user's scratch files and is excluded from Prettier; leave it alone.

# README.md

`README.md` is published twice: GitHub shows it on the public profile at https://github.com/Ofadiman, and `build:pdf` turns it into the PDF resume. GitHub strips all styling, so the visual design lives only in `pdf/styles.css`.

Every number in the README must be measured, not estimated. Ask the user for numbers you can't measure.

Write straight quotes and apostrophes in the README. The markdown-it typographer turns them into curly ones in the PDF.

# PDF layout

The `restructure` function in `pdf/build.ts` rearranges the rendered README, so the PDF layout depends on these README conventions:

- Everything before the first `##` becomes the header. The `#` heading is the title and the PDF document title, the first paragraph is the intro, and the first list becomes the highlight cards. Each card item starts with a `**Title.**` lead-in, and the trailing period is dropped in the PDF.
- The list under `## Contact` moves below the title as one row, and the `Contact` heading disappears.
- Each job is a `### [Company](url)` heading followed by a `**Role** | dates` paragraph. The dates move to the right of the company name.
- Two lists separated only by a blank line merge into one list, so put a heading between them.

`restructure` runs inside the page through `page.evaluate`, so it can't use imports or variables from module scope.

Don't use `position: relative` or `position: absolute` in `pdf/styles.css`. Chromium paints positioned elements in a later layer, which moves their text out of reading order in the PDF and breaks text extraction for applicant tracking systems. The job timeline is drawn with background gradients for this reason.

The page height is measured from the rendered content, so the PDF is always a single page 210mm wide. Verify a build in two ways: open `dist/resume.pdf` with the Read tool to inspect it visually, and confirm `LC_ALL=C grep --text --only-matching '/MediaBox *\[[^]]*\]' dist/resume.pdf` prints exactly one line. A second page means the height was measured before the layout settled, for example before fonts loaded. `dist/` is git-ignored; never commit the PDF.

# Git hooks

Lefthook runs Prettier and the type check on every commit. The hook commands go through `mise exec --` so they use the pinned tools even when the committing shell doesn't activate mise. If `.git/hooks/pre-commit` is missing, run `mise exec -- lefthook install`. Never bypass the hooks with `--no-verify`; fix what they report.
