<!--
  @component Section `<nav>` component of the `/attend` layout.
-->

<script module lang="ts">
  export { list };
</script>

<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import type { ComponentProps } from "svelte";
  import SectionNav from "../SectionNav.svelte";

  type Props = ComponentProps<typeof SectionNav>;
  const { children, ...rest }: Props = $props();
</script>

{#snippet list()}
  <li><Link href={resolve("/attend")}>Venue</Link></li>
  <li><Link href={resolve("/attend/travel")}>Travel &amp; hotels</Link></li>
  <li><Link href={resolve("/attend/social")}>Social events</Link></li>
  <li><Link href={resolve("/attend/volunteer")}>Volunteer</Link></li>
{/snippet}

<SectionNav aria-labelledby="attend-nav" {...rest}>
  <h2 id="attend-nav" class="over">Attend</h2>
  <ul>
    {@render list()}
  </ul>
  {@render children?.()}
</SectionNav>
