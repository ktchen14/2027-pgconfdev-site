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

  header p {
    max-width: 38rem;
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

  blockquote {
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
</style>

<svelte:head>
  <title>About — PGConf.dev 2027</title>
  <meta
    name="description"
    content="About PGConf.dev — the annual PostgreSQL Developer Conference, its history, organizing committee, and how to get in touch."
  />
</svelte:head>

<nav class="merge-both" aria-label="Breadcrumb">
  <ol class="iconic over" style:gap="1em">
    <li aria-hidden="true">/</li>
    <li><a href="/">About</a></li>
  </ol>
</nav>

<header class="merge-both">
  <hgroup>
    <p class="action">About PGConf.dev</p>
    <h1>The PostgreSQL Developer Conference.</h1>
  </hgroup>

  <p class="lede mute">
    An annual gathering for contributors, committers, and the engineers building
    software with Postgres at its core. Run by the community, for the community
    — without the marketing layer.
  </p>
</header>

<hr class="margin-section" />

<nav
  class="section-nav float-left none[-64] note"
  aria-labelledby="about-the-conference"
>
  <h2 id="about-the-conference" class="over">About the Conference</h2>
  <ul>
    <li>
      <a href={resolve("/about")} aria-current="page">What PGConf.dev is</a>
    </li>
    <li><a href="/about#committee">Organizing committee</a></li>
    <li><a href="/about#history">History &amp; past editions</a></li>
    <li><a href="/about#contact">Contact</a></li>
    <li><a href="/conduct">Code of conduct</a></li>
  </ul>
</nav>

<nav aria-labelledby="on-this-page" class="float-right none[-48] note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a href="#what">What PGConf.dev is</a></li>
    <li><a href="#who">Who attends</a></li>
    <li><a href="#history">A short history</a></li>
    <li><a href="#committee">Organizing committee</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</nav>

<aside
  class="float-right note panel bg-tint border"
  aria-labelledby="at-a-glance"
>
  <h2 id="at-a-glance" class="over">At a Glance</h2>

  <hr />

  <dl class="dedent">
    <div class="margin-p">
      <dt class="over">Conference</dt>
      <dd>
        PGConf.dev 2027 — the fourth annual PostgreSQL Developer Conference
      </dd>
    </div>

    <div class="margin-p">
      <dt class="over">Dates</dt>
      <dd>18 — 21 May 2027</dd>
    </div>

    <div class="margin-p">
      <dt class="over">Venue</dt>
      <dd>Palais des congrès de Montréal</dd>
    </div>

    <div class="margin-p">
      <dt class="over">Capacity</dt>
      <dd>~600 attendees</dd>
    </div>

    <div class="margin-p">
      <dt class="over">Format</dt>
      <dd>3 parallel tracks · tutorial day · 2 talk days · unconference day</dd>
    </div>

    <div class="margin-p">
      <dt class="over">Languages</dt>
      <dd>English</dd>
    </div>

    <div class="margin-p">
      <dt class="over">Organizer</dt>
      <dd>PostgreSQL Community Association of Canada</dd>
    </div>
  </dl>
</aside>

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
    <blockquote>
      <q>
        The only conference where I leave with a code review queue instead of a
        swag bag.
      </q>
    </blockquote>

    <figcaption class="over">
      <cite style:font-style="normal">— Returning attendee, 2025</cite>
    </figcaption>
  </figure>

  <figure>
    <div class="border" style:aspect-ratio="16 / 7">
      [ Photo · main hall · past edition ]
    </div>
    <figcaption>
      Fig. 01 — A landscape photo from a recent edition — the main hall during a
      contributor talk. Replace with a real photograph.
    </figcaption>
  </figure>
</section>

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

    <ul class="edge dedent">
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

<section class="merge-both" aria-label="Statistics">
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

<section class="panel fill-action edge-action main">
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

  <aside class="float-left note">
    <h3 class="over">PGCon</h3>
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

  <div class="margin-section">
    <hr aria-hidden="true" class="merge-left margin-gap" />

    <div class="split-left margin-gap">
      <figure>
        <div class="action h2">2024</div>
        <figcaption class="over">Vancouver, BC</figcaption>
      </figure>

      <div class="note">
        <h4>The first PGConf.dev</h4>
        <p>
          ~450 attendees · 38 talks · the first unconference day · the format
          proves itself
        </p>
      </div>
    </div>

    <hr aria-hidden="true" class="merge-left margin-gap" />

    <div class="split-left margin-gap">
      <figure>
        <div class="action h2">2025</div>
        <figcaption class="over">Montréal, QC</figcaption>
      </figure>

      <div class="note">
        <h4>Second year, expanded program</h4>
        <p>
          ~580 attendees · tutorial day added · scholarships program launches
          with 22 funded seats
        </p>
      </div>
    </div>

    <hr aria-hidden="true" class="merge-left margin-gap" />

    <div class="split-left margin-gap">
      <figure>
        <div class="action h2" style:margin-block="0">2026</div>
        <figcaption class="over">Vancouver, BC</figcaption>
      </figure>

      <div class="note">
        <h4>Return to the West Coast</h4>
        <p>
          ~610 attendees · two co-located workshops · first year with a
          dedicated community day
        </p>
      </div>
    </div>

    <hr aria-hidden="true" class="merge-left margin-gap" />

    <div class="split-left margin-gap">
      <figure>
        <div class="action h2">2027</div>
        <figcaption class="over">Montréal, QC</figcaption>
      </figure>

      <div class="note">
        <h4>This year</h4>
        <p>Palais des congrès · 18 – 21 May · CFP closes 14 February</p>
      </div>
    </div>

    <hr aria-hidden="true" class="merge-left margin-gap" />
  </div>
</section>

<section id="committee">
  <hgroup class="main">
    <p>§ 04 · Organizing committee</p>
    <h2>The volunteers who put this on.</h2>
  </hgroup>

  <aside class="float-right note">
    <h3 class="over">Volunteer-run</h3>
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

  <Rule class="merge-both" style="clear: both;">Conference chairs</Rule>

  <div class="auto-grid-12 merge-both">
    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup>
          <p>Conference chair</p>
          <h3 class="h5">Committee member name</h3>
        </hgroup>

        <p>
          Maintainer of a major PostgreSQL subsystem. Three years on the
          organizing committee.
        </p>
      </figcaption>
    </figure>

    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup>
          <p>Program chair</p>
          <h3 class="h5">Committee member name</h3>
        </hgroup>

        <p>
          Extension author and longtime contributor to the regression test
          suite.
        </p>
      </figcaption>
    </figure>

    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup>
          <p>Logistics chair</p>
          <h3 class="h5">Committee member name</h3>
        </hgroup>

        <p>
          Volunteer coordinator for two prior PGConf.dev editions; based in
          Montréal.
        </p>
      </figcaption>
    </figure>

    <figure>
      <div class="border" style:aspect-ratio="4 / 5"></div>
      <figcaption class="note">
        <hgroup>
          <p>Sponsorship</p>
          <h3 class="h5">Committee member name</h3>
        </hgroup>

        <p>
          Coordinates partner agreements, scholarship funding, and the sponsor
          program.
        </p>
      </figcaption>
    </figure>
  </div>

  <div class="main">
    <Rule>Program committee</Rule>

    <p>
      The program committee reviews every proposal at least twice, with
      conflicts of interest declared and blind to author identity until the
      second pass.
    </p>

    <ul class="edge dedent">
      <li>Committee member · subsystem maintainer</li>
      <li>Committee member · extension author</li>
      <li>Committee member · downstream product engineer</li>
      <li>Committee member · committer</li>
      <li>Committee member · application engineer</li>
      <li>Committee member · academic researcher</li>
      <li>Committee member · DevRel from a sponsor (non-voting)</li>
    </ul>

    <p>
      <small>
        Committee membership rotates each year.
        <a href="#" class="delete">Read about how we pick reviewers →</a>
      </small>
    </p>

    <div class="panel fill-notice edge-notice">
      <h3 class="h6">Working with the committee</h3>

      <p>
        Reviewer notes are sent to every proposer — accepted or not. If your
        talk wasn't selected, you'll get specific feedback you can use next
        year. We treat the CFP as a community service, not a gate.
      </p>
    </div>
  </div>
</section>

<section id="contact">
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

  <div class="auto-grid-14 merge-both">
    <div class="note panel bg-tint border">
      <hgroup>
        <h3 class="h4">Program</h3>
        <p>CFP questions, schedule, talk logistics.</p>
      </hgroup>
      <p class="mono">
        <a href="mailto:program@pgconf.dev">program@pgconf.dev</a>
      </p>
    </div>

    <div class="note panel bg-tint border">
      <hgroup>
        <h3 class="h4">Sponsorship</h3>
        <p>Sponsorship inquiries, partner program, invoicing.</p>
      </hgroup>
      <p class="mono">
        <a href="mailto:sponsors@pgconf.dev">sponsors@pgconf.dev</a>
      </p>
    </div>

    <div class="note panel bg-tint border">
      <hgroup>
        <h3 class="h4">Press &amp; media</h3>
        <p>Press passes, interview requests, photo policy.</p>
      </hgroup>
      <p class="mono">
        <a href="mailto:press@pgconf.dev">press@pgconf.dev</a>
      </p>
    </div>

    <div class="note panel bg-tint border">
      <hgroup>
        <h3 class="h4">Code of conduct</h3>
        <p>Confidential channel monitored by the CoC committee.</p>
      </hgroup>
      <p class="mono">
        <a href="mailto:conduct@pgconf.dev">conduct@pgconf.dev</a>
      </p>
    </div>

    <div class="note panel bg-tint border">
      <hgroup>
        <h3 class="h4">General</h3>
        <p>Anything else.</p>
      </hgroup>
      <p class="mono">
        <a href="mailto:info@pgconf.dev">info@pgconf.dev</a>
      </p>
    </div>

    <div class="note panel bg-tint border">
      <hgroup>
        <h3 class="h4">Mailing list</h3>
        <p>Announcements only — about one email a month.</p>
      </hgroup>
      <p class="mono">
        <a href="#" class="delete">Subscribe →</a>
      </p>
    </div>
  </div>
</section>
