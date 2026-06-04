<script lang="ts">
  import { GitHub, Mastodon } from "$lib/icon";
  import Header from "./Header";

  const { Link, ToggleMenu } = Header;

  const { children } = $props();
</script>

<style>
  :is(.menu-single, .menu-triple) :global([data-open]) {
    font-size: 0.875em;
    margin-block: 0.5rem calc(1.5rem - 0.25rem - 0.875 * 0.25rem);
  }

  .menu-single {
    position: relative;
  }

  .menu-single :global([data-open]) {
    @media (width >= 48rem) {
      right: calc(-1.5rem - 1px);
      width: 16rem;
    }
  }

  .menu-triple :global([data-open]) {
    @media (width >= 48rem) {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(3, 1fr);
      right: calc(50% - min(45rem, calc(100vw - 3rem)) / 2);
      width: 45rem;
    }
  }

  .menu-list {
    margin-block: 1.25em;

    @media (width >= 48rem) {
      margin-block: 0;
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
  <li class="menu-triple">
    <ToggleMenu name="Program">
      <div class="menu-list">
        <p class="over">Schedule</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="#">Full schedule</Link></li>
          <li><Link href="#">Tue · Tutorials</Link></li>
          <li><Link href="#">Wed · Talks</Link></li>
          <li><Link href="#">Thu · Talks</Link></li>
          <li><Link href="#">Fri · Unconference</Link></li>
        </ul>
      </div>

      <div class="menu-list">
        <p class="over">Formats</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="#">Talks</Link></li>
          <li><Link href="#">Tutorials</Link></li>
          <li><Link href="#">Keynotes</Link></li>
          <li><Link href="#">Lightning talks</Link></li>
        </ul>
      </div>

      <div class="menu-list">
        <p class="over">More</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="#">Speakers</Link></li>
          <li><Link href="#">Posters</Link></li>
          <li><Link href="#">Office hours</Link></li>
          <li><Link href="#">Call for proposals</Link></li>
        </ul>
      </div>
    </ToggleMenu>
  </li>

  <li class="menu-triple">
    <ToggleMenu name="Attend">
      <div class="menu-list">
        <p class="over">Getting there</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="#">Register</Link></li>
          <li><Link href="#">Travel</Link></li>
          <li><Link href="#">Hotels</Link></li>
          <li><Link href="#">Visa letters</Link></li>
          <li><Link href="#">Scholarships</Link></li>
        </ul>
      </div>

      <div class="menu-list">
        <p class="over">At the venue</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="#">Venue &amp; rooms</Link></li>
          <li><Link href="#">Floor plans</Link></li>
          <li><Link href="#">Wi-Fi</Link></li>
          <li><Link href="#">Accessibility</Link></li>
          <li><Link href="#">Childcare</Link></li>
        </ul>
      </div>

      <div class="menu-list">
        <p class="over">Social &amp; community</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="#">Welcome breakfast</Link></li>
          <li><Link href="#">Social run</Link></li>
          <li><Link href="#">Gala reception</Link></li>
          <li><Link href="#">Conference pub</Link></li>
          <li><Link href="#">Discord</Link></li>
        </ul>
      </div>
    </ToggleMenu>
  </li>

  <li class="menu-single">
    <ToggleMenu name="Sponsor">
      <div class="menu-list">
        <p class="over">Sponsor</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="#">Our 2027 sponsors</Link></li>
          <li><Link href="#">Become a sponsor</Link></li>
          <li><Link href="#">Prospectus</Link></li>
        </ul>
      </div>
    </ToggleMenu>
  </li>

  <li class="menu-single">
    <ToggleMenu name="About">
      <div class="menu-list">
        <p class="over">About the Conference</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="About.html">What PGConf.dev is</Link></li>
          <li><Link href="About.html#committee">Organizing committee</Link></li>
          <li>
            <Link href="About.html#history">History &amp; past editions</Link>
          </li>
          <li><Link href="About.html#contact">Contact</Link></li>
          <li><Link href="CoC.html">Code of conduct</Link></li>
        </ul>
      </div>
    </ToggleMenu>
  </li>
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
