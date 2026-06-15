<!--
  @component Breadcrumb `<nav>` component of the `/sponsor` layout.
-->

<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import BreadcrumbNav from "../BreadcrumbNav.svelte";

  const { children = undefined, ...rest } = $props();
</script>

<BreadcrumbNav {...rest}>
  <li><Link href={resolve("/sponsor")}>Sponsor</Link></li>
  {@render children?.()}
</BreadcrumbNav>
