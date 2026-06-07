<script lang="ts">
  import newsreaderLatin400NormalWoff2 from "@fontsource/newsreader/files/newsreader-latin-400-normal.woff2?url";
  import newsreaderLatin700NormalWoff2 from "@fontsource/newsreader/files/newsreader-latin-700-normal.woff2?url";
  import "virtual:uno.css";
  import "./site.css";

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
    href={newsreaderLatin700NormalWoff2}
    crossorigin="anonymous"
  />
</svelte:head>

{@render children()}
