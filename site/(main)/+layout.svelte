<script lang="ts">
  import { resolve } from "$app/paths";
  import { GitHub, Mastodon } from "$lib/icon";
  import Header from "./Header";

  const { children } = $props();

  let search = $state();
</script>

<style>
  ul :global(a) {
    border-radius: var(--border-radius);
    display: block;
    margin-block: -0.25em;
    margin-inline: -0.5em;
    padding-block: 0.25em;
    padding-inline: 0.5em;

    &:hover {
      background-color: var(--bg-tint);
    }
  }

  footer {
    color: var(--fg-mute);
    font-size: 0.875rem;

    @media (width >= 768px) {
      display: flex;
      gap: 1.5rem;
      justify-content: space-between;

      > * {
        margin-block: 0;
      }
    }
  }
</style>

<Header bind:search class="restrict-1280">
  <Header.Link href={resolve("/")}>Program</Header.Link>

  <Header.Menu name="Attend">
    <div style:margin-block-end="1.5rem">
      <p class="kicker">Getting there</p>
      <hr style:margin-block="0 0.75rem" />
      <ul>
        <li><a href="#">Register <span class="tag tag--ext">ext</span></a></li>
        <li><a href="#">Tickets &amp; pricing</a></li>
        <li><a href="#">Travel</a></li>
        <li><a href="#">Hotels</a></li>
        <li><a href="#">Visa letters</a></li>
        <li><a href="#">Scholarships</a></li>
      </ul>
    </div>

    <div style:margin-block-end="1.5rem">
      <p class="kicker">At the venue</p>
      <hr style:margin-block="0 0.75rem" />
      <ul>
        <li><a href="#">Venue &amp; rooms</a></li>
        <li><a href="#">Floor plans</a></li>
        <li><a href="#">Wi-Fi</a></li>
        <li><a href="#">Accessibility</a></li>
        <li><a href="#">Childcare</a></li>
        <li><a href="#">Code of conduct</a></li>
      </ul>
    </div>

    <div style:margin-block-end="1.5rem">
      <p class="kicker">Social &amp; community</p>
      <hr style:margin-block="0 0.75rem" />
      <ul>
        <li><a href="#">Welcome breakfast</a></li>
        <li><a href="#">Social run</a></li>
        <li><a href="#">Meet &amp; Eat</a></li>
        <li><a href="#">Gala reception</a></li>
        <li><a href="#">Karaoke</a></li>
        <li><a href="#">Conference pub</a></li>
        <li><a href="#">Discord <span class="tag tag--ext">ext</span></a></li>
        <li><a href="#">Volunteer</a></li>
      </ul>
    </div>

    <div>
      <span>Everything you need to show up</span>
      <a href="#">New-attendee guide →</a>
    </div>
  </Header.Menu>

  <Header.Menu name="About">
    <p class="kicker">About the Conference</p>
    <hr style:margin-block="0 0.75rem" />
    <ul>
      <Header.Link href="About.html">What PGConf.dev is</Header.Link>
      <li><a href="About.html#committee">Organizing committee</a></li>
      <li>
        <a href="About.html#history">History &amp; past editions</a>
      </li>
      <li><a href="About.html#contact">Contact</a></li>
      <li><a href="CoC.html">Code of conduct</a></li>
    </ul>
  </Header.Menu>

  <Header.Menu name="About2">
    <p class="kicker">About the Conference</p>
    <hr style:margin-block="0 0.75rem" />
    <ul>
      <li><a href="/">What PGConf.dev is</a></li>
      <li><a href="About.html#committee">Organizing committee</a></li>
      <li>
        <a href="About.html#history">History &amp; past editions</a>
      </li>
      <li><a href="About.html#contact">Contact</a></li>
      <li><a href="CoC.html">Code of conduct</a></li>
    </ul>
  </Header.Menu>
</Header>

<hr />

<main style:flex="auto">
  {@render children()}
</main>

<hr />

<footer class="restrict-1280">
  <p>Follow us on <Mastodon /> for the latest news on PGConf.dev 2027</p>
  <p>Fork this site on <GitHub /></p>
</footer>
