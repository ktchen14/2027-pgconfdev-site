<script lang="ts">
  import { GitHub, Mastodon } from "$lib/icon";
  import Header from "./Header";

  const { children } = $props();
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

<Header class="restrict-1280">
  <Header.Menu name="Program" triple>
    <div>
      <p class="kicker">Schedule</p>
      <hr style:margin-block="0 0.75rem" />
      <ul>
        <li><a href="#">Full schedule</a></li>
        <li><a href="#">Tue · Tutorials</a></li>
        <li><a href="#">Wed · Talks</a></li>
        <li><a href="#">Thu · Talks</a></li>
        <li><a href="#">Fri · Unconference</a></li>
      </ul>
    </div>

    <div>
      <p class="kicker">Formats</p>
      <hr style:margin-block="0 0.75rem" />
      <ul>
        <li><a href="#">Talks</a></li>
        <li><a href="#">Tutorials</a></li>
        <li><a href="#">Keynotes</a></li>
        <li><a href="#">Lightning talks</a></li>
      </ul>
    </div>

    <div>
      <p class="kicker">More</p>
      <hr style:margin-block="0 0.75rem" />
      <ul>
        <li><a href="#">Speakers</a></li>
        <li><a href="#">Posters</a></li>
        <li><a href="#">Office hours</a></li>
        <li><a href="#">Call for proposals</a></li>
      </ul>
    </div>
  </Header.Menu>

  <Header.Menu name="Attend" triple>
    <div>
      <p class="kicker">Getting there</p>
      <hr style:margin-block="0 0.75rem" />
      <ul>
        <li><a href="#">Register</a></li>
        <li><a href="#">Travel</a></li>
        <li><a href="#">Hotels</a></li>
        <li><a href="#">Visa letters</a></li>
        <li><a href="#">Scholarships</a></li>
      </ul>
    </div>

    <div>
      <p class="kicker">At the venue</p>
      <hr style:margin-block="0 0.75rem" />
      <ul>
        <li><a href="#">Venue &amp; rooms</a></li>
        <li><a href="#">Floor plans</a></li>
        <li><a href="#">Wi-Fi</a></li>
        <li><a href="#">Accessibility</a></li>
        <li><a href="#">Childcare</a></li>
      </ul>
    </div>

    <div>
      <p class="kicker">Social &amp; community</p>
      <hr style:margin-block="0 0.75rem" />
      <ul>
        <li><a href="#">Welcome breakfast</a></li>
        <li><a href="#">Social run</a></li>
        <li><a href="#">Gala reception</a></li>
        <li><a href="#">Conference pub</a></li>
        <li><a href="#">Discord</a></li>
      </ul>
    </div>
  </Header.Menu>

  <Header.Menu name="Sponsor">
    <p class="kicker">Sponsor</p>
    <hr style:margin-block="0 0.75rem" />
    <ul>
      <li><a href="#">Our 2027 sponsors</a></li>
      <li><a href="#">Become a sponsor</a></li>
      <li><a href="#">Prospectus</a></li>
    </ul>
  </Header.Menu>

  <Header.Menu name="About">
    <p class="kicker">About the Conference</p>
    <hr style:margin-block="0 0.75rem" />
    <ul>
      <li><a href="About.html">What PGConf.dev is</a></li>
      <li><a href="About.html#committee">Organizing committee</a></li>
      <li><a href="About.html#history">History &amp; past editions</a></li>
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
