import { symbols } from "@unocss/core";
import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig } from "unocss";

export default defineConfig({
  extractors: [extractorSvelte()],
  presets: [],
  rules: [
    ["none", { display: "none" }],

    [
      "flex",
      [
        {
          display: "flex",
          "flex-wrap": "wrap",
          gap: "1.5rem",
        },
        {
          [symbols.selector]: (selector) => `${selector} > *`,
          "margin-block": 0,
        },
      ],
    ],

    [
      /^grid([+/])(\d+)$/,
      ([, operator, number]) => [
        {
          display: "grid",
          gap: "1.5rem",
          "grid-template-columns":
            operator === "+"
              ? `repeat(auto-fit, minmax(${number}rem, 1fr))`
              : `repeat(${number}, 1fr)`,
        },
        {
          [symbols.selector]: (selector) => `${selector} > *`,
          "margin-block": 0,
        },
      ],
    ],

    [
      "subgrid",
      [
        { display: "grid", "grid-template-columns": "subgrid" },
        {
          [symbols.selector]: (selector) => `${selector} > *`,
          "margin-block": 0,
        },
      ],
    ],

    [/^column-(\d+)$/, ([, number]) => ({ "grid-column": number })],
    [
      /^column-span-(\d+)$/,
      ([, number]) => ({ "grid-column": `span ${number}` }),
    ],
  ],
  variants: [
    (matcher) => {
      if (matcher.length <= 2) return;
      const minimum = { "@(": 64, "@)": 48 }[matcher.slice(-2)];
      if (!minimum) return;
      const parent = `@media (width >= ${minimum}rem)`;
      return { matcher: matcher.slice(0, -2), parent };
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
