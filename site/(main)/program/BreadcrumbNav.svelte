<!--
  @component Breadcrumb `<nav>` component of the `/program` layout.
-->

<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import type { ComponentProps } from "svelte";
  import BreadcrumbNav from "../BreadcrumbNav.svelte";

  type Props = ComponentProps<typeof BreadcrumbNav>;
  const { children, ...rest }: Props = $props();
</script>

<BreadcrumbNav {...rest}>
  <li><Link href={resolve("/program")}>Program</Link></li>
  {@render children?.()}
</BreadcrumbNav>
