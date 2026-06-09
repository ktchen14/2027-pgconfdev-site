import { symbols } from "@unocss/core";
import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig } from "unocss";

/** Centering gutter from the page edge to the content area. */
const gutter = "max(var(--margin), (100vw - 80rem + 6rem) / 2)";

/** Inline margin that reserves one 16rem sidebar (plus its gap). */
const side = `calc(${gutter} + 16rem + var(--margin))`;

/** The right sidebar appears at this width; the left sidebar at `lg`. */
const md = "@media (width >= 48rem)";
const lg = "@media (width >= 64rem)";

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
        { [symbols.parent]: md, "padding-inline-end": side },
        { [symbols.parent]: lg, "padding-inline-start": side },
      ],
    ],

    // Like `main`, but merging the left / right / both sidebar(s) into the
    // content area — for extra-wide breakout content.
    [
      "merge-left",
      [
        { clear: "left", "padding-inline": gutter },
        { [symbols.parent]: md, "padding-inline-end": side },
      ],
    ],
    [
      "merge-right",
      [
        { clear: "right", "padding-inline": gutter },
        { [symbols.parent]: lg, "padding-inline-start": side },
      ],
    ],
    ["merge-both", { clear: "both", "padding-inline": gutter }],

    // Like the matching `merge-*`, but a grid that splits the span into sidebar
    // and main columns; falls back to normal flow below the breakpoint where
    // that sidebar appears.
    [
      "split-left",
      [
        { clear: "left", "padding-inline": gutter },
        {
          [symbols.parent]: "@media (width >= 48rem)",
          "padding-inline-end": side,
        },
        {
          [symbols.parent]: "@media (width >= 64rem)",
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
        { clear: "right", "padding-inline": gutter },
        { [symbols.parent]: lg, "padding-inline-start": side },
        {
          [symbols.parent]: md,
          display: "grid",
          "column-gap": "var(--margin)",
          "row-gap": "1.5rem",
          "grid-template-columns": "1fr 16rem",
        },
        {
          [symbols.parent]: md,
          [symbols.selector]: (s) => `${s} > *`,
          "margin-block": 0,
        },
      ],
    ],
    [
      "split-both",
      [
        { clear: "both", "padding-inline": gutter },
        {
          [symbols.parent]: lg,
          display: "grid",
          "column-gap": "var(--margin)",
          "row-gap": "1.5rem",
          "grid-template-columns": "16rem 1fr 16rem",
        },
        {
          [symbols.parent]: lg,
          [symbols.selector]: (s) => `${s} > *`,
          "margin-block": 0,
        },
      ],
    ],
    [
      // Floats into the left sidebar once it exists (`lg`); below that it falls
      // back to `main` so it keeps the same gutter / sidebar reservations.
      "float-left",
      [
        { "margin-inline": gutter },
        { [symbols.parent]: md, "margin-inline-end": side },
        {
          [symbols.parent]: lg,
          clear: "left",
          float: "left",
          "margin-block": "1.5rem",
          "margin-inline": `${gutter} var(--margin)`,
          width: "16rem",
        },
        {
          [symbols.parent]: lg,
          [symbols.selector]: (s) => `${s} + ${s}, :nth-child(1 of ${s})`,
          "margin-block-start": "0",
        },
      ],
    ],
    [
      // Floats into the right sidebar once it exists (`md`); below that it falls
      // back to `main`.
      "float-right",
      [
        { "margin-inline": gutter },
        {
          [symbols.parent]: md,
          clear: "right",
          float: "right",
          "margin-block": "1.5rem",
          "margin-inline": `var(--margin) ${gutter}`,
          width: "16rem",
        },
        {
          [symbols.parent]: md,
          [symbols.selector]: (s) => `${s} + ${s}, :nth-child(1 of ${s})`,
          "margin-block-start": "0",
        },
      ],
    ],
    [
      "subgrid",
      [
        { display: "grid", "grid-template-columns": "subgrid" },
        {
          [symbols.selector]: (s) => `${s} > *`,
          "margin-block": 0,
        },
      ],
    ],
    [/^span-(\d+)$/, ([, n]) => ({ "grid-column": `span ${n}` })],
    [/^column-(\d+)$/, ([, n]) => ({ "grid-column": n })],
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
    [
      /^auto-grid-(\d+)$/,
      ([, number]) => [
        {
          display: "grid",
          gap: "1.5rem",
          "grid-template-columns": `repeat(auto-fit, minmax(${number}rem, 1fr))`,
        },
        {
          [symbols.selector]: (s) => `${s} > *`,
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
    (matcher) => {
      const result = matcher.match(/^(.+)\[(\d+)?:(\d+)?\]$/);
      if (!result) return;
      const [, rule, minCol, maxCol] = result;
      if (!minCol && !maxCol) return;
      const q = [];
      if (minCol) {
        const bp = colBreakpoints[parseInt(minCol)];
        if (bp) q.push(`(width >= ${bp})`);
      }
      if (maxCol) {
        const bp = colBreakpoints[parseInt(maxCol)];
        if (bp) q.push(`(width < ${bp})`);
      }
      if (q.length === 0) return;
      return { matcher: rule, parent: `@media ${q.join(" and ")}` };
    },
  ],
});
