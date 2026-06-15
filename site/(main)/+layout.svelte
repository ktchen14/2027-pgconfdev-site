<script lang="ts">
  import { resolve } from "$app/paths";
  import { GitHub, Mastodon } from "$lib/icon";
  import Link from "$lib/Link";
  import Header from "./Header";

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

  ul {
    font-size: 0.875em;
  }

  footer {
    justify-content: space-between;
  }
</style>

<Header class="(main)">
  <li class="menu-single">
    <Header.ToggleMenu name="Program">
      <ul>
        <li><Link href={resolve("/program")}>Schedule</Link></li>
        <li><Link href={resolve("/cfp")}>Call for proposals</Link></li>
      </ul>
    </Header.ToggleMenu>
  </li>

  <li class="menu-single">
    <Header.ToggleMenu name="Attend">
      <ul>
        <li><Link href={resolve("/attend")}>Venue</Link></li>
        <li>
          <Link href={resolve("/attend/travel")}>Travel &amp; hotels</Link>
        </li>
        <li><Link href={resolve("/attend/social")}>Social events</Link></li>
        <li><Link href={resolve("/attend/volunteer")}>Volunteer</Link></li>
      </ul>
    </Header.ToggleMenu>
  </li>

  <li><Link href={resolve("/sponsor")}>Sponsor</Link></li>

  <li class="menu-single">
    <Header.ToggleMenu name="About">
      <ul>
        <li><Link href={resolve("/about")}>About PGConf.dev</Link></li>
        <li><Link href={resolve("/about/team")}>Team</Link></li>
        <li><Link href={resolve("/about/conduct")}>Code of conduct</Link></li>
        <li>
          <Link href={resolve("/about/policies")}>Policies &amp; privacy</Link>
        </li>
      </ul>
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
