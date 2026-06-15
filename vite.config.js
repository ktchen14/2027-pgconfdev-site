import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { playwright } from "@vitest/browser-playwright";
import postcssPresetEnv from "postcss-preset-env";
// @ts-expect-error no type module
import postcssSize from "postcss-size";
import UnoCSS from "unocss/vite";
import lucidePreprocess from "vite-plugin-lucide-preprocess";
import { defineConfig } from "vitest/config";

export default defineConfig({
  css: {
    postcss: {
      plugins: [postcssSize(), postcssPresetEnv()],
    },
  },
  plugins: [
    enhancedImages(),
    lucidePreprocess(),
    UnoCSS(),
    sveltekit(),
  ],
  test: {
    browser: {
      enabled: true,
      headless: true,
      instances: [{ browser: "webkit" }],
      provider: playwright(),
    },
  },
});
