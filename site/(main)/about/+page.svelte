<script>
  import { resolve } from "$app/paths";
</script>

<style>
  header h1 {
    font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem);
    letter-spacing: -0.02em;
    line-height: 1;
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
    font-family: var(--header-font);
    font-size: clamp(1.25rem, 2vw + 0.75rem, 1.75rem);
    font-style: italic;
    line-height: 1.35;
    padding-inline: 0;
  }

  .timeline > * {
    grid-auto-flow: dense;
    grid-column: span 2;
  }
</style>

<svelte:head>
  <title>About — PGConf.dev 2027</title>
  <meta
    name="description"
    content="About PGConf.dev — the annual PostgreSQL Developer Conference, its history, organizing committee, and how to get in touch."
  />
</svelte:head>

<nav class="(main)" aria-label="Breadcrumb">
  <ol class="iconic over" style:gap="1em">
    <li aria-hidden="true">/</li>
    <li><a href="/">About</a></li>
  </ol>
</nav>

<header class="(main)">
  <hgroup>
    <p class="action">About PGConf.dev</p>
    <h1>The PostgreSQL Developer Conference.</h1>
  </hgroup>

  <p class="lede mute text">
    An annual gathering for contributors, committers, and the engineers building
    software with Postgres at its core. Run by the community, for the community
    — without the marketing layer.
  </p>
</header>

<hr class="section" />

<nav class="( section-nav none@-64 note" aria-labelledby="about-the-conference">
  <h2 id="about-the-conference" class="over">About the Conference</h2>
  <ul>
    <li>
      <a href={resolve("/about")} aria-current="page">About PGConf.dev</a>
    </li>
    <li><a href={resolve("/team")}>Team</a></li>
    <li><a href={resolve("/conduct")}>Code of conduct</a></li>
    <li><a href={resolve("/policies")}>Policies &amp; privacy</a></li>
  </ul>
</nav>

<nav aria-labelledby="on-this-page" class=") none@-48 note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#what">What PGConf.dev is</a></li>
    <li><a class="li-number" href="#who">Who attends</a></li>
    <li><a class="li-number" href="#history">A short history</a></li>
  </ol>
</nav>

<aside class=") area border note" aria-labelledby="at-a-glance">
  <h2 id="at-a-glance" class="over">At a Glance</h2>

  <hr />

  <dl class="dedent">
    <div class="p">
      <dt class="over">Conference</dt>
      <dd>
        PGConf.dev 2027 — the fourth annual PostgreSQL Developer Conference
      </dd>
    </div>

    <div class="p">
      <dt class="over">Dates</dt>
      <dd>18 — 21 May 2027</dd>
    </div>

    <div class="p">
      <dt class="over">Venue</dt>
      <dd>Palais des congrès de Montréal</dd>
    </div>

    <div class="p">
      <dt class="over">Capacity</dt>
      <dd>~600 attendees</dd>
    </div>

    <div class="p">
      <dt class="over">Format</dt>
      <dd>3 parallel tracks · tutorial day · 2 talk days · unconference day</dd>
    </div>

    <div class="p">
      <dt class="over">Languages</dt>
      <dd>English</dd>
    </div>

    <div class="p">
      <dt class="over">Organizer</dt>
      <dd>PostgreSQL Community Association of Canada</dd>
    </div>
  </dl>
</aside>

<section id="what" class="main">
  <hgroup>
    <p class="section-number">What it is</p>
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

  <figure class="section">
    <blockquote class="action-acme mute">
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
  <div class="section">
    <hgroup>
      <p class="section-number">Who attends</p>
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

<section class="(main)" aria-label="Statistics">
  <div class="band grid+12">
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
</section>

<section class="main">
  <div class="action-area edge">
    <h3 class="h6">Format</h3>

    <p>
      The conference runs four days: a tutorial day, two days of talks, and a
      final unconference day. No track ever has more than three parallel
      sessions, so you can usually catch what you want.
    </p>
  </div>
</section>

<section id="history">
  <hgroup class="main">
    <p class="section-number">History</p>
    <h2>Four years, four cities.</h2>
  </hgroup>

  <aside class="( note">
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

  <div class="main) columnar section timeline">
    <div class="subgrid@48- margin-gap">
      <figure class="column-2">
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

    <hr aria-hidden="true" class="margin-gap" />

    <div class="subgrid@48- margin-gap">
      <figure class="column-2">
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

    <hr aria-hidden="true" class="margin-gap" />

    <div class="subgrid@48- margin-gap">
      <figure class="column-2">
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

    <hr aria-hidden="true" class="margin-gap" />

    <div class="subgrid@48- margin-gap">
      <figure class="column-2">
        <div class="action h2">2027</div>
        <figcaption class="over">Montréal, QC</figcaption>
      </figure>

      <div class="note">
        <h4>This year</h4>
        <p>Palais des congrès · 18 – 21 May · CFP closes 14 February</p>
      </div>
    </div>
  </div>
</section>
