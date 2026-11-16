import type { Config } from "prettier";

const config: Config = {
  proseWrap: "never",
  overrides: [
    {
      files: ["*.md"],
      options: {
        printWidth: 1000,
      },
    },
  ],
};

export default config;
