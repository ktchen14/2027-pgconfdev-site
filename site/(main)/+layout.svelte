<script lang="ts">
  import { resolve } from "$app/paths";
  import { GitHub, Mastodon } from "$lib/icon";
  import Link from "$lib/Link";
  import { ul as aboutUl } from "./about/SectionNav.svelte";
  import { ul as attendUl } from "./attend/SectionNav.svelte";
  import Header from "./Header";
  import { ul as programUl } from "./program/SectionNav.svelte";

  const { children } = $props();
</script>

<style>
  :global(#root) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    min-height: 100vh;
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

  footer {
    justify-content: space-between;
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

<footer class="(main) flex@48- margin-gap note">
  <p>Follow us on <Mastodon /> for the latest news on PGConf.dev 2027</p>
  <p>Fork this site on <GitHub /></p>
</footer>
