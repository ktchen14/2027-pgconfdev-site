import { symbols } from "@unocss/core";
import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig } from "unocss";

/** Centering gutter from the page edge to the content area. */
const gutter = "max(var(--margin), (100vw - 80rem + 6rem) / 2)";
/** Inline margin that reserves one 16rem sidebar (plus its gap). */
const sidebar = `calc(${gutter} + 16rem + var(--margin))`;

/** The right sidebar appears at this width; the left sidebar at `lg`. */
const md = "@media (width >= 48rem)";
const lg = "@media (width >= 64rem)";

export default defineConfig({
  extractors: [extractorSvelte()],
  presets: [],
  rules: [
    [
      "main",
      [
        { "padding-inline": gutter },
        { [symbols.parent]: md, "padding-inline-end": sidebar },
        { [symbols.parent]: lg, "padding-inline-start": sidebar },
      ],
    ],
    // Like `main`, but merging the left / right / both sidebar(s) into the
    // content area — for extra-wide breakout content.
    [
      "merge-left",
      [
        { clear: "left", "padding-inline": gutter },
        { [symbols.parent]: md, "padding-inline-end": sidebar },
      ],
    ],
    [
      "merge-right",
      [
        { clear: "right", "padding-inline": gutter },
        { [symbols.parent]: lg, "padding-inline-start": sidebar },
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
        { [symbols.parent]: md, "padding-inline-end": sidebar },
        {
          [symbols.parent]: lg,
          display: "grid",
          gap: "var(--margin)",
          "grid-template-columns": "16rem 1fr",
        },
        {
          [symbols.parent]: lg,
          [symbols.selector]: (s) => `${s} > *`,
          "margin-block": 0,
        },
      ],
    ],
    [
      "split-right",
      [
        { clear: "right", "padding-inline": gutter },
        { [symbols.parent]: lg, "padding-inline-start": sidebar },
        {
          [symbols.parent]: md,
          display: "grid",
          gap: "var(--margin)",
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
          gap: "var(--margin)",
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
        { [symbols.parent]: md, "margin-inline-end": sidebar },
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
  ],
});
