<!--
  @component Breadcrumb `<nav>` component of the `/about` layout.
-->

<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import BreadcrumbNav from "../BreadcrumbNav.svelte";

  const { class: klass = undefined, children = undefined, ...rest } = $props();
</script>

<BreadcrumbNav class={["(main)", klass]} {...rest}>
  <li><Link href={resolve("/about")}>About</Link></li>

  {@render children?.()}
</BreadcrumbNav>
