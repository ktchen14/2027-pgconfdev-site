<script>
  import { setContext } from "$lib/layout";
  import BreadcrumbNav from "./BreadcrumbNav.svelte";
  import SectionNav from "./SectionNav.svelte";

  const { children } = $props();

  setContext({ BreadcrumbNav, SectionNav });
</script>

<style>
  :global(header h1) {
    font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem);
    letter-spacing: -0.02em;
    line-height: 1;
  }
</style>

{@render children()}
