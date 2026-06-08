<script lang="ts">
  import { GitHub, Mastodon } from "$lib/icon";
  import Header from "./Header";

  const { Link, ToggleMenu } = Header;

  const { children } = $props();
</script>

<style>
  :is(.menu-single, .menu-triple) :global([data-open]) {
    font-size: 0.875em;
    margin-block-start: 1em;
    padding-block-end: 1.25em;
  }

  .menu-single {
    position: relative;
  }

  .menu-single :global([data-open]) {
    @media (width >= 48rem) {
      right: calc(-1.5rem - 1px);
      width: 15rem;
    }
  }

  .menu-triple :global([data-open]) {
    @media (width >= 48rem) {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: repeat(3, 1fr);
      right: calc(50% - min(45rem, calc(100vw - 3rem)) / 2);
      width: 45rem;

      > * {
        margin-block: 0;
      }
    }
  }

  footer {
    justify-content: space-between;
  }
</style>

<Header class="merge-both">
  <li class="menu-triple">
    <ToggleMenu name="Program">
      <div class="margin-p">
        <p class="over">Schedule</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="/program">Full schedule</Link></li>
          <li><Link href="/program#day-1">Tue · Tutorials</Link></li>
          <li><Link href="/program#day-2">Wed · Talks</Link></li>
          <li><Link href="/program#day-3">Thu · Talks</Link></li>
          <li><Link href="/program#day-4">Fri · Unconference</Link></li>
        </ul>
      </div>

      <div class="margin-p">
        <p class="over">Formats</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="#" class="delete">Talks</Link></li>
          <li><Link href="#" class="delete">Tutorials</Link></li>
          <li><Link href="#" class="delete">Keynotes</Link></li>
          <li><Link href="#" class="delete">Lightning talks</Link></li>
        </ul>
      </div>

      <div class="margin-p">
        <p class="over">More</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="#" class="delete">Speakers</Link></li>
          <li><Link href="#" class="delete">Posters</Link></li>
          <li><Link href="#" class="delete">Office hours</Link></li>
          <li><Link href="/cfp">Call for proposals</Link></li>
        </ul>
      </div>
    </ToggleMenu>
  </li>

  <li class="menu-triple">
    <ToggleMenu name="Attend">
      <div class="margin-p">
        <p class="over">Getting there</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="#" class="delete">Register</Link></li>
          <li><Link href="/attend/travel">Travel</Link></li>
          <li><Link href="/attend/travel#hotels">Hotels</Link></li>
          <li><Link href="/attend/travel#visa">Visa letters</Link></li>
          <li><Link href="#" class="delete">Scholarships</Link></li>
        </ul>
      </div>

      <div class="margin-p">
        <p class="over">At the venue</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="/attend">Venue &amp; rooms</Link></li>
          <li><Link href="/attend#floor-plans">Floor plans</Link></li>
          <li><Link href="#" class="delete">Wi-Fi</Link></li>
          <li><Link href="/attend#accessibility">Accessibility</Link></li>
          <li><Link href="#" class="delete">Childcare</Link></li>
        </ul>
      </div>

      <div class="margin-p">
        <p class="over">Social &amp; community</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li>
            <Link href="/attend/social#breakfast">Welcome breakfast</Link>
          </li>
          <li><Link href="/attend/social#run">Social run</Link></li>
          <li><Link href="/attend/social#reception">Reception</Link></li>
          <li><Link href="/attend/social#pub">Conference pub</Link></li>
          <li><Link href="#" class="delete">Discord</Link></li>
        </ul>
      </div>
    </ToggleMenu>
  </li>

  <li class="menu-single">
    <ToggleMenu name="Sponsor">
      <div class="margin-p">
        <p class="over">Sponsor</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="/sponsor">Our 2027 sponsors</Link></li>
          <li><Link href="/sponsor#become">Become a sponsor</Link></li>
          <li><Link href="#" class="delete">Prospectus</Link></li>
        </ul>
      </div>
    </ToggleMenu>
  </li>

  <li class="menu-single">
    <ToggleMenu name="About">
      <div class="margin-p">
        <p class="over">About the Conference</p>
        <hr style:margin-block="0 0.75rem" />
        <ul>
          <li><Link href="/about">What PGConf.dev is</Link></li>
          <li><Link href="/about#committee">Organizing committee</Link></li>
          <li>
            <Link href="/about#history">History &amp; past editions</Link>
          </li>
          <li><Link href="/about#contact">Contact</Link></li>
          <li><Link href="/conduct">Code of conduct</Link></li>
        </ul>
      </div>
    </ToggleMenu>
  </li>
</Header>

<hr class="margin-gap" />

<main style:flex="auto">
  {@render children()}
</main>

<hr class="margin-gap" />

<footer class="flex[48-] merge-both margin-gap note">
  <p>Follow us on <Mastodon /> for the latest news on PGConf.dev 2027</p>
  <p>Fork this site on <GitHub /></p>
</footer>
