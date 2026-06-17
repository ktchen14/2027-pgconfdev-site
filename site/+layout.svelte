<script lang="ts">
  import newsreaderLatinOpszNormalWoff2 from "@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2?url";
  import publicSansLatinWghtNormalWoff2 from "@fontsource-variable/public-sans/files/public-sans-latin-wght-normal.woff2?url";
  import "./site.css";
  import "virtual:uno.css";

  let { children } = $props();
</script>

<svelte:head>
  <link
    rel="preload"
    as="font"
    type="font/woff2"
    href={publicSansLatinWghtNormalWoff2}
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    as="font"
    type="font/woff2"
    href={newsreaderLatinOpszNormalWoff2}
    crossorigin="anonymous"
  />
</svelte:head>

{@render children()}
