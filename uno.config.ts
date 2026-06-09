import { symbols } from "@unocss/core";
import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig } from "unocss";

/** Width at which each column count begins (col 2 = md, col 3 = lg). */
const colBreakpoints: Record<number, string> = { 2: "48rem", 3: "64rem" };

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
    [/^column-span-(\d+)$/, ([, number]) => ({ "grid-column": `span ${number}` })],
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

    (matcher) => {
      const result = matcher.match(/^(.+)\[(\d+)?:(\d+)?\]$/);
      if (!result) return;
      const [, rule, minimum, maximum] = result;
      if (!minimum && !maximum) return;
      const q = [];
      if (minimum) {
        const bp = colBreakpoints[parseInt(minimum)];
        if (bp) q.push(`(width >= ${bp})`);
      }
      if (maximum) {
        const bp = colBreakpoints[parseInt(maximum)];
        if (bp) q.push(`(width < ${bp})`);
      }
      return { matcher: rule, parent: `@media ${q.join(" and ")}` };
    },
  ],
});
