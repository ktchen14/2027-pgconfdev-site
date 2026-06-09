<script lang="ts">
  import { GitHub, Mastodon } from "$lib/icon";
  import Header from "./Header";

  const { Link, ToggleMenu } = Header;

  const { children } = $props();
</script>

<style>
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
    <ToggleMenu name="Program">
      <ul>
        <li><Link href="/program">Schedule</Link></li>
        <li><Link href="/cfp">Call for proposals</Link></li>
      </ul>
    </ToggleMenu>
  </li>

  <li class="menu-single">
    <ToggleMenu name="Attend">
      <ul>
        <li><Link href="/attend">Venue</Link></li>
        <li><Link href="/attend/travel">Travel &amp; hotels</Link></li>
        <li><Link href="/attend/social">Social events</Link></li>
        <li><Link href="/attend/volunteer">Volunteer</Link></li>
      </ul>
    </ToggleMenu>
  </li>

  <li><Link href="/sponsor">Sponsor</Link></li>

  <li class="menu-single">
    <ToggleMenu name="About">
      <ul>
        <li><Link href="/about">About PGConf.dev</Link></li>
        <li><Link href="/team">Team</Link></li>
        <li><Link href="/conduct">Code of conduct</Link></li>
        <li><Link href="/policies">Policies &amp; privacy</Link></li>
      </ul>
    </ToggleMenu>
  </li>
</Header>

<hr class="margin-gap" />

<main style:flex="auto">
  {@render children()}
</main>

<hr class="margin-gap" />

<footer class="flex[48-] (main) margin-gap note">
  <p>Follow us on <Mastodon /> for the latest news on PGConf.dev 2027</p>
  <p>Fork this site on <GitHub /></p>
</footer>
