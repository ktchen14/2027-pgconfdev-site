import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import postcssPresetEnv from "postcss-preset-env";
import postcssSize from "postcss-size";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import lucidePreprocess from "vite-plugin-lucide-preprocess";

export default defineConfig({
  css: {
    postcss: {
      plugins: [postcssSize(), postcssPresetEnv()],
    },
  },
  plugins: [UnoCSS(), enhancedImages(), lucidePreprocess(), sveltekit()],
});
