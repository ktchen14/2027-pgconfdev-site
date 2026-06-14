import { symbols, withLayer } from "@unocss/core";
import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig } from "unocss";

const childMarginBlock = {
  [symbols.selector]: (selector: string) => `${selector} > *`,
  "margin-block": 0,
};

export default defineConfig({
  extractors: [extractorSvelte()],
  presets: [],
  rules: withLayer("layout", [
    ["none", { display: "none" }],

    [
      "flex",
      [
        { display: "flex", "flex-wrap": "wrap", gap: "var(--gap)" },
        childMarginBlock,
      ],
    ],

    [
      /^grid\/(\d+)$/,
      ([, number]) => [
        {
          display: "grid",
          gap: "var(--gap)",
          "grid-template-columns": `repeat(${number}, 1fr)`,
        },
        childMarginBlock,
      ],
    ],

    [
      /^grid\+(\d+)$/,
      ([, number]) => [
        {
          display: "grid",
          gap: "var(--gap)",
          "grid-template-columns": `repeat(auto-fit, minmax(${number}rem, 1fr))`,
        },
        childMarginBlock,
      ],
    ],

    [
      "columnar",
      [
        {
          display: "grid",
          gap: "var(--gap) var(--margin)",
          "grid-template-columns": "1fr",
        },
        childMarginBlock,
      ],
    ],

    [
      "subgrid",
      [
        { display: "grid", "grid-template-columns": "subgrid" },
        childMarginBlock,
      ],
    ],

    [
      /^column-((?:span-)?\d+)(?:-((?:span-)?\d+))?$/,
      ([, start, end]) => {
        const name = (s: string) => s.replace("-", " ");
        const value = end ? `${name(start)} / ${name(end)}` : name(start);
        return { "grid-column": value };
      },
    ],
  ]),
  variants: [
    (matcher) => {
      if (!matcher.endsWith("@)")) return;
      matcher = matcher.slice(0, -2);
      return { matcher, parent: "@media (width >= 48rem)" };
    },

    (matcher) => {
      if (!matcher.endsWith("@(")) return;
      matcher = matcher.slice(0, -2);
      return { matcher, parent: "@media (width >= 64rem)" };
    },

    (matcher) => {
      const result = matcher.match(/^(.+)@(\d+)?-(\d+)?$/);
      if (!result) return;

      const [, rule, minimum, maximum] = result;
      const q = [];
      if (minimum) q.push(`(width >= ${minimum}rem)`);
      if (maximum) q.push(`(width < ${maximum}rem)`);
      return { matcher: rule, parent: `@media ${q.join(" and ")}` };
    },
  ],
});
