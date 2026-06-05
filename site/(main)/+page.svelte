<script lang="ts">
  import { Circle } from "@lucide/svelte";
  import { resolve } from "$app/paths";
  import banner from "./banner.svg";

  const href =
    "https://2026.pgconf.dev/svelte/immutable/assets/butcher.BRs9V-uj.avif";
</script>

<style>
  .hero {
    margin-block: calc(2 * var(--margin));

    h1 {
      font-size: clamp(3rem, 6vw + 1rem, 6.5rem);
      letter-spacing: -2%;
      line-height: 1;
    }

    dl {
      gap: var(--margin);
      margin-block-end: var(--margin);

      dt {
        margin-block-end: 0.5rem;
      }

      dd {
        line-height: 1.2;
        margin-inline-start: 0;
      }
    }
  }

  .banner {
    margin-block-end: var(--margin);
    text-align: center;

    > img {
      max-height: 67vh;
      min-height: 34vh;
      object-fit: cover;
    }
  }

  @media (width >= 768px) {
    .whatis {
      display: grid;
      gap: 3rem;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  h2 {
    font-size: clamp(1.625em, 1.5vw + 1em, 2.25em);
    font-weight: 500;
    letter-spacing: -0.015em;
    text-wrap: balance;
  }

  .cfp-card {
    border: 1px solid var(--border);
    border-left: 3px solid var(--insert);
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    padding: var(--margin);

    @media (min-width: 768px) {
      align-items: center;
      gap: var(--margin);
      grid-template-columns: 1fr auto;
    }
  }

  .cfp-card h2 {
    font-size: 1.625rem;
  }

  figcaption {
    color: var(--fg-tint);
    font-family: var(--mono-font);
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
</style>

<svelte:head>
  <title>PGConf.dev 2027</title>
  <meta
    name="description"
    content="PGConf.dev 2027 will be held on May 11–14 in Montreal, QC to bring users, developers, and organizers together to advance PostgreSQL development."
  />
  <link href="https://mastodon.social/@pgconfdev" rel="me" />
</svelte:head>

<section class="hero restrict-1280">
  <hgroup>
    <p class="action">The PostgreSQL Developer Conference</p>

    <h1>
      <span class="action">PGConf</span>.dev
      <br />
      <span class="fg-mute">2027</span>
    </h1>

    <p class="lede" style:font-size="var(--h2-size)">
      Where PostgreSQL is <em>made</em>
    </p>
  </hgroup>

  <hr style:margin-block="var(--margin)" />

  <dl class="grid-1234">
    <div>
      <dt class="over">Time</dt>
      <dd class="lede">
        <time datetime="2027-05-11">May 11</time>
        &ndash;
        <time datetime="2027-05-14">14</time>, 2027
      </dd>
      <dd class="fg-mute"><small>Tuesday through Friday</small></dd>
    </div>

    <div>
      <dt class="over">Location</dt>
      <dd class="lede">Montréal, QC</dd>
      <dd class="fg-mute"><small>Plaza Centre-Ville</small></dd>
    </div>

    <div>
      <dt class="over">Format</dt>
      <dd class="lede">3+ tracks × 4 days</dd>
      <dd class="ft-mute"><small>~300 attendees</small></dd>
    </div>

    <div>
      <dt class="over">Content</dt>
      <dd class="lede">
        Due <time datetime="2027-02-14">Feb 14</time>
      </dd>
      <dd class="fg-mute"><small>11:59pm UTC</small></dd>
    </div>
  </dl>

  <div class="flex">
    <a href={resolve("/")} class="circle" role="button">Register</a>
    <a href={resolve("/")} class="circle" role="button">Submit a talk</a>
  </div>
</section>

<div class="banner restrict-1280">
  <img src={banner} fetchpriority="high" alt="Banner with Vancouver Skyline" />
</div>

<section
  class="bg-tint restrict-1280 whatis"
  style:padding-block="var(--margin)"
>
  <hgroup>
    <p>About the Conference</p>
    <h2>Built by and for PostgreSQL contributors.</h2>
  </hgroup>

  <div style="grid-column: span 2">
    <p class="lede">
      PGConf.dev is the annual gathering of PostgreSQL hackers, committers,
      extension authors, and the developers who work with them. Four days of
      unconference sessions, hallway-track conversations, and talks that go
      deeper than the conference circuit usually allows — written by the people
      actually shipping the database.
    </p>

    <p>
      Now in its fourth year, the conference moves between cities each spring to
      keep the core team and contributor community in the same room at least
      once a year.
    </p>

    <dl>
      <dt>This is an item with another list</dt>
      <dd>This is a description</dd>

      <dt>This is an item with another list</dt>
      <dt>This is an item with another list</dt>
      <dd>This is a description</dd>
      <dd>This is a description</dd>
    </dl>
    <ul>
      <li>This is a test</li>
      <li>This is another item</li>
      <li>
        This is an item with another list
        <ol>
          <li>This is a test</li>
          <li>This is another item</li>
          <li>This is a third item</li>
        </ol>
      </li>
      <li>This is a third item</li>
      <li>
        <p>This is an item with another list</p>
        <p>This is an item with another list</p>
        <ol>
          <li>This is a test</li>
          <li>This is another item</li>
          <li>This is a third item</li>
        </ol>
      </li>
      <li>This is a test</li>
      <li>This is another item</li>
      <li>This is a third item</li>
      <li>
        <dl>
          <dt>This is an item with another list</dt>
          <dd>
            This is a description
            <!-- <ul> -->
            <!--   <li>This is a test</li> -->
            <!--   <li>This is another item</li> -->
            <!--   <li>This is a third item</li> -->
            <!-- </ul> -->
          </dd>
        </dl>
      </li>
    </ul>

    <p><a href="About.html">Read more about who we are →</a></p>
  </div>
</section>

<section class="restrict-1280" style:margin-block="var(--margin)">
  <div class="cfp-card">
    <div style="font-size: 0.875rem">
      <hgroup style:margin-bottom="1.25rem">
        <p class="iconic insert">
          <Circle style="--size: 0.75em; fill: currentColor;" />
          Call for Proposals — open through 14 Feb 2027
        </p>
        <h2>Submit a talk, unconference topic, or tutorial.</h2>
      </hgroup>

      <p class="fg-mute" style="max-width: 38rem;">
        We're looking for technical talks from contributors at every level —
        your first commit, your hardest debug, the extension you wish existed.
        Three formats: 45-minute talks, 90-minute tutorials, and ad-hoc
        unconference sessions.
      </p>
    </div>

    <a role="button" href="#">Submit a proposal</a>
  </div>
</section>

<section class="bg-tint restrict-1280" style:padding-block="var(--margin)">
  <hgroup style="margin-block-end: 1.25em;">
    <p>Sponsors</p>
    <h2>The companies underwriting 2027.</h2>
    <p>
      PGConf.dev is non-profit. Sponsors cover the venue, A/V, scholarships, and
      the parts of the program that ticket revenue alone can't.
    </p>
  </hgroup>

  <p class="small" style="margin-top: 2rem;;">
    <a href="#">Sponsor PGConf.dev 2027 →</a>
  </p>
</section>

<section class="restrict-1280" style:margin-block="var(--margin)">
  <hgroup style="margin-block-end: var(--margin);">
    <p>From past editions</p>
    <h2>Three years of contributor conversation.</h2>
    <p>
      A look at the rooms, the hallway track, and the people who keep showing
      up.
    </p>
  </hgroup>

<article><details><summary class="circle" role="button">U.S. Residents 🇺🇸</summary> <p>Citizens
and permanent residents of the U.S. may enter Canada visa-free. U.S. Citizens
must have a valid passport while lawful permanent residents must have the
documents listed <a
href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html#lawful-pr-us">here</a>.</p></details>
<hr> <details><summary role="button">Electronic Travel Authorization (eTA)</summary>
<p>Visitors from <a
href="https://ircc.canada.ca/english/visit/visas.asp">visa-exempt countries</a>
should apply for an eTA <a
href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/apply.html">here</a>.
Most applications are approved quickly.</p></details> <hr>
<details><summary>Visitor Visa</summary>
<p>Procedures for obtaining a visitor visa are available <a
href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/about-visitor-visa.html">here</a>.
This process can be lengthy and we advise that you start it as soon as you have
decided that you will be attending the conference.</p>
<p>Procedures for obtaining a visitor visa are available <a
href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/about-visitor-visa.html">here</a>.
This process can be lengthy and we advise that you start it as soon as you have
decided that you will be attending the conference.</p>
</details></article>

  <p>First paragraph</p>

  <div class="grid-1234">
    <figure>
      <img src={href} alt="" />
      <figcaption>
        <strong>2026 · Vancouver</strong>
        Day-one keynote
      </figcaption>
    </figure>

    <figure>
      <img src={href} alt="" />
      <figcaption>
        <strong>2025 · Montréal</strong>
        Unconference scheduling
      </figcaption>
    </figure>

    <figure>
      <img src={href} alt="" />
      <figcaption>
        <strong>2024 · Vancouver</strong>
        Hallway-track conversation
      </figcaption>
    </figure>

    <figure>
      <img src={href} alt="" />
      <figcaption>
        <strong>2025 · Montréal</strong>
        Tutorial day
      </figcaption>
    </figure>
  </div>
</section>
