<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import { ul as aboutUl } from "./about/SectionNav.svelte";
  import { ul as attendUl } from "./attend/SectionNav.svelte";
  import Footer from "./Footer";
  import Header from "./Header";
  import { ul as programUl } from "./program/SectionNav.svelte";

  const { children } = $props();
</script>

<style>
  :global :where(#root) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    min-height: 100vh;
  }

  :where(main) {
    margin-block-end: var(--margin);
  }

  .menu-single {
    position: relative;
  }

  .menu-single :global([data-open]) {
    @media (width >= 48rem) {
      margin-block-start: 1em;
      padding-block: 1em;
      right: calc(-1.5rem - 1px);
      width: 15rem;
    }
  }
</style>

<Header class="(main)">
  <li class="menu-single">
    <Header.ToggleMenu name="Program" class="size-">
      {@render programUl()}
    </Header.ToggleMenu>
  </li>

  <li class="menu-single">
    <Header.ToggleMenu name="Attend" class="size-">
      {@render attendUl()}
    </Header.ToggleMenu>
  </li>

  <li><Link href={resolve("/sponsor")}>Sponsor</Link></li>

  <li class="menu-single">
    <Header.ToggleMenu name="About" class="size-">
      {@render aboutUl()}
    </Header.ToggleMenu>
  </li>
</Header>

<hr class="margin-gap" />

<main style:flex="auto">
  {@render children()}
</main>

<hr class="margin-gap" />

<Footer />
