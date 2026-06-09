import { symbols } from "@unocss/core";
import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig } from "unocss";

/** Centering gutter from the page edge to the content area. */
const gutter = "max(var(--margin), (100vw - 80rem + 6rem) / 2)";

/** Inline margin that reserves one 16rem sidebar (plus its gap). */
const side = `calc(${gutter} + 16rem + var(--margin))`;

/** Width at which each column count begins (col 2 = md, col 3 = lg). */
const colBreakpoints: Record<number, string> = { 2: "48rem", 3: "64rem" };

export default defineConfig({
  extractors: [extractorSvelte()],
  presets: [],
  rules: [
    [
      "main",
      [
        { "padding-inline": gutter },
        {
          [symbols.parent]: "@media (width >= 48rem)",
          "padding-inline-end": side,
        },
        {
          [symbols.parent]: "@media (width >= 64rem)",
          "padding-inline-start": side,
        },
      ],
    ],

    // Like `main`, but merging the left / right / both sidebar(s) into the
    // content area — for extra-wide breakout content.
    [
      "merge-left",
      [
        { "padding-inline": gutter },
        {
          [symbols.parent]: "@media (width >= 48rem)",
          clear: "inline-start",
          "padding-inline-end": side,
        },
      ],
    ],

    [
      "merge-right",
      [
        { "padding-inline": gutter },
        {
          [symbols.parent]: "@media (width >= 64rem)",
          clear: "inline-end",
          "padding-inline-start": side,
        },
      ],
    ],

    ["merge-both", { clear: "both", "padding-inline": gutter }],

    // Like the matching `merge-*`, but a grid that splits the span into sidebar
    // and main columns; falls back to normal flow below the breakpoint where
    // that sidebar appears.
    [
      "split-left",
      [
        { "padding-inline": gutter },
        {
          [symbols.parent]: "@media (width >= 48rem)",
          "padding-inline-end": side,
        },
        {
          [symbols.parent]: "@media (width >= 64rem)",
          clear: "inline-start",
          "column-gap": "var(--margin)",
          display: "grid",
          "grid-template-columns": "16rem 1fr",
          "row-gap": "1.5rem",
        },
        {
          [symbols.parent]: "@media (width >= 64rem)",
          [symbols.selector]: (selector) => `${selector} > *`,
          "margin-block": 0,
        },
      ],
    ],

    [
      "split-right",
      [
        { "padding-inline": gutter },
        {
          [symbols.parent]: "@media (width >= 48rem)",
          clear: "inline-end",
          "column-gap": "var(--margin)",
          display: "grid",
          "grid-template-columns": "1fr 16rem",
          "row-gap": "1.5rem",
        },
        {
          [symbols.parent]: "@media (width >= 48rem)",
          [symbols.selector]: (selector) => `${selector} > *`,
          "margin-block": 0,
        },
        {
          [symbols.parent]: "@media (width >= 64rem)",
          "padding-inline-start": side,
        },
      ],
    ],

    [
      "split-both",
      [
        { "padding-inline": gutter },
        {
          [symbols.parent]: "@media (width >= 48rem)",
          clear: "inline-end",
          "column-gap": "var(--margin)",
          display: "grid",
          "grid-template-columns": "1fr 16rem",
          "row-gap": "1.5rem",
        },
        {
          [symbols.parent]: "@media (width >= 48rem)",
          [symbols.selector]: (selector) => `${selector} > *`,
          "margin-block": 0,
        },
        {
          [symbols.parent]: "@media (width >= 64rem)",
          clear: "both",
          "grid-template-columns": "16rem 1fr 16rem",
        },
      ],
    ],

    // Floats into the left sidebar once it exists (`lg`); below that it falls
    // back to `main` so it keeps the same gutter / sidebar reservations.
    [
      "float-left",
      [
        { "margin-inline": gutter },
        {
          [symbols.parent]: "@media (width >= 48rem)",
          "margin-inline-end": side,
        },
        {
          [symbols.parent]: "@media (width >= 64rem)",
          clear: "inline-start",
          float: "inline-start",
          "margin-block": "1.5rem",
          "margin-inline": `${gutter} var(--margin)`,
          width: "16rem",
        },
        {
          [symbols.parent]: "@media (width >= 64rem)",
          [symbols.selector]: (selector) =>
            `${selector} + ${selector}, :nth-child(1 of ${selector})`,
          "margin-block-start": "0",
        },
      ],
    ],

    // Floats into the right sidebar once it exists (`md`); below that it falls
    // back to `main`.
    [
      "float-right",
      [
        { "margin-inline": gutter },
        {
          [symbols.parent]: "@media (width >= 48rem)",
          clear: "inline-end",
          float: "inline-end",
          "margin-block": "1.5rem",
          "margin-inline": `var(--margin) ${gutter}`,
          width: "16rem",
        },
        {
          [symbols.parent]: "@media (width >= 48rem)",
          [symbols.selector]: (selector) =>
            `${selector} + ${selector}, :nth-child(1 of ${selector})`,
          "margin-block-start": "0",
        },
      ],
    ],

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
      /^auto-grid-(\d+)$/,
      ([, number]) => [
        {
          display: "grid",
          gap: "1.5rem",
          "grid-template-columns": `repeat(auto-fit, minmax(${number}rem, 1fr))`,
        },
        {
          [symbols.selector]: (selector) => `${selector} > *`,
          "margin-block": 0,
        },
      ],
    ],

    // Fixed N-column grid (each column 1fr).
    [
      /^grid-(\d+)$/,
      ([, number]) => [
        {
          display: "grid",
          gap: "1.5rem",
          "grid-template-columns": `repeat(${number}, 1fr)`,
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
    [/^span-(\d+)$/, ([, number]) => ({ "grid-column": `span ${number}` })],
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
