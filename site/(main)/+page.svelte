<script lang="ts">
  import { Circle } from "@lucide/svelte";
  import { resolve } from "$app/paths";
  import { Mastodon } from "$lib/icon";
  import Link from "$lib/Link";
  import banner from "./banner.svg";
  import Status from "./Status.svelte";

  const { data } = $props();

  const href =
    "https://2026.pgconf.dev/svelte/immutable/assets/butcher.BRs9V-uj.avif";
</script>

<style>
  :global main + hr {
    display: none;
  }

  :global main {
    margin-block-end: var(--gap);
  }

  .hero {
    margin-block: calc(2 * var(--margin));

    dd {
      line-height: 1.2;
    }
  }

  .tint {
    background-color: var(--bg-tint);
    padding-block: var(--margin);
  }

  .banner > img {
    max-height: calc(200vh / 3);
    min-height: calc(100vh / 3);
    object-fit: cover;
  }

  .button.circle {
    padding-inline: 1.5em;
  }
</style>

<svelte:head>
  <title>PGConf.dev 2027</title>
  <meta
    name="description"
    content="PGConf.dev 2027 will be held on May 11–14 in Montreal, QC to bring users, developers, and organizers together to advance PostgreSQL development."
  />
  <link href={Mastodon.href} rel="me" />
</svelte:head>

<section class="(main) hero">
  <hgroup>
    <p class="action">The PostgreSQL Developer Conference</p>

    <h1 style:--size="var(--h0-size)">
      <span class="action">PGConf</span>.dev
      <br />
      <span class="mute">2027</span>
    </h1>

    <p class="h2" style:font-weight="400">
      Where PostgreSQL is <em>made</em>
    </p>
  </hgroup>

  <hr class="section" />

  <dl class="grid+16 dedent section">
    <div>
      <dt class="over">Time</dt>
      <dd class="lede">
        <time datetime="2027-05-11">May 11</time>
        &ndash;
        <time datetime="2027-05-14">14</time>, 2027
      </dd>
      <dd><small>Tuesday through Friday</small></dd>
    </div>

    <div>
      <dt class="over">Location</dt>
      <dd class="lede">Montréal, QC</dd>
      <dd><small>Plaza Centre-Ville</small></dd>
    </div>

    <div>
      <dt class="over">Format</dt>
      <dd class="lede">3+ tracks × 4 days</dd>
      <dd><small>~300 attendees</small></dd>
    </div>

    <div>
      <dt class="over">Content</dt>
      <dd class="lede">
        Due <time datetime="2027-02-14">Feb 14</time>
      </dd>
      <dd><small>11:59pm UTC</small></dd>
    </div>
  </dl>

  <div class="flex">
    <a href="#" class="button circle delete stroke">Register</a>
    <Link href={resolve("/program")} class="button circle stroke"
      >Submit a talk</Link
    >
  </div>
</section>

<section class="(main) banner">
  <img src={banner} fetchpriority="high" alt="Banner with Montreal Skyline" />
</section>

<section class="tint">
  <div class="(main) grid/3@48-" style:gap="var(--margin)">
    <hgroup>
      <p>About the Conference</p>
      <h2>Built by and for PostgreSQL contributors.</h2>
    </hgroup>

    <div class="column-span-2 text">
      <p class="lede">
        PGConf.dev is the annual gathering of PostgreSQL hackers, committers,
        extension authors, and the developers who work with them. Four days of
        unconference sessions, hallway-track conversations, and talks that go
        deeper than the conference circuit usually allows — written by the
        people actually shipping the database.
      </p>

      <p>
        Now in its fourth year, the conference moves between cities each spring
        to keep the core team and contributor community in the same room at
        least once a year.
      </p>

      <p><Link href={resolve("/about")}>Read more about who we are →</Link></p>
    </div>
  </div>
</section>

<section class="(main)">
  <div
    class="border insert-edge grid/3@48-"
    style:align-items="center"
    style:padding="var(--margin)"
  >
    <div class="column-span-2 margin-gap note text">
      <hgroup class="h3">
        <p class="iconic insert">
          <Circle class="size--" style="fill: currentColor" />
          Call for Proposals — open through 14 Feb 2027
        </p>
        <h2>Submit a talk, unconference topic, or tutorial.</h2>
      </hgroup>

      <p>
        We're looking for technical talks from contributors at every level —
        your first commit, your hardest debug, the extension you wish existed.
        Three formats: 45-minute talks, 90-minute tutorials, and ad-hoc
        unconference sessions.
      </p>
    </div>

    <Link
      class="button circle"
      href={resolve("/program")}
      style="justify-self: end"
    >
      Submit a proposal
    </Link>
  </div>
</section>

<section class="tint">
  <div class="(main)">
    <hgroup class="margin-gap text">
      <p>Sponsors</p>
      <h2>The companies underwriting 2027.</h2>
      <p>
        PGConf.dev is non-profit. Sponsors cover the venue, A/V, scholarships,
        and the parts of the program that ticket revenue alone can't.
      </p>
    </hgroup>

    <p>
      <Link href={resolve("/sponsor")}>Sponsor PGConf.dev 2027 →</Link>
    </p>
  </div>
</section>

<section class="(main)">
  <hgroup class="margin-gap text">
    <p>From past editions</p>
    <h2>Three years of contributor conversation.</h2>
    <p>
      A look at the rooms, the hallway track, and the people who keep showing
      up.
    </p>
  </hgroup>

  <div class="grid+16">
    <figure>
      <img src={href} alt="" />
      <figcaption class="over">
        <strong>2026 · Vancouver</strong>
        Day-one keynote
      </figcaption>
    </figure>

    <figure>
      <img src={href} alt="" />
      <figcaption class="over">
        <strong>2025 · Montréal</strong>
        Unconference scheduling
      </figcaption>
    </figure>

    <figure>
      <img src={href} alt="" />
      <figcaption class="over">
        <strong>2024 · Vancouver</strong>
        Hallway-track conversation
      </figcaption>
    </figure>

    <figure>
      <img src={href} alt="" />
      <figcaption class="over">
        <strong>2025 · Montréal</strong>
        Tutorial day
      </figcaption>
    </figure>
  </div>
</section>

{#await data.statuses then statuses}
  <section class="tint">
    <div class="(main)">
      <hgroup class="margin-gap text">
        <p>Latest</p>
        <h2>News from the organizers</h2>
        <p>
          Schedule drops, deadlines, and travel notes — posted to @pgconfdev on
          Mastodon as they happen.
        </p>
      </hgroup>

      <div class="grid+18">
        {#each statuses as status (status.id)}
          <Status {status} />
        {/each}
      </div>
    </div>
  </section>
{/await}

<section
  style:background-color="var(--action)"
  style:color="var(--bg)"
  style:padding-block="var(--margin)"
>
  <div class="(main)">
    <hgroup class="h1">
      <p style:color="var(--bg)">Registration</p>
      <h2 class="text">Reserve your seat for the 2027 edition.</h2>
    </hgroup>

    <p
      class="margin-gap size-"
      style="
      font-family: var(--mono-font);
      letter-spacing: 0.05em;
      opacity: 0.85;
    "
    >
      <strong style="font-weight: 500">Early-bird $480</strong> through 31 Jan
      &nbsp;·&nbsp;
      <strong style="font-weight: 500">Standard $640</strong>
      &nbsp;·&nbsp;
      <strong style="font-weight: 500">Student $120</strong>
    </p>

    <a
      class="button circle"
      href="#"
      style:background-color="var(--bg)"
      style:color="var(--delete-fg)"
    >
      Register now
    </a>
  </div>
</section>
