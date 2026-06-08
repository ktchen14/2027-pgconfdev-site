import { symbols } from "@unocss/core";
import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig } from "unocss";

export default defineConfig({
  extractors: [extractorSvelte()],
  presets: [],
  rules: [
    ["none", { display: "none" }],
    [
      "main",
      [
        {
          "margin-inline": "max(var(--margin), (100vw - 80rem + 6rem) / 2)",
        },

        {
          [symbols.parent]: "@media (width >= 48rem)",
          "margin-inline-end":
            "calc(max(var(--margin), (100vw - 80rem + 6rem) / 2) + 16rem + var(--margin))",
        },

        {
          [symbols.parent]: "@media (width >= 64rem)",
          "margin-inline-start":
            "calc(max(var(--margin), (100vw - 80rem + 6rem) / 2) + 16rem + var(--margin))",
        },
      ],
    ],
    [
      "flex",
      [
        {
          display: "flex",
          "flex-wrap": "wrap",
          gap: "1.5rem",
        },
        {
          [symbols.selector]: (s) => `${s} > *`,
          "margin-block": 0,
        },
      ],
    ],
    [
      "float-left",
      [
        {
          clear: "left",
          float: "left",
          "margin-block": "var(--margin) 1.5rem",
          "margin-left": "max(var(--margin), (100vw - 80rem + 6rem) / 2)",
          "margin-right": "var(--margin)",
          width: "16rem",
        },
        {
          [symbols.selector]: (s) => `${s} + ${s}, :nth-child(1 of ${s})`,
          "margin-block-start": "0",
        },
      ],
    ],
    [
      "float-right",
      [
        {
          clear: "right",
          float: "right",
          "margin-block": "var(--margin) 1.5rem",
          "margin-left": "var(--margin)",
          "margin-right": "max(var(--margin), (100vw - 80rem + 6rem) / 2)",
          width: "16rem",
        },
        {
          [symbols.selector]: (s) => `${s} + ${s}, :nth-child(1 of ${s})`,
          "margin-block-start": "0",
        },
      ],
    ],
    [
      /^auto-grid-(\d+)$/,
      ([, w]) => [
        {
          display: "grid",
          gap: "1.5rem",
          "grid-template-columns": `repeat(auto-fit, minmax(${w}rem, 1fr))`,
        },
        {
          [symbols.selector]: (s) => `${s} > *`,
          "margin-block": 0,
        },
      ],
    ],
  ],
  variants: [
    (matcher) => {
      const result = matcher.match(/^(.+)\[(\d+)?-(\d+)?\]$/);
      if (!result) return;
      const [, rule, minimum, maximum] = result;
      const q = [];
      if (minimum) q.push(`(width >= ${minimum}rem)`);
      if (maximum) q.push(`(width < ${maximum}rem)`);
      return { matcher: rule, parent: `@media ${q.join(" and ")}` };
    },
  ],
});
