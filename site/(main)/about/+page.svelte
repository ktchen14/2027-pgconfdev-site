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

  .layout {
    align-items: start;
    display: grid;
    column-gap: var(--margin);
    grid-template-columns: 1fr;
    margin-block: var(--margin);
    padding-inline: max(var(--margin), (100vw - 1280px + 6rem) / 2);

    > * {
      grid-column: 1;
      margin-block: 0;
    }

    @media (width >= 48rem) {
      grid-template-columns: 1fr 15rem;
    }

    @media (width >= 64rem) {
      grid-template-columns: 15rem 1fr 15rem;

      > * {
        grid-column: 2;
      }
    }

    .contact-grid {
      grid-column: span 3;
    }
  }

  /* 3-column page body */
  .page-layout {
    align-items: start;
    display: grid;
    gap: var(--margin);
    grid-template-columns: 15rem 1fr 15rem;
    margin-block: var(--margin);

    > * {
      grid-column: 2;
      margin-block: 0;
    }

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 15rem;

      > * {
        grid-column: 1;
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;

      > * {
        grid-column: 1;
      }
    }
  }

  .sidebar-nav {
    grid-area: 1 / 1;

    @media (width < 64rem) {
      display: none;
    }

    li {
      margin-block: 0;
    }

    a {
      border-inline-start: 2px solid var(--border);
      display: block;
      padding-block: 0.5em;
      padding-inline: 0.75em;
      transition-property: color, border-color;

      &[aria-current]:where(:not([aria-current="false"])) {
        background-color: var(--action-bg-mute);
        border-color: var(--action-fg);
      }

      &:hover {
        border-color: var(--action-fg);
      }
    }
  }

  .right-sidebar {
    grid-area: 1 / 3;

    @media (max-width: 1024px) {
      grid-column: 2;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  .toc-aside li {
    margin-block: 0;
  }

  .toc-aside a {
    border-radius: var(--radius);
    display: block;
    margin-inline: -0.75em;
    padding-block: 0.5em;
    padding-inline: 0.75em;

    &:hover {
      background-color: var(--bg-tint);
    }
  }

  .glance-aside {
    .facts > div {
      grid-template-columns: 1fr;
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

  .callout--positive {
    background: var(--insert-bg-mute);
    border-inline-start: 3px solid var(--insert-fg);
  }

  .callout--negative {
    background: var(--delete-bg-mute);
    border-inline-start: 3px solid var(--delete-fg);
  }

  /* Stats strip */
  .stats {
    border-block: 1px solid var(--border);
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    padding-block: 1.5rem;

    > * {
      margin-block: 0;
    }

    .h2 {
      margin-block: 0;
    }
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
      grid-template-columns: 9rem 1fr;
      padding-block: 0.75rem;

      &:last-child {
        border-bottom: 1px solid var(--border);
      }
    }

    dd {
      margin-inline-start: 0;
      color: var(--fg-mute);
    }
  }

  /* Timeline */
  .timeline {
    display: grid;
    grid-column: 1 / span 2;
    grid-template-columns: subgrid;

    @media (max-width: 1024px) {
      grid-column: 1 / -1;
    }
  }

  .timeline__year {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
    padding-block: 1.25rem;
    border-top: 1px solid var(--border);

    > :first-child {
      grid-column: 1;
    }

    &:last-child {
      border-bottom: 1px solid var(--border);
    }

    @media (max-width: 560px) {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
  }

  .timeline__note {
    grid-column: 2;

    @media (max-width: 560px) {
      grid-column: 1;
    }
  }

  .timeline__y {
    font-family: var(--header-font);
    font-weight: 500;
    font-size: 1.875rem;
    line-height: 1;
    color: var(--action-fg);
    font-variant-numeric: tabular-nums;
  }

  .timeline__city {
    font-family: var(--mono-font);
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--fg-tint);
    margin-top: 0.5rem;
  }

  .timeline__note {
    h3 {
      font-size: 1.125rem;
      margin-block: 0 0.25rem;
    }

    p {
      margin: 0;
      color: var(--fg-mute);
      font-size: 0.875rem;
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

  /* Person cards */
  .committee {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
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

  /* Contact grid */
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .contact-card {
    padding: 1.25rem;
    background: var(--bg-tint);
    border: 1px solid var(--border);

    h3 {
      font-family: var(--header-font);
      font-size: 1.125rem;
      margin-block: 0 0.25rem;
    }

    p {
      margin: 0;
      color: var(--fg-mute);
      font-size: 0.875rem;
    }

    a {
      font-family: var(--mono-font);
      font-size: 0.875rem;
      display: inline-block;
      margin-top: 0.5rem;
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

  /* Breadcrumb */
  .breadcrumb {
    ol > li:where(:not(:first-child))::before {
      content: "›";
      padding-inline-end: 0.5rem;
    }

    a {
      padding-block: 0.75rem;
    }
  }
</style>

<svelte:head>
  <title>About — PGConf.dev 2027</title>
  <meta
    name="description"
    content="About PGConf.dev — the annual PostgreSQL Developer Conference, its history, organizing committee, and how to get in touch."
  />
</svelte:head>

<nav class="breadcrumb restrict-1280" aria-label="Breadcrumb">
  <ol class="flex over" style:gap="0.5em">
    <li><a href="/">PGConf.dev 2027</a></li>
    <li>About</li>
  </ol>
</nav>

<header class="restrict-1280">
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

<div class="restrict-1280 page-layout">
  <!-- Left sidebar: columns 1–2 -->
  <aside class="sidebar-nav" aria-label="About section navigation">
    <nav class="fg-mute">
      <p class="over">About the Conference</p>
      <ul class="size-">
        <li>
          <a href={resolve("/about")} aria-current="page">What PGConf.dev is</a>
        </li>
        <li><a href="/about#committee">Organizing committee</a></li>
        <li><a href="/about#history">History &amp; past editions</a></li>
        <li><a href="/about#contact">Contact</a></li>
        <li><a href="/conduct">Code of conduct</a></li>
      </ul>
    </nav>
  </aside>

  <div class="right-sidebar">
    <aside class="toc-aside" aria-label="On this page">
      <nav class="fg-mute">
        <p class="over">On this page</p>
        <ol class="size-">
          <li><a href="#what">What PGConf.dev is</a></li>
          <li><a href="#who">Who attends</a></li>
          <li><a href="#history">A short history</a></li>
          <li><a href="#committee">Organizing committee</a></li>
          <li><a href="#contact">Contact</a></li>
        </ol>
      </nav>
    </aside>

    <aside class="glance-aside" aria-label="At a glance">
      <Rule>At a glance</Rule>
      <p class="over">At a Glance</p>
      <dl class="facts size-">
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
          <dd>
            3 parallel tracks · tutorial day · 2 talk days · unconference day
          </dd>
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
  </div>

  <!-- WHAT -->
  <section id="what">
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
      program committee, talks are technical, and at least a third of the
      schedule is unconference. The audience is mostly hands-on engineers:
      committers, extension authors, internals contributors, and the database
      teams that ship Postgres to production at scale.
    </p>

    <p>
      What it isn't: a vendor showcase, a marketing event, or an introductory
      conference. There are excellent conferences for those audiences —
      PGConf.EU, PostgresOpen, and a long tail of regional events. PGConf.dev
      sits adjacent to them, focused specifically on the contributor track.
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
        Fig. 01 — A landscape photo from a recent edition — the main hall during
        a contributor talk. Replace with a real photograph.
      </figcaption>
    </figure>
  </section>
</div>

<div class="restrict-1280 page-layout">
  <!-- WHO -->
  <section id="who">
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
  </section>

  <div class="stats">
    <figure>
      <span class="action h2">~600</span>
      <figcaption class="over">Attendees</figcaption>
    </figure>
    <figure>
      <span class="action h2">3</span>
      <figcaption class="over">Parallel tracks</figcaption>
    </figure>
    <figure>
      <span class="action h2">42</span>
      <figcaption class="over">Talks &amp; tutorials</figcaption>
    </figure>
    <figure>
      <span class="action h2">18</span>
      <figcaption class="over">Unconference rooms</figcaption>
    </figure>
  </div>

  <div class="callout callout--info">
    <h3 class="h6">Format</h3>

    <p>
      The conference runs four days: a tutorial day, two days of talks, and a
      final unconference day. No track ever has more than three parallel
      sessions, so you can usually catch what you want.
    </p>
  </div>

  <!-- HISTORY -->
  <section id="history">
    <hgroup>
      <p>§ 03 · History</p>
      <h2>Four years, four cities.</h2>
    </hgroup>

    <p>
      The conference grew out of the long-running PGCon, held annually in Ottawa
      from 2007 to 2023. When PGCon wound down, the contributor community
      rebooted the format under a new name in Vancouver. Each spring since, the
      conference moves between cities to stay close to different parts of the
      global community.
    </p>
  </section>

  <div class="timeline">
    <div class="timeline__year">
      <div>
        <div class="timeline__y">2024</div>
        <div class="timeline__city">Vancouver, BC</div>
      </div>
      <div class="timeline__note">
        <h3>The first PGConf.dev</h3>
        <p>
          ~450 attendees · 38 talks · the first unconference day · the format
          proves itself
        </p>
      </div>
    </div>
    <div class="timeline__year">
      <div>
        <div class="timeline__y">2025</div>
        <div class="timeline__city">Montréal, QC</div>
      </div>
      <div class="timeline__note">
        <h3>Second year, expanded program</h3>
        <p>
          ~580 attendees · tutorial day added · scholarships program launches
          with 22 funded seats
        </p>
      </div>
    </div>
    <div class="timeline__year">
      <div>
        <div class="timeline__y">2026</div>
        <div class="timeline__city">Vancouver, BC</div>
      </div>
      <div class="timeline__note">
        <h3>Return to the West Coast</h3>
        <p>
          ~610 attendees · two co-located workshops · first year with a
          dedicated community day
        </p>
      </div>
    </div>
    <div class="timeline__year">
      <div>
        <div class="timeline__y">2027</div>
        <div class="timeline__city">Montréal, QC — coming up</div>
      </div>
      <div class="timeline__note">
        <h3>This year</h3>
        <p>Palais des congrès · 18 – 21 May · CFP closes 14 February</p>
      </div>
    </div>
  </div>

  <!-- COMMITTEE -->
  <section id="committee">
    <hgroup>
      <p>§ 04 · Organizing committee</p>
      <h2>The volunteers who put this on.</h2>
    </hgroup>

    <p>
      PGConf.dev is organized by a rotating committee of community volunteers,
      with program-committee membership refreshed each year to spread the work
      and the perspective.
    </p>

    <Rule>Conference chairs</Rule>

    <div class="committee">
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
          Extension author and longtime contributor to the regression test
          suite.
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
  </section>

  <div>
    <Rule>Program committee</Rule>

    <p>
      The program committee reviews every proposal at least twice, with
      conflicts of interest declared and blind to author identity until the
      second pass.
    </p>

    <ul class="list-rule">
      <li>Committee member · subsystem maintainer</li>
      <li>Committee member · extension author</li>
      <li>Committee member · downstream product engineer</li>
      <li>Committee member · committer</li>
      <li>Committee member · application engineer</li>
      <li>Committee member · academic researcher</li>
      <li>Committee member · DevRel from a sponsor (non-voting)</li>
    </ul>

    <p class="fg-mute" style="font-size: 0.875rem">
      Committee membership rotates each year.
      <a href="#" class="delete">Read about how we pick reviewers →</a>
    </p>
  </div>

  <div class="callout callout--notice">
    <h3 class="h6">Working with the committee</h3>

    <p>
      Reviewer notes are sent to every proposer — accepted or not. If your talk
      wasn't selected, you'll get specific feedback you can use next year. We
      treat the CFP as a community service, not a gate.
    </p>
  </div>
</div>

<section id="contact" class="layout">
  <div class="margin-gap">
    <hgroup>
      <p>§ 05 · Contact</p>
      <h2>How to reach us.</h2>
    </hgroup>

    <p>
      The committee is small — for most things, the best route is the matching
      email below. We also keep a few public channels open.
    </p>
  </div>

  <div class="contact-grid">
    <div class="contact-card">
      <h3>Program</h3>
      <p>CFP questions, schedule, talk logistics.</p>
      <a href="mailto:program@pgconf.dev">program@pgconf.dev</a>
    </div>
    <div class="contact-card">
      <h3>Sponsorship</h3>
      <p>Sponsorship inquiries, partner program, invoicing.</p>
      <a href="mailto:sponsors@pgconf.dev">sponsors@pgconf.dev</a>
    </div>
    <div class="contact-card">
      <h3>Press &amp; media</h3>
      <p>Press passes, interview requests, photo policy.</p>
      <a href="mailto:press@pgconf.dev">press@pgconf.dev</a>
    </div>
    <div class="contact-card">
      <h3>Code of conduct</h3>
      <p>Confidential channel monitored by the CoC committee.</p>
      <a href="mailto:conduct@pgconf.dev">conduct@pgconf.dev</a>
    </div>
    <div class="contact-card">
      <h3>General</h3>
      <p>Anything else.</p>
      <a href="mailto:info@pgconf.dev">info@pgconf.dev</a>
    </div>
    <div class="contact-card">
      <h3>Mailing list</h3>
      <p>Announcements only — about one email a month.</p>
      <a href="#" class="delete">Subscribe →</a>
    </div>
  </div>
</section>
