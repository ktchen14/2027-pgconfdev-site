<!--
  @component Breadcrumb `<nav>` component of the `/program` layout.
-->

<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import BreadcrumbNav from "../BreadcrumbNav.svelte";

  const { children = undefined, ...rest } = $props();
</script>

<BreadcrumbNav {...rest}>
  <li><Link href={resolve("/program")}>Program</Link></li>
  {@render children?.()}
</BreadcrumbNav>
