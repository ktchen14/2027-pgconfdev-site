<!--
  @component Breadcrumb `<nav>` component of the `/attend` layout.
-->

<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import BreadcrumbNav from "../BreadcrumbNav.svelte";

  const { children = undefined, ...rest } = $props();
</script>

<BreadcrumbNav {...rest}>
  <li><Link href={resolve("/attend")}>Attend</Link></li>
  {@render children?.()}
</BreadcrumbNav>
