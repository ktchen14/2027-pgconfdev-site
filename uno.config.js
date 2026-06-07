import { defineConfig } from "unocss";

export default defineConfig({
  presets: [],
  rules: [
    ["none", { display: "none" }],
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
