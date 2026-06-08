<script>
  import { resolve } from "$app/paths";
  import Rule from "$lib/Rule.svelte";
</script>

<style>
  header h1 {
    font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem);
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .fullwidth {
    clear: both;
    padding-inline: max(var(--margin), (100vw - 1280px + 6rem) / 2);
  }

  nav:where(:not(.breadcrumb)) li {
    margin-block: 0;
  }

  nav:where(:not(.breadcrumb)) a {
    display: block;
  }

  .section-nav a {
    border-inline-start: 2px solid var(--border);
    border-radius: 0;
    margin-inline: 0;

    &[aria-current]:where(:not([aria-current="false"])) {
      background-color: var(--action-bg-mute);
    }

    &:is(:hover, [aria-current]:where(:not([aria-current="false"]))) {
      border-color: var(--action-fg);
    }
  }

  /* Callouts */
  .callout {
    border-radius: var(--radius);
    padding: 1.5rem;
  }

  .callout--info {
    background: var(--action-bg-mute);
    border-inline-start: 3px solid var(--action-fg);
  }

  .callout--notice {
    background: var(--notice-bg-mute);
    border-inline-start: 3px solid var(--notice-fg);
  }

  /* List with left rule */
  .list-rule {
    border-inline-start: 3px solid var(--border);
    list-style-type: none;
    padding-inline: 1em;
  }

  /* Facts / definition rows */
  .facts {
    display: grid;
    gap: 0;

    > div {
      align-items: baseline;
      border-top: 1px solid var(--border);
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr;
      padding-block: 0.75rem;
    }

    dd {
      margin-inline-start: 0;
    }
  }

  .timeline > div {
    align-items: start;
    display: grid;
    gap: 1rem;
    grid-template-columns: 10rem 1fr;

    @media (width < 35rem) {
      grid-template-columns: 1fr;
    }
  }

  /* Portrait placeholder */
  .placeholder--portrait {
    aspect-ratio: 4 / 5;
    background:
      linear-gradient(
        135deg,
        transparent 49%,
        color-mix(in oklch, var(--bg-tint), var(--ink) 5%) 49%,
        color-mix(in oklch, var(--bg-tint), var(--ink) 5%) 51%,
        transparent 51%
      ),
      var(--bg-tint);
    background-size:
      14px 14px,
      100% 100%;
    border: 1px solid var(--border);
  }

  /* Photo placeholder */
  .photo-placeholder--wide {
    aspect-ratio: 16 / 7;
    background: var(--bg-tint);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--fg-tint);
    font-family: var(--mono-font);
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .person {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .person__name {
    font-family: var(--header-font);
    font-weight: 600;
    font-size: 1rem;
    margin: 0;
  }

  .person__role {
    font-family: var(--mono-font);
    font-size: 0.7rem;
    color: var(--fg-tint);
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .person__bio {
    font-size: 0.875rem;
    color: var(--fg-mute);
    margin: 0;
  }

  .contact-grid > * {
    background: var(--bg-tint);
    border: 1px solid var(--border);
    padding: 1.25rem;

    a {
      font-family: var(--mono-font);
    }
  }

  /* Pull quote */
  .pullquote {
    border-inline-start: none;
    border-top: 3px solid var(--action-fg);
    color: var(--fg-mute);
    font-family: var(--header-font);
    font-size: clamp(1.25rem, 2vw + 0.75rem, 1.75rem);
    font-style: italic;
    line-height: 1.35;
    margin-block: 0;
    padding-inline: 0;
    padding-top: 1rem;
  }

  cite {
    font-style: normal;
    letter-spacing: 0.05em;
  }

  .breadcrumb ol > li:where(:not(:first-child))::before {
    content: "›";
    margin-inline-start: 0.5em;
    padding-inline-end: 1em;
  }
</style>

<svelte:head>
  <title>About — PGConf.dev 2027</title>
  <meta
    name="description"
    content="About PGConf.dev — the annual PostgreSQL Developer Conference, its history, organizing committee, and how to get in touch."
  />
</svelte:head>

<nav class="breadcrumb fullwidth" aria-label="Breadcrumb">
  <ol class="flex over" style:gap="0.5em">
    <li><a href="/">PGConf.dev 2027</a></li>
    <li><a href="/">About</a></li>
  </ol>
</nav>

<header class="fullwidth">
  <hgroup>
    <p class="action">About PGConf.dev</p>
    <h1>The PostgreSQL Developer Conference.</h1>
  </hgroup>

  <p class="lede fg-mute">
    An annual gathering for contributors, committers, and the engineers building
    software with Postgres at its core. Run by the community, for the community
    — without the marketing layer.
  </p>
</header>

<hr class="margin-section" />

<nav
  aria-labelledby="section-nav-over"
  class="section-nav float-left none[-64]"
>
  <p id="section-nav-over" class="over">About the Conference</p>
  <ul class="fg-mute size-">
    <li>
      <a href={resolve("/about")} aria-current="page">What PGConf.dev is</a>
    </li>
    <li><a href="/about#committee">Organizing committee</a></li>
    <li><a href="/about#history">History &amp; past editions</a></li>
    <li><a href="/about#contact">Contact</a></li>
    <li><a href="/conduct">Code of conduct</a></li>
  </ul>
</nav>

<nav aria-labelledby="content-nav-over" class="float-right none[-48]">
  <p id="content-nav-over" class="over">On this page</p>
  <ol class="fg-mute size-">
    <li><a href="#what">What PGConf.dev is</a></li>
    <li><a href="#who">Who attends</a></li>
    <li><a href="#history">A short history</a></li>
    <li><a href="#committee">Organizing committee</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</nav>

<aside class="glance-aside float-right none[-48]" aria-label="At a glance">
  <Rule>At a glance</Rule>
  <dl class="facts fg-mute size-">
    <div>
      <dt class="over">Conference</dt>
      <dd>
        PGConf.dev 2027 — the fourth annual PostgreSQL Developer Conference
      </dd>
    </div>
    <div>
      <dt class="over">Dates</dt>
      <dd>18 — 21 May 2027</dd>
    </div>
    <div>
      <dt class="over">Venue</dt>
      <dd>Palais des congrès de Montréal</dd>
    </div>
    <div>
      <dt class="over">Capacity</dt>
      <dd>~600 attendees</dd>
    </div>
    <div>
      <dt class="over">Format</dt>
      <dd>3 parallel tracks · tutorial day · 2 talk days · unconference day</dd>
    </div>
    <div>
      <dt class="over">Languages</dt>
      <dd>English</dd>
    </div>
    <div>
      <dt class="over">Organizer</dt>
      <dd>PostgreSQL Community Association of Canada</dd>
    </div>
  </dl>
</aside>

<!-- WHAT -->
<section id="what" class="main">
  <hgroup>
    <p>§ 01 · What it is</p>
    <h2>A working conference for the people building Postgres.</h2>
  </hgroup>

  <p class="lede">
    PGConf.dev was founded in 2024 to fill a specific gap: a yearly room where
    PostgreSQL contributors and the developers integrating Postgres into other
    systems could spend four days together, deeply, without the conference
    circuit's usual layer of polish.
  </p>

  <p>
    The format borrows from academic conferences — proposals are reviewed by a
    program committee, talks are technical, and at least a third of the schedule
    is unconference. The audience is mostly hands-on engineers: committers,
    extension authors, internals contributors, and the database teams that ship
    Postgres to production at scale.
  </p>

  <p>
    What it isn't: a vendor showcase, a marketing event, or an introductory
    conference. There are excellent conferences for those audiences — PGConf.EU,
    PostgresOpen, and a long tail of regional events. PGConf.dev sits adjacent
    to them, focused specifically on the contributor track.
  </p>

  <figure class="margin-section">
    <blockquote class="pullquote">
      <q>
        The only conference where I leave with a code review queue instead of a
        swag bag.
      </q>
    </blockquote>

    <figcaption class="over">
      <cite>— Returning attendee, 2025</cite>
    </figcaption>
  </figure>

  <figure>
    <div class="photo-placeholder--wide">
      [ Photo · main hall · past edition ]
    </div>
    <figcaption>
      Fig. 01 — A landscape photo from a recent edition — the main hall during a
      contributor talk. Replace with a real photograph.
    </figcaption>
  </figure>
</section>

<!-- WHO -->
<section id="who" class="main">
  <div class="margin-section">
    <hgroup>
      <p>§ 02 · Who attends</p>
      <h2>Roughly 600 people, two thirds of them contributors.</h2>
    </hgroup>

    <p>
      The room is intentionally small. We cap attendance to keep the hallway
      track real and the unconference sessions workable. Roughly:
    </p>

    <ul class="list-rule">
      <li>
        <strong>Core contributors</strong> — committers, major patch authors, and
        people who show up regularly on -hackers
      </li>
      <li>
        <strong>Extension authors</strong> — people building TimescaleDB, Citus, pgvector,
        AGE, the long tail of PGXN
      </li>
      <li>
        <strong>Internals engineers from downstream products</strong>
        — Crunchy, Citus/Microsoft, EDB, Tembo, Supabase, Neon, the cloud providers
      </li>
      <li>
        <strong>Application engineers</strong> who work close enough to the database
        that the contributor track is relevant to their day job
      </li>
    </ul>

    <p>
      If you've ever filed a bug report on -bugs, written an extension, or had
      to read <code>postgres.c</code> to find an answer — this is the conference for
      you.
    </p>
  </div>
</section>

<section class="fullwidth" aria-label="Statistics">
  <hr class="margin-gap" />

  <div class="auto-grid-8 margin-gap">
    <figure>
      <div class="action h2">~600</div>
      <figcaption class="over">Attendees</figcaption>
    </figure>
    <figure>
      <div class="action h2">3</div>
      <figcaption class="over">Parallel tracks</figcaption>
    </figure>
    <figure>
      <div class="action h2">42</div>
      <figcaption class="over">Talks &amp; tutorials</figcaption>
    </figure>
    <figure>
      <div class="action h2">18</div>
      <figcaption class="over">Unconference rooms</figcaption>
    </figure>
  </div>

  <hr class="margin-gap" />
</section>

<section class="callout callout--info main">
  <h3 class="h6">Format</h3>

  <p>
    The conference runs four days: a tutorial day, two days of talks, and a
    final unconference day. No track ever has more than three parallel sessions,
    so you can usually catch what you want.
  </p>
</section>

<section id="history">
  <hgroup class="main">
    <p>§ 03 · History</p>
    <h2>Four years, four cities.</h2>
  </hgroup>

  <aside class="main[-64] float-left[64-] fg-mute size-">
    <p class="over">PGCon</p>
    <p>
      PGCon ran in Ottawa from 2007 to 2023 — sixteen editions before PGConf.dev
      picked up the thread.
    </p>
  </aside>

  <p class="main">
    The conference grew out of the long-running PGCon, held annually in Ottawa
    from 2007 to 2023. When PGCon wound down, the contributor community rebooted
    the format under a new name in Vancouver. Each spring since, the conference
    moves between cities to stay close to different parts of the global
    community.
  </p>
</section>

<!-- Timeline: float-based two-column rows -->
<div class="timeline main margin-section">
  <div class="margin-gap">
    <figure>
      <div class="action h2">2024</div>
      <figcaption class="over">Vancouver, BC</figcaption>
    </figure>

    <div class="size-">
      <h4>The first PGConf.dev</h4>
      <p class="fg-mute">
        ~450 attendees · 38 talks · the first unconference day · the format
        proves itself
      </p>
    </div>
  </div>

  <hr class="margin-gap" />

  <div class="margin-gap">
    <div>
      <div class="action h2">2025</div>
      <div class="over">Montréal, QC</div>
    </div>

    <div class="size-">
      <h4>Second year, expanded program</h4>
      <p class="fg-mute">
        ~580 attendees · tutorial day added · scholarships program launches with
        22 funded seats
      </p>
    </div>
  </div>

  <hr class="margin-gap" />

  <div class="margin-gap">
    <div>
      <div class="action h2" style:margin-block="0">2026</div>
      <div class="over">Vancouver, BC</div>
    </div>

    <div class="size-">
      <h4>Return to the West Coast</h4>
      <p class="fg-mute">
        ~610 attendees · two co-located workshops · first year with a dedicated
        community day
      </p>
    </div>
  </div>

  <hr class="margin-gap" />

  <div class="margin-gap">
    <div>
      <div class="action h2">2027</div>
      <div class="over">Montréal, QC</div>
    </div>

    <div class="size-">
      <h4>This year</h4>
      <p class="fg-mute">
        Palais des congrès · 18 – 21 May · CFP closes 14 February
      </p>
    </div>
  </div>
</div>

<!-- COMMITTEE -->
<section id="committee">
  <hgroup class="main">
    <p>§ 04 · Organizing committee</p>
    <h2>The volunteers who put this on.</h2>
  </hgroup>

  <!-- Inline margin note: floats into the right column, clears the TOC/glance -->
  <aside class="float-right size- fg-mute">
    <p class="over">Volunteer-run</p>
    <p>
      No paid staff. Every committee member contributes their time alongside a
      day job in the Postgres ecosystem.
    </p>
  </aside>

  <p class="main">
    PGConf.dev is organized by a rotating committee of community volunteers,
    with program-committee membership refreshed each year to spread the work and
    the perspective.
  </p>

  <Rule class="fullwidth" style="clear: both;">Conference chairs</Rule>

  <div class="auto-grid-12 fullwidth">
    <div class="person">
      <div class="placeholder--portrait"></div>
      <p class="person__role">Conference chair</p>
      <p class="person__name">Committee member name</p>
      <p class="person__bio">
        Maintainer of a major PostgreSQL subsystem. Three years on the
        organizing committee.
      </p>
    </div>
    <div class="person">
      <div class="placeholder--portrait"></div>
      <p class="person__role">Program chair</p>
      <p class="person__name">Committee member name</p>
      <p class="person__bio">
        Extension author and longtime contributor to the regression test suite.
      </p>
    </div>
    <div class="person">
      <div class="placeholder--portrait"></div>
      <p class="person__role">Logistics chair</p>
      <p class="person__name">Committee member name</p>
      <p class="person__bio">
        Volunteer coordinator for two prior PGConf.dev editions; based in
        Montréal.
      </p>
    </div>
    <div class="person">
      <div class="placeholder--portrait"></div>
      <p class="person__role">Sponsorship</p>
      <p class="person__name">Committee member name</p>
      <p class="person__bio">
        Coordinates partner agreements, scholarship funding, and the sponsor
        program.
      </p>
    </div>
  </div>

  <Rule class="main">Program committee</Rule>

  <p class="main">
    The program committee reviews every proposal at least twice, with conflicts
    of interest declared and blind to author identity until the second pass.
  </p>

  <ul class="list-rule main">
    <li>Committee member · subsystem maintainer</li>
    <li>Committee member · extension author</li>
    <li>Committee member · downstream product engineer</li>
    <li>Committee member · committer</li>
    <li>Committee member · application engineer</li>
    <li>Committee member · academic researcher</li>
    <li>Committee member · DevRel from a sponsor (non-voting)</li>
  </ul>

  <p class="fg-mute main size-">
    Committee membership rotates each year.
    <a href="#" class="delete">Read about how we pick reviewers →</a>
  </p>

  <div class="callout callout--notice main">
    <h3 class="h6">Working with the committee</h3>

    <p>
      Reviewer notes are sent to every proposer — accepted or not. If your talk
      wasn't selected, you'll get specific feedback you can use next year. We
      treat the CFP as a community service, not a gate.
    </p>
  </div>
</section>

<section id="contact" class="contact-section">
  <div class="main margin-gap">
    <hgroup>
      <p>§ 05 · Contact</p>
      <h2>How to reach us.</h2>
    </hgroup>

    <p>
      The committee is small — for most things, the best route is the matching
      email below. We also keep a few public channels open.
    </p>
  </div>

  <div class="auto-grid-14 contact-grid fullwidth">
    <div class="fg-mute size-">
      <h3 class="h4">Program</h3>
      <p>CFP questions, schedule, talk logistics.</p>
      <p>
        <a href="mailto:program@pgconf.dev">program@pgconf.dev</a>
      </p>
    </div>
    <div class="fg-mute size-">
      <h3 class="h4">Sponsorship</h3>
      <p>Sponsorship inquiries, partner program, invoicing.</p>
      <p>
        <a href="mailto:sponsors@pgconf.dev">sponsors@pgconf.dev</a>
      </p>
    </div>
    <div class="fg-mute size-">
      <h3 class="h6">Press &amp; media</h3>
      <p>Press passes, interview requests, photo policy.</p>
      <p>
        <a href="mailto:press@pgconf.dev">press@pgconf.dev</a>
      </p>
    </div>
    <div class="fg-mute size-">
      <h3 class="h6">Code of conduct</h3>
      <p>Confidential channel monitored by the CoC committee.</p>
      <p>
        <a href="mailto:conduct@pgconf.dev">conduct@pgconf.dev</a>
      </p>
    </div>
    <div class="fg-mute size-">
      <h3 class="h6">General</h3>
      <p>Anything else.</p>
      <p>
        <a href="mailto:info@pgconf.dev">info@pgconf.dev</a>
      </p>
    </div>
    <div class="fg-mute size-">
      <h3 class="h6">Mailing list</h3>
      <p>Announcements only — about one email a month.</p>
      <p>
        <a href="#" class="delete">Subscribe →</a>
      </p>
    </div>
  </div>
</section>
