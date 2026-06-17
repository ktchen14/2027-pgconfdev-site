<script>
  import { setContext } from "$lib/layout";
  import BreadcrumbNav from "./BreadcrumbNav.svelte";
  import SectionNav from "./SectionNav.svelte";

  const { children } = $props();

  setContext({ BreadcrumbNav, SectionNav });
</script>

{@render children()}
