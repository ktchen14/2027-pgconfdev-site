<style>
  /* Page head */
  .page-head {
    padding-block: var(--margin);
    border-bottom: 1px solid var(--border);
  }

  .page-head h1 {
    font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem);
    line-height: 1;
    letter-spacing: -0.02em;
    font-weight: 500;
  }

  /* Breadcrumb */
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--mono-font);
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--fg-tint);
    padding-block: 0.75rem;
  }

  .breadcrumb .sep {
    color: var(--border);
  }

  /* At-a-glance stats row */
  .at-a-glance {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0;
    border-block: 1px solid var(--border);
    margin-block: var(--margin);
  }

  .at-a-glance > div {
    padding: 1rem;
    border-right: 1px solid var(--border);
  }

  .at-a-glance > div:last-child {
    border-right: 0;
  }

  .stat__num {
    font-family: var(--header-font);
    font-size: 2rem;
    font-weight: 500;
    line-height: 1;
    color: var(--action-fg);
    font-variant-numeric: tabular-nums;
  }

  .stat__label {
    font-family: var(--mono-font);
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--fg-tint);
    margin-top: 0.4rem;
  }

  /* Day-nav */
  .day-nav {
    position: sticky;
    top: 0;
    z-index: 5;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding-block: 0.75rem;
    margin-bottom: var(--margin);
  }

  .day-nav__inner {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    align-items: baseline;
  }

  .day-nav__label {
    font-family: var(--mono-font);
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--fg-tint);
  }

  .day-nav a {
    color: var(--fg);
    text-decoration: none;
    font-family: var(--mono-font);
    font-size: 0.8rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    padding-block: 0.25rem;
    border-bottom: 2px solid transparent;
  }

  .day-nav a:hover,
  .day-nav a[aria-current] {
    color: var(--action-fg);
    border-bottom-color: currentColor;
  }

  .day-nav a small {
    color: var(--fg-tint);
    text-transform: none;
    letter-spacing: 0;
    margin-left: 0.4em;
    font-family: var(--normal-font);
  }

  /* Track legend */
  .track-legend {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    padding-block: 0.75rem;
    font-family: var(--mono-font);
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--fg-tint);
    margin-bottom: 1rem;
  }

  .track-legend strong {
    color: var(--fg);
    font-weight: 500;
  }

  .track-legend span {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .track-legend span::before {
    content: "";
    display: inline-block;
    width: 1.4rem;
    height: 3px;
  }

  .track-talk::before {
    background: var(--border);
  }
  .track-tutorial::before {
    background: var(--insert);
  }
  .track-unconf::before {
    background: var(--notice-fg);
  }
  .track-keynote::before {
    background: var(--action);
  }

  /* Day sections */
  .day {
    padding-block: 1.5rem 3rem;
    border-top: 1px solid var(--ink);
    margin-top: var(--margin);
  }

  .day:first-of-type {
    margin-top: 0;
  }

  .day__head {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: var(--margin);
  }

  @media (min-width: 800px) {
    .day__head {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: baseline;
    }
  }

  .day__head h2 {
    font-size: clamp(2rem, 3vw + 1rem, 3rem);
    letter-spacing: -0.02em;
    line-height: 1;
    font-weight: 500;
    margin: 0;
  }

  .day__head h2 .day-num {
    color: var(--fg-tint);
    font-variant-numeric: tabular-nums;
    font-weight: 400;
  }

  .day-meta {
    font-family: var(--mono-font);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--fg-tint);
    margin-bottom: 0.5rem;
  }

  .day__intro {
    color: var(--fg-mute);
    font-size: 0.9375rem;
    max-width: 32rem;
    margin: 0;
  }

  /* Schedule rows */
  .schedule {
    display: grid;
    gap: 0;
  }

  .schedule__row {
    display: grid;
    grid-template-columns: 7rem 1fr;
    gap: 1rem;
    padding-block: 1rem;
    border-top: 1px solid var(--border);
    align-items: start;
  }

  .schedule__row:last-of-type {
    border-bottom: 1px solid var(--border);
  }

  .schedule__time {
    font-family: var(--mono-font);
    font-size: 1rem;
    color: var(--fg);
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.02em;
    line-height: 1.2;
  }

  .schedule__time small {
    display: block;
    color: var(--fg-tint);
    font-size: 0.7rem;
    margin-top: 0.4rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  /* Slot variants */
  .slot {
    display: grid;
    gap: 0.75rem;
  }

  .slot--tracks-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .slot--tracks-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  .slot--single {
    grid-template-columns: 1fr;
  }

  /* Session card */
  .session {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 0.75rem 1rem 1rem;
    border-top: 3px solid var(--border);
  }

  .session__track {
    font-family: var(--mono-font);
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--fg-tint);
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .session__track .track-letter {
    font-weight: 500;
    color: var(--fg);
  }

  .session__title {
    font-family: var(--header-font);
    font-size: 1.0625rem;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.005em;
    color: var(--fg);
    margin: 0;
    text-wrap: pretty;
  }

  .session__speaker {
    font-size: 0.875rem;
    color: var(--fg-mute);
    margin: 0;
  }

  .session__speaker strong {
    color: var(--fg);
    font-weight: 500;
  }

  .session__meta {
    font-family: var(--mono-font);
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--fg-tint);
    margin-top: auto;
    padding-top: 0.5rem;
  }

  /* Featured (keynotes) */
  .session--featured {
    border-top-color: var(--action);
  }

  .session--featured .session__title {
    font-size: 1.5rem;
    line-height: 1.15;
  }

  .session--featured .session__track {
    color: var(--action-fg);
  }

  .session--featured .session__track .track-letter {
    color: var(--action-fg);
  }

  /* Type accents */
  .session[data-type="tutorial"] {
    border-top-color: var(--insert);
  }
  .session[data-type="tutorial"] .session__track,
  .session[data-type="tutorial"] .session__track .track-letter {
    color: var(--insert-fg);
  }

  .session[data-type="unconf"] {
    border-top-color: var(--notice-fg);
  }
  .session[data-type="unconf"] .session__track,
  .session[data-type="unconf"] .session__track .track-letter {
    color: var(--notice-fg);
  }

  /* Break row */
  .schedule__row--break {
    grid-template-columns: 7rem 1fr auto;
    color: var(--fg-mute);
    align-items: baseline;
  }

  .break-label {
    font-family: var(--header-font);
    font-style: italic;
    font-size: 1rem;
    color: var(--fg-mute);
  }

  .break-meta {
    font-family: var(--mono-font);
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--fg-tint);
  }

  /* Schedule grid (variable-length sessions) */
  .schedule-grid {
    display: grid;
    grid-template-columns: 6rem repeat(var(--tracks, 3), 1fr);
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    margin-block: 1rem;
  }

  .schedule-grid > * {
    background: var(--bg);
  }

  .schedule-grid__header {
    padding: 0.6rem 0.75rem;
    background: var(--bg-tint);
    font-family: var(--mono-font);
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--fg-tint);
  }

  .schedule-grid__header strong {
    color: var(--fg);
    font-weight: 500;
  }

  .schedule-grid__tick {
    padding: 0.6rem 0.75rem;
    font-family: var(--mono-font);
    font-size: 0.85rem;
    color: var(--fg);
    font-variant-numeric: tabular-nums;
    letter-spacing: 0.02em;
    align-self: start;
  }

  .schedule-grid__tick small {
    display: block;
    color: var(--fg-tint);
    font-size: 0.65rem;
    margin-top: 0.2rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .schedule-grid .session {
    border-top: none;
    border-left: 3px solid var(--border);
    padding: 0.75rem 1rem 0.85rem;
    height: 100%;
  }

  .schedule-grid .session[data-type="tutorial"] {
    border-left-color: var(--insert);
  }
  .schedule-grid .session[data-type="unconf"] {
    border-left-color: var(--notice-fg);
  }
  .schedule-grid .session.session--featured {
    border-top: none;
    border-left: 3px solid var(--action);
  }

  .schedule-grid__break {
    grid-column: 1 / -1;
    padding: 0.5rem 0.75rem;
    background: var(--bg-tint);
    color: var(--fg-mute);
    font-family: var(--header-font);
    font-style: italic;
    font-size: 0.95rem;
    display: flex;
    gap: 1.5rem;
    align-items: baseline;
  }

  .schedule-grid__break .mono {
    font-family: var(--mono-font);
    font-style: normal;
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--fg-tint);
    margin-left: auto;
  }

  /* Callout */
  .callout {
    padding: 1rem 1.25rem;
  }

  .callout--info {
    background: var(--action-bg-mute);
    border-inline-start: 3px solid var(--action-fg);
  }

  .callout__title {
    font-weight: 600;
    margin-block: 0 0.5em;
  }

  /* Mobile */
  @media (max-width: 800px) {
    .schedule__row {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }

    .schedule__row--break {
      grid-template-columns: 1fr auto;
    }

    .schedule__time {
      font-size: 0.875rem;
      padding-bottom: 0.25rem;
      border-bottom: 1px solid var(--border);
    }

    .slot--tracks-3,
    .slot--tracks-2 {
      grid-template-columns: 1fr;
    }

    .day-nav {
      top: 0;
    }

    .schedule-grid {
      grid-template-columns: 1fr;
    }

    .schedule-grid__tick {
      display: none;
    }

    .schedule-grid .session,
    .schedule-grid__break,
    .schedule-grid__header {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }
  }
</style>

<svelte:head>
  <title>Program — PGConf.dev 2027</title>
  <meta
    name="description"
    content="The PGConf.dev 2027 program: 42 talks, 8 tutorials, and a full unconference day across 4 days at the Palais des congrès in Montréal."
  />
</svelte:head>

<div class="restrict-1280">
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <a href="/">PGConf.dev 2027</a>
    <span class="sep">/</span>
    <span>Program</span>
  </nav>
</div>

<div class="restrict-1280 page-head">
  <p class="over action">Program · 4 days · 3 tracks</p>
  <h1>The 2027 program.</h1>
  <p class="lede fg-mute">
    Forty-two talks, eight tutorials, and a full day of unconference — spread
    across four days at the Palais des congrès. Schedule subject to small
    changes through April.
  </p>
</div>

<div class="restrict-1280">
  <div class="at-a-glance">
    <div>
      <div class="stat__num">4</div>
      <div class="stat__label">Days</div>
    </div>
    <div>
      <div class="stat__num">3</div>
      <div class="stat__label">Parallel tracks</div>
    </div>
    <div>
      <div class="stat__num">42</div>
      <div class="stat__label">Talks</div>
    </div>
    <div>
      <div class="stat__num">8</div>
      <div class="stat__label">Tutorials</div>
    </div>
    <div>
      <div class="stat__num">18</div>
      <div class="stat__label">Unconf rooms</div>
    </div>
    <div>
      <div class="stat__num">3</div>
      <div class="stat__label">Keynotes</div>
    </div>
  </div>

  <nav class="day-nav" aria-label="Days">
    <div class="day-nav__inner">
      <span class="day-nav__label">Jump to</span>
      <a href="#day-1" aria-current="page"
        >Tue<small>18 May · Tutorials</small></a
      >
      <a href="#day-2">Wed<small>19 May · Talks</small></a>
      <a href="#day-3">Thu<small>20 May · Talks</small></a>
      <a href="#day-4">Fri<small>21 May · Unconference</small></a>
    </div>
  </nav>

  <div class="track-legend">
    <strong>Legend</strong>
    <span class="track-talk">Talk · 45 min</span>
    <span class="track-tutorial">Tutorial · 90 min</span>
    <span class="track-keynote">Keynote · 60 min</span>
    <span class="track-unconf">Unconference · 30 min</span>
  </div>

  <!-- ======== DAY 1 ======== -->
  <section class="day" id="day-1">
    <div class="day__head">
      <div>
        <p class="day-meta">Day 01 · Tutorial day</p>
        <h2><span class="day-num">Tue</span> 18 May</h2>
      </div>
      <p class="day__intro">
        Two parallel tracks of hands-on tutorials, capped by an opening
        reception. Track B opens with a 60-minute beginner tutorial followed by
        a newcomer Q&amp;A panel. Bring a laptop with Postgres 17 and your usual
        psql.
      </p>
    </div>

    <div class="schedule-grid" style="--tracks: 2">
      <div class="schedule-grid__header" style="grid-column: 1; grid-row: 1">
        Time
      </div>
      <div class="schedule-grid__header" style="grid-column: 2; grid-row: 1">
        <strong>Track A</strong> · Room 2A
      </div>
      <div class="schedule-grid__header" style="grid-column: 3; grid-row: 1">
        <strong>Track B</strong> · Room 2B
      </div>

      <div class="schedule-grid__tick" style="grid-column: 1; grid-row: 2">
        09:00<small>Tutorials</small>
      </div>
      <div class="schedule-grid__tick" style="grid-column: 1; grid-row: 4">
        11:00<small>Tutorials</small>
      </div>
      <div class="schedule-grid__tick" style="grid-column: 1; grid-row: 5">
        12:00
      </div>
      <div class="schedule-grid__tick" style="grid-column: 1; grid-row: 7">
        14:00<small>Tutorials</small>
      </div>
      <div class="schedule-grid__tick" style="grid-column: 1; grid-row: 9">
        16:00<small>Tutorials</small>
      </div>

      <div
        class="session"
        data-type="tutorial"
        style="grid-column: 2; grid-row: 2"
      >
        <div class="session__track">
          <span class="track-letter">A</span> Tutorial · 90 min
        </div>
        <h3 class="session__title">
          Reading the planner's mind: a walk through EXPLAIN ANALYZE
        </h3>
        <p class="session__speaker"><strong>Alex M.</strong> · Crunchy Data</p>
        <div class="session__meta">09:00 — 10:30 · Beginner</div>
      </div>
      <div
        class="session"
        data-type="tutorial"
        style="grid-column: 3; grid-row: 2"
      >
        <div class="session__track">
          <span class="track-letter">B</span> Tutorial · 90 min
        </div>
        <h3 class="session__title">
          Building Postgres extensions in Rust with pgrx
        </h3>
        <p class="session__speaker"><strong>Sam K.</strong> · Tembo</p>
        <div class="session__meta">09:00 — 10:30 · Intermediate</div>
      </div>

      <div class="schedule-grid__break" style="grid-row: 3">
        <span>Coffee &amp; refreshments</span>
        <span class="mono">10:30 — 11:00 · Foyer</span>
      </div>

      <div
        class="session"
        data-type="tutorial"
        style="grid-column: 2; grid-row: 4 / span 2"
      >
        <div class="session__track">
          <span class="track-letter">A</span> Tutorial · 90 min
        </div>
        <h3 class="session__title">
          Logical replication for upgrades: a hands-on path to zero downtime
        </h3>
        <p class="session__speaker"><strong>Jordan H.</strong> · EDB</p>
        <div class="session__meta">11:00 — 12:30 · Intermediate</div>
      </div>
      <div
        class="session"
        data-type="tutorial"
        style="grid-column: 3; grid-row: 4"
      >
        <div class="session__track">
          <span class="track-letter">B</span> Tutorial · 60 min
        </div>
        <h3 class="session__title">
          Writing your first patch — committer's walkthrough
        </h3>
        <p class="session__speaker"><strong>Priya R.</strong> · core team</p>
        <div class="session__meta">11:00 — 12:00 · All levels</div>
      </div>
      <div class="session" style="grid-column: 3; grid-row: 5">
        <div class="session__track">
          <span class="track-letter">B</span> Panel · 30 min
        </div>
        <h3 class="session__title">
          Newcomer Q&amp;A — your first PGConf, what to expect
        </h3>
        <p class="session__speaker"><strong>Organizing committee</strong></p>
        <div class="session__meta">12:00 — 12:30 · Optional</div>
      </div>

      <div class="schedule-grid__break" style="grid-row: 6">
        <span>Lunch — provided</span>
        <span class="mono">12:30 — 14:00 · Hall C</span>
      </div>

      <div
        class="session"
        data-type="tutorial"
        style="grid-column: 2; grid-row: 7"
      >
        <div class="session__track">
          <span class="track-letter">A</span> Tutorial · 90 min
        </div>
        <h3 class="session__title">
          Operating Postgres on Kubernetes: a CloudNativePG deep dive
        </h3>
        <p class="session__speaker"><strong>Marco D.</strong> · independent</p>
        <div class="session__meta">14:00 — 15:30 · Intermediate</div>
      </div>
      <div
        class="session"
        data-type="tutorial"
        style="grid-column: 3; grid-row: 7"
      >
        <div class="session__track">
          <span class="track-letter">B</span> Tutorial · 90 min
        </div>
        <h3 class="session__title">
          Tuning vacuum: a guided tour of autovacuum and friends
        </h3>
        <p class="session__speaker"><strong>Hannah W.</strong> · Microsoft</p>
        <div class="session__meta">14:00 — 15:30 · Intermediate</div>
      </div>

      <div class="schedule-grid__break" style="grid-row: 8">
        <span>Afternoon break</span>
        <span class="mono">15:30 — 16:00 · Foyer</span>
      </div>

      <div
        class="session"
        data-type="tutorial"
        style="grid-column: 2; grid-row: 9"
      >
        <div class="session__track">
          <span class="track-letter">A</span> Tutorial · 90 min
        </div>
        <h3 class="session__title">
          Indexes from first principles: B-tree, BRIN, Bloom, and when to use
          each
        </h3>
        <p class="session__speaker"><strong>Wei C.</strong> · Supabase</p>
        <div class="session__meta">16:00 — 17:30 · Beginner</div>
      </div>
      <div
        class="session"
        data-type="tutorial"
        style="grid-column: 3; grid-row: 9"
      >
        <div class="session__track">
          <span class="track-letter">B</span> Tutorial · 90 min
        </div>
        <h3 class="session__title">
          Reading raw heap pages — a tour of pageinspect and pg_buffercache
        </h3>
        <p class="session__speaker">
          <strong>Léa T.</strong> · Citus / Microsoft
        </p>
        <div class="session__meta">16:00 — 17:30 · Advanced</div>
      </div>
    </div>

    <div class="schedule" style="margin-top: 1rem">
      <div class="schedule__row">
        <div class="schedule__time">18:00<small>2 hours</small></div>
        <div class="slot slot--single">
          <div class="session session--featured">
            <div class="session__track">
              <span class="track-letter">All</span> Opening reception
            </div>
            <h3 class="session__title">Welcome to PGConf.dev 2027</h3>
            <p class="session__speaker">
              Light food, drinks, and the official kickoff. All attendees
              welcome.
            </p>
            <div class="session__meta">Grand Foyer · Drop-in</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ======== DAY 2 ======== -->
  <section class="day" id="day-2">
    <div class="day__head">
      <div>
        <p class="day-meta">Day 02 · Talks</p>
        <h2><span class="day-num">Wed</span> 19 May</h2>
      </div>
      <p class="day__intro">
        First full day of talks. Opening keynote at 09:00, then three parallel
        tracks of 45-minute sessions through 17:30.
      </p>
    </div>

    <div class="schedule">
      <div class="schedule__row">
        <div class="schedule__time">09:00<small>60 min</small></div>
        <div class="slot slot--single">
          <div class="session session--featured">
            <div class="session__track">
              <span class="track-letter">★</span> Opening keynote
            </div>
            <h3 class="session__title">
              Twenty-five years of WAL: how durability shaped Postgres
            </h3>
            <p class="session__speaker">
              <strong>Keynote speaker</strong> · core committer · 25+ years on -hackers
            </p>
            <div class="session__meta">Grand Ballroom · Plenary</div>
          </div>
        </div>
      </div>

      <div class="schedule__row schedule__row--break">
        <div class="schedule__time">10:00</div>
        <div class="break-label">Coffee &amp; reset</div>
        <div class="break-meta">30 min · Foyer</div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">10:30<small>45 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session">
            <div class="session__track">
              <span class="track-letter">A</span> Internals
            </div>
            <h3 class="session__title">
              Query planning in 18: what the costing changes actually mean
            </h3>
            <p class="session__speaker">
              <strong>Tomás R.</strong> · committer
            </p>
            <div class="session__meta">Room 5A</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">B</span> Operating
            </div>
            <h3 class="session__title">
              Running Postgres at planet scale: lessons from a global SaaS
            </h3>
            <p class="session__speaker"><strong>Anh L.</strong> · Shopify</p>
            <div class="session__meta">Room 5B</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">C</span> Ecosystem
            </div>
            <h3 class="session__title">
              pgvector in 2027 — what shipped, what's next
            </h3>
            <p class="session__speaker">
              <strong>Andrew K.</strong> · pgvector maintainer
            </p>
            <div class="session__meta">Room 5C</div>
          </div>
        </div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">11:30<small>45 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session">
            <div class="session__track">
              <span class="track-letter">A</span> Internals
            </div>
            <h3 class="session__title">
              Cardinality estimation revisited: stats, samples, and the gap
            </h3>
            <p class="session__speaker">
              <strong>Mei Y.</strong> · independent
            </p>
            <div class="session__meta">Room 5A</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">B</span> Operating
            </div>
            <h3 class="session__title">LISTEN/NOTIFY at scale: yes, you can</h3>
            <p class="session__speaker"><strong>Felix B.</strong> · Linear</p>
            <div class="session__meta">Room 5B</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">C</span> Ecosystem
            </div>
            <h3 class="session__title">
              Postgres on ZFS — a decade of production lessons
            </h3>
            <p class="session__speaker">
              <strong>Robin S.</strong> · FreeBSD foundation
            </p>
            <div class="session__meta">Room 5C</div>
          </div>
        </div>
      </div>

      <div class="schedule__row schedule__row--break">
        <div class="schedule__time">12:15</div>
        <div class="break-label">Lunch — provided</div>
        <div class="break-meta">90 min · Hall C</div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">13:45<small>45 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session">
            <div class="session__track">
              <span class="track-letter">A</span> Internals
            </div>
            <h3 class="session__title">
              MERGE in practice: the edge cases nobody talks about
            </h3>
            <p class="session__speaker">
              <strong>Aditi S.</strong> · committer
            </p>
            <div class="session__meta">Room 5A</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">B</span> Operating
            </div>
            <h3 class="session__title">
              Zero-downtime major upgrades in a regulated industry
            </h3>
            <p class="session__speaker">
              <strong>Daniela P.</strong> · banking customer
            </p>
            <div class="session__meta">Room 5B</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">C</span> Ecosystem
            </div>
            <h3 class="session__title">
              CloudNativePG: how Kubernetes changed Postgres operations
            </h3>
            <p class="session__speaker">
              <strong>Marco D.</strong> · independent
            </p>
            <div class="session__meta">Room 5C</div>
          </div>
        </div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">14:45<small>45 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session">
            <div class="session__track">
              <span class="track-letter">A</span> Internals
            </div>
            <h3 class="session__title">
              JIT compilation in 2027: when it helps, when it hurts
            </h3>
            <p class="session__speaker">
              <strong>Rui Z.</strong> · contributor
            </p>
            <div class="session__meta">Room 5A</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">B</span> Operating
            </div>
            <h3 class="session__title">
              Replication slots, invalidation, and surviving long outages
            </h3>
            <p class="session__speaker"><strong>Esther V.</strong> · Neon</p>
            <div class="session__meta">Room 5B</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">C</span> Ecosystem
            </div>
            <h3 class="session__title">
              Apache AGE — graph queries on top of Postgres
            </h3>
            <p class="session__speaker">
              <strong>Bilal F.</strong> · AGE maintainer
            </p>
            <div class="session__meta">Room 5C</div>
          </div>
        </div>
      </div>

      <div class="schedule__row schedule__row--break">
        <div class="schedule__time">15:30</div>
        <div class="break-label">Afternoon break</div>
        <div class="break-meta">30 min · Foyer</div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">16:00<small>45 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session">
            <div class="session__track">
              <span class="track-letter">A</span> Internals
            </div>
            <h3 class="session__title">
              Inside the regression test suite: a tour for new contributors
            </h3>
            <p class="session__speaker">
              <strong>Yusuke T.</strong> · committer
            </p>
            <div class="session__meta">Room 5A</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">B</span> Operating
            </div>
            <h3 class="session__title">
              Vacuum after the WAL — the real cost of recovery
            </h3>
            <p class="session__speaker">
              <strong>Hannah W.</strong> · Microsoft
            </p>
            <div class="session__meta">Room 5B</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">C</span> Ecosystem
            </div>
            <h3 class="session__title">
              PGXN in 2027: extension distribution, supply chain, and trust
            </h3>
            <p class="session__speaker">
              <strong>David W.</strong> · PGXN maintainer
            </p>
            <div class="session__meta">Room 5C</div>
          </div>
        </div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">17:00<small>30 min</small></div>
        <div class="slot slot--single">
          <div class="session">
            <div class="session__track">
              <span class="track-letter">All</span> Plenary
            </div>
            <h3 class="session__title">Lightning talks — open mic</h3>
            <p class="session__speaker">
              5-minute slots, signup at the registration desk by 12:00.
            </p>
            <div class="session__meta">Grand Ballroom</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ======== DAY 3 ======== -->
  <section class="day" id="day-3">
    <div class="day__head">
      <div>
        <p class="day-meta">Day 03 · Talks</p>
        <h2><span class="day-num">Thu</span> 20 May</h2>
      </div>
      <p class="day__intro">
        Second day of talks. Mid-conference keynote at lunch. Closing dinner
        Thursday evening — separate signup required.
      </p>
    </div>

    <div class="schedule">
      <div class="schedule__row">
        <div class="schedule__time">09:00<small>45 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session">
            <div class="session__track">
              <span class="track-letter">A</span> Internals
            </div>
            <h3 class="session__title">
              Lock contention in 18: what changed, what didn't
            </h3>
            <p class="session__speaker">
              <strong>Tomás R.</strong> · committer
            </p>
            <div class="session__meta">Room 5A</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">B</span> Operating
            </div>
            <h3 class="session__title">
              Backups in the era of object storage: pgBackRest in 2027
            </h3>
            <p class="session__speaker">
              <strong>Steve C.</strong> · pgBackRest maintainer
            </p>
            <div class="session__meta">Room 5B</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">C</span> Ecosystem
            </div>
            <h3 class="session__title">
              TimescaleDB internals: hypertables, chunks, and compression
            </h3>
            <p class="session__speaker"><strong>Sven L.</strong> · Timescale</p>
            <div class="session__meta">Room 5C</div>
          </div>
        </div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">10:00<small>45 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session">
            <div class="session__track">
              <span class="track-letter">A</span> Internals
            </div>
            <h3 class="session__title">
              A new index access method, walked through start to finish
            </h3>
            <p class="session__speaker">
              <strong>Léa T.</strong> · Citus / Microsoft
            </p>
            <div class="session__meta">Room 5A</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">B</span> Operating
            </div>
            <h3 class="session__title">
              Connection pooling: PgBouncer, pgcat, and what we actually need
            </h3>
            <p class="session__speaker">
              <strong>Karim O.</strong> · independent
            </p>
            <div class="session__meta">Room 5B</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">C</span> Ecosystem
            </div>
            <h3 class="session__title">
              Postgres-XL revisited: what sharding teaches us
            </h3>
            <p class="session__speaker">
              <strong>Mei Y.</strong> · independent
            </p>
            <div class="session__meta">Room 5C</div>
          </div>
        </div>
      </div>

      <div class="schedule__row schedule__row--break">
        <div class="schedule__time">10:45</div>
        <div class="break-label">Coffee</div>
        <div class="break-meta">30 min · Foyer</div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">11:15<small>45 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session">
            <div class="session__track">
              <span class="track-letter">A</span> Internals
            </div>
            <h3 class="session__title">
              Subtransactions and SLRU: the bottleneck we keep finding
            </h3>
            <p class="session__speaker">
              <strong>Aditi S.</strong> · committer
            </p>
            <div class="session__meta">Room 5A</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">B</span> Operating
            </div>
            <h3 class="session__title">
              Observability for Postgres: pg_stat_*, auto_explain, and beyond
            </h3>
            <p class="session__speaker"><strong>Anh L.</strong> · Shopify</p>
            <div class="session__meta">Room 5B</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">C</span> Ecosystem
            </div>
            <h3 class="session__title">
              Building a Postgres-based queue you can actually trust
            </h3>
            <p class="session__speaker"><strong>Felix B.</strong> · Linear</p>
            <div class="session__meta">Room 5C</div>
          </div>
        </div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">12:15<small>60 min</small></div>
        <div class="slot slot--single">
          <div class="session session--featured">
            <div class="session__track">
              <span class="track-letter">★</span> Mid-conference keynote
            </div>
            <h3 class="session__title">
              The committer model: how a database community keeps a project
              alive
            </h3>
            <p class="session__speaker">
              <strong>Keynote speaker</strong> · core team · co-author of "PostgreSQL
              Internals"
            </p>
            <div class="session__meta">Grand Ballroom · Plenary</div>
          </div>
        </div>
      </div>

      <div class="schedule__row schedule__row--break">
        <div class="schedule__time">13:15</div>
        <div class="break-label">Lunch — provided</div>
        <div class="break-meta">75 min · Hall C</div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">14:30<small>45 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session">
            <div class="session__track">
              <span class="track-letter">A</span> Internals
            </div>
            <h3 class="session__title">
              Heap pruning and HOT — a tour of what happens on UPDATE
            </h3>
            <p class="session__speaker">
              <strong>Rui Z.</strong> · contributor
            </p>
            <div class="session__meta">Room 5A</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">B</span> Operating
            </div>
            <h3 class="session__title">
              Multi-region Postgres without lying to your users about
              consistency
            </h3>
            <p class="session__speaker"><strong>Esther V.</strong> · Neon</p>
            <div class="session__meta">Room 5B</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">C</span> Ecosystem
            </div>
            <h3 class="session__title">
              Postgres in the regulated enterprise: an honest field report
            </h3>
            <p class="session__speaker">
              <strong>Daniela P.</strong> · banking customer
            </p>
            <div class="session__meta">Room 5C</div>
          </div>
        </div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">15:30<small>45 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session">
            <div class="session__track">
              <span class="track-letter">A</span> Internals
            </div>
            <h3 class="session__title">
              Foreign data wrappers: what's still hard in 2027
            </h3>
            <p class="session__speaker">
              <strong>Priya R.</strong> · core team
            </p>
            <div class="session__meta">Room 5A</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">B</span> Operating
            </div>
            <h3 class="session__title">
              When the planner gets it wrong: hints, freezes, and pragmatism
            </h3>
            <p class="session__speaker">
              <strong>Hannah W.</strong> · Microsoft
            </p>
            <div class="session__meta">Room 5B</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">C</span> Ecosystem
            </div>
            <h3 class="session__title">
              Postgres operators on Kubernetes — a comparative look
            </h3>
            <p class="session__speaker">
              <strong>Marco D.</strong> · independent
            </p>
            <div class="session__meta">Room 5C</div>
          </div>
        </div>
      </div>

      <div class="schedule__row schedule__row--break">
        <div class="schedule__time">16:15</div>
        <div class="break-label">Afternoon break</div>
        <div class="break-meta">30 min · Foyer</div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">16:45<small>45 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session">
            <div class="session__track">
              <span class="track-letter">A</span> Internals
            </div>
            <h3 class="session__title">
              A walk through the buffer manager, from request to eviction
            </h3>
            <p class="session__speaker">
              <strong>Yusuke T.</strong> · committer
            </p>
            <div class="session__meta">Room 5A</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">B</span> Operating
            </div>
            <h3 class="session__title">
              Compliance, audit, and Postgres — what we wish DBAs heard sooner
            </h3>
            <p class="session__speaker">
              <strong>Karim O.</strong> · independent
            </p>
            <div class="session__meta">Room 5B</div>
          </div>
          <div class="session">
            <div class="session__track">
              <span class="track-letter">C</span> Ecosystem
            </div>
            <h3 class="session__title">
              Pglogical, pglogical2, pg_logical — keeping the lineage straight
            </h3>
            <p class="session__speaker"><strong>Wei C.</strong> · Supabase</p>
            <div class="session__meta">Room 5C</div>
          </div>
        </div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">19:30<small>Until late</small></div>
        <div class="slot slot--single">
          <div class="session session--featured">
            <div class="session__track">
              <span class="track-letter">★</span> Closing dinner
            </div>
            <h3 class="session__title">Community dinner — Old Montréal</h3>
            <p class="session__speaker">
              Separate signup required. Limited to 250 seats; subsidized by
              sponsorship.
            </p>
            <div class="session__meta">
              Restaurant venue · 19:30 · Walking distance
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ======== DAY 4 ======== -->
  <section class="day" id="day-4">
    <div class="day__head">
      <div>
        <p class="day-meta">Day 04 · Unconference</p>
        <h2><span class="day-num">Fri</span> 21 May</h2>
      </div>
      <p class="day__intro">
        No fixed program. The schedule fills in live based on attendee proposals
        — write a topic on a card, pin it to the board at 09:00, the room votes,
        sessions go on the wall.
      </p>
    </div>

    <div class="schedule">
      <div class="schedule__row">
        <div class="schedule__time">09:00<small>60 min</small></div>
        <div class="slot slot--single">
          <div class="session session--featured">
            <div class="session__track">
              <span class="track-letter">★</span> Plenary
            </div>
            <h3 class="session__title">Open-mic proposal session</h3>
            <p class="session__speaker">
              Write your topic on a card, pitch it in 30 seconds, the room
              votes. Top 12 fill the morning slots; top 6 fill the afternoon.
            </p>
            <div class="session__meta">Grand Ballroom</div>
          </div>
        </div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">10:15<small>30 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session" data-type="unconf">
            <div class="session__track">
              <span class="track-letter">A</span> Unconference · TBD
            </div>
            <h3 class="session__title">Topic to be proposed</h3>
            <p class="session__speaker">Schedule fills in live</p>
            <div class="session__meta">Room U-1</div>
          </div>
          <div class="session" data-type="unconf">
            <div class="session__track">
              <span class="track-letter">B</span> Unconference · TBD
            </div>
            <h3 class="session__title">Topic to be proposed</h3>
            <p class="session__speaker">Schedule fills in live</p>
            <div class="session__meta">Room U-2</div>
          </div>
          <div class="session" data-type="unconf">
            <div class="session__track">
              <span class="track-letter">C</span> Unconference · TBD
            </div>
            <h3 class="session__title">Topic to be proposed</h3>
            <p class="session__speaker">Schedule fills in live</p>
            <div class="session__meta">Room U-3</div>
          </div>
        </div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">11:00<small>30 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session" data-type="unconf">
            <div class="session__track">
              <span class="track-letter">A</span> Unconference · TBD
            </div>
            <h3 class="session__title">Topic to be proposed</h3>
            <p class="session__speaker">Schedule fills in live</p>
            <div class="session__meta">Room U-1</div>
          </div>
          <div class="session" data-type="unconf">
            <div class="session__track">
              <span class="track-letter">B</span> Unconference · TBD
            </div>
            <h3 class="session__title">Topic to be proposed</h3>
            <p class="session__speaker">Schedule fills in live</p>
            <div class="session__meta">Room U-2</div>
          </div>
          <div class="session" data-type="unconf">
            <div class="session__track">
              <span class="track-letter">C</span> Unconference · TBD
            </div>
            <h3 class="session__title">Topic to be proposed</h3>
            <p class="session__speaker">Schedule fills in live</p>
            <div class="session__meta">Room U-3</div>
          </div>
        </div>
      </div>

      <div class="schedule__row schedule__row--break">
        <div class="schedule__time">11:45</div>
        <div class="break-label">Coffee &amp; reshuffle</div>
        <div class="break-meta">30 min · Foyer</div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">12:15<small>30 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session" data-type="unconf">
            <div class="session__track">
              <span class="track-letter">A</span> Unconference · TBD
            </div>
            <h3 class="session__title">Topic to be proposed</h3>
            <p class="session__speaker">Schedule fills in live</p>
            <div class="session__meta">Room U-1</div>
          </div>
          <div class="session" data-type="unconf">
            <div class="session__track">
              <span class="track-letter">B</span> Unconference · TBD
            </div>
            <h3 class="session__title">Topic to be proposed</h3>
            <p class="session__speaker">Schedule fills in live</p>
            <div class="session__meta">Room U-2</div>
          </div>
          <div class="session" data-type="unconf">
            <div class="session__track">
              <span class="track-letter">C</span> Unconference · TBD
            </div>
            <h3 class="session__title">Topic to be proposed</h3>
            <p class="session__speaker">Schedule fills in live</p>
            <div class="session__meta">Room U-3</div>
          </div>
        </div>
      </div>

      <div class="schedule__row schedule__row--break">
        <div class="schedule__time">12:45</div>
        <div class="break-label">Lunch — provided</div>
        <div class="break-meta">75 min · Hall C</div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">14:00<small>30 min</small></div>
        <div class="slot slot--tracks-3">
          <div class="session" data-type="unconf">
            <div class="session__track">
              <span class="track-letter">A</span> Unconference · TBD
            </div>
            <h3 class="session__title">Topic to be proposed</h3>
            <p class="session__speaker">Schedule fills in live</p>
            <div class="session__meta">Room U-1</div>
          </div>
          <div class="session" data-type="unconf">
            <div class="session__track">
              <span class="track-letter">B</span> Unconference · TBD
            </div>
            <h3 class="session__title">Topic to be proposed</h3>
            <p class="session__speaker">Schedule fills in live</p>
            <div class="session__meta">Room U-2</div>
          </div>
          <div class="session" data-type="unconf">
            <div class="session__track">
              <span class="track-letter">C</span> Unconference · TBD
            </div>
            <h3 class="session__title">Topic to be proposed</h3>
            <p class="session__speaker">Schedule fills in live</p>
            <div class="session__meta">Room U-3</div>
          </div>
        </div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">15:00<small>60 min</small></div>
        <div class="slot slot--single">
          <div class="session session--featured">
            <div class="session__track">
              <span class="track-letter">★</span> Closing plenary
            </div>
            <h3 class="session__title">
              Where we go from here — unconference report &amp; roadmap notes
            </h3>
            <p class="session__speaker">
              Recap from the unconference moderators, themes from the week, and
              a quick look at where the contributor community is heading next.
            </p>
            <div class="session__meta">Grand Ballroom · Plenary</div>
          </div>
        </div>
      </div>

      <div class="schedule__row">
        <div class="schedule__time">16:00</div>
        <div class="slot slot--single">
          <div class="session">
            <div class="session__track">
              <span class="track-letter">·</span> Wrap
            </div>
            <h3 class="session__title">
              Conference ends. Hallway track continues.
            </h3>
            <p class="session__speaker">
              Foyer stays open until 18:00. See you in Berlin in 2028.
            </p>
            <div class="session__meta">Grand Foyer</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="callout callout--info" style="margin-block: var(--margin)">
    <p class="callout__title">Changes &amp; updates</p>
    <p>
      The program is subject to minor changes through April 2027. The CFP for
      the unconference closes 1 May; until then, the unconference slots above
      remain placeholders.
    </p>
  </div>
</div>
