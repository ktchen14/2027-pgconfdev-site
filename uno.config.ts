import { symbols, withLayer, type CSSObject, type Rule } from "@unocss/core";
import extractorSvelte from "@unocss/extractor-svelte";
import { defineConfig } from "unocss";

type RuleObject = CSSObject | ((...args: string[]) => CSSObject);

function rule(matcher: RegExp, ...rest: RuleObject[]): Rule {
  function handler(args: string[]) {
    return rest.map((it) => (typeof it === "function" ? it(...args) : it));
  }
  return [matcher, handler];
}

// Just: > * { margin-block: 0; }
const childMarginBlock = {
  [symbols.selector]: (selector: string) => `${selector} > *`,
  "margin-block": 0,
};

const layout = withLayer("layout", [
  rule(/^none$/, () => ({ display: "none" })),

  rule(/^flex$/, childMarginBlock, () => ({
    display: "flex",
    "flex-wrap": "wrap",
    gap: "var(--gap)",
  })),

  rule(/^grid\/(\d+)$/, childMarginBlock, (_, number) => ({
    display: "grid",
    gap: "var(--gap)",
    "grid-template-columns": `repeat(${number}, 1fr)`,
  })),

  rule(/^grid-(\d+(?::\d+)*)$/, childMarginBlock, (_, series) => ({
    display: "grid",
    gap: "var(--gap)",
    "grid-template-columns": series
      .split(":")
      .map((n) => `${n}fr`)
      .join(" "),
  })),

  rule(/^grid\+(\d+)$/, childMarginBlock, (_, number) => ({
    display: "grid",
    gap: "var(--gap)",
    "grid-template-columns": `repeat(auto-fit, minmax(${number}rem, 1fr))`,
  })),

  rule(/^columnar$/, childMarginBlock, {
    display: "grid",
    gap: "var(--gap) var(--margin)",
    "grid-template-columns": "var(--pagegrid-template, 1fr)",
  }),

  rule(/^subgrid$/, childMarginBlock, {
    display: "grid",
    "grid-template-columns": "subgrid",
  }),

  rule(/^column-((?:span-)?\d+)(?:-((?:span-)?\d+))?$/, (_, ...i) => {
    const name = (string: string) => string.replace("-", " ");
    const column = i[1] ? `${name(i[0])} / ${name(i[1])}` : name(i[0]);
    return { "grid-column": column };
  }),
]);

export default defineConfig({
  extractors: [extractorSvelte()],
  outputToCssLayers: true,
  presets: [],
  rules: layout,
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
