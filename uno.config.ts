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
