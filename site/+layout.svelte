<script lang="ts">
  import newsreaderLatin400NormalWoff2 from "@fontsource/newsreader/files/newsreader-latin-400-normal.woff2?url";
  import newsreaderLatin500NormalWoff2 from "@fontsource/newsreader/files/newsreader-latin-500-normal.woff2?url";
  import "./site.css";
  import "virtual:uno.css";

  let { children } = $props();
</script>

<svelte:head>
  <link
    rel="preload"
    as="font"
    type="font/woff2"
    href={newsreaderLatin400NormalWoff2}
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    as="font"
    type="font/woff2"
    href={newsreaderLatin500NormalWoff2}
    crossorigin="anonymous"
  />
</svelte:head>

{@render children()}
