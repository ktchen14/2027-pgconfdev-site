<style>
  .page-head {
    padding-block: var(--margin);
    border-bottom: 1px solid var(--border);
  }

  .page-head h1 {
    font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem);
    line-height: 1;
    letter-spacing: -0.02em;
    font-weight: 600;
  }

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

  .editorial {
    display: grid;
    grid-template-columns: 1fr min(var(--w-text), 100%) 1fr;
    row-gap: var(--margin);
    padding-block: var(--margin);
  }

  .editorial > * {
    grid-column: 2;
    margin-block: 0;
  }

  .break-wide {
    grid-column: 1 / -1;
    max-width: var(--w-text-wide);
    width: 100%;
    margin-inline: auto;
  }

  .callout {
    padding: 1rem 1.25rem;
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

  .callout__title {
    font-weight: 600;
    margin-block: 0 0.5em;
  }

  .list-rule {
    list-style: none;
    padding-inline-start: 0;
    border-inline-start: 3px solid var(--border);
    padding-inline: 1rem;
  }

  .list-rule li {
    margin-block: 0.5em;
  }

  .facts {
    display: grid;
    gap: 0;
  }

  .facts > div {
    display: grid;
    grid-template-columns: 9rem 1fr;
    gap: 1rem;
    padding-block: 0.75rem;
    border-top: 1px solid var(--border);
    align-items: baseline;
  }

  .facts > div:last-child {
    border-bottom: 1px solid var(--border);
  }

  .facts dt {
    font-family: var(--mono-font);
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--fg-tint);
  }

  .facts dd {
    margin-inline-start: 0;
    color: var(--fg-mute);
    font-size: 0.9375rem;
  }
</style>

<svelte:head>
  <title>Call for Proposals — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Submit a talk, tutorial, or unconference topic to PGConf.dev 2027. CFP closes 14 February 2027."
  />
</svelte:head>

<div class="restrict-1280">
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <a href="/">PGConf.dev 2027</a>
    <span class="sep">/</span>
    <span>Call for Proposals</span>
  </nav>
</div>

<div class="restrict-1280 page-head">
  <p class="over action">Call for Proposals</p>
  <h1>Submit a talk for 2027.</h1>
  <p class="lede fg-mute">
    We're looking for technical talks, hands-on tutorials, and unconference
    topics from contributors at every level. The CFP closes <strong
      >14 February 2027</strong
    >
    at 11:59 pm UTC.
  </p>
</div>

<article class="editorial restrict-1280">
  <div class="callout callout--positive">
    <p class="callout__title">CFP is open</p>
    <p>
      Proposals are being accepted now through <strong>14 February 2027</strong
      >. Submit via the proposal system linked below. Questions?
      <a href="/about#contact">Contact the program committee.</a>
    </p>
  </div>

  <section>
    <p class="over">§ 01 · What we're looking for</p>
    <h2>Technical depth, honestly reported.</h2>

    <p class="lede">
      PGConf.dev is a working conference. The audience has already read the
      documentation — they want to hear what the documentation doesn't say.
    </p>

    <p>
      The best talks here are war stories, deep dives, and design walks that
      only the person who built or broke the thing could give. We especially
      welcome:
    </p>

    <ul class="list-rule">
      <li>
        <strong>Internals and patches</strong> — new features in PG 18, work in progress,
        design decisions and their trade-offs
      </li>
      <li>
        <strong>Operating at scale</strong> — vacuum, replication, connection pooling,
        observability — what you actually learned in production
      </li>
      <li>
        <strong>Extensions</strong> — building, distributing, and maintaining extensions;
        pgvector, TimescaleDB, pgrx, the PGXN ecosystem
      </li>
      <li>
        <strong>Tooling and ecosystem</strong> — backup, migration, upgrade paths,
        cloud-native deployments, logical replication
      </li>
      <li>
        <strong>Community and process</strong> — how patches get committed, how the
        committer model works, how new contributors find their footing
      </li>
    </ul>

    <p>
      Introductory talks are a poor fit for this audience. If your proposal
      could run verbatim at a general PostgreSQL conference, it's probably not
      the right match for PGConf.dev.
    </p>
  </section>

  <section>
    <p class="over">§ 02 · Formats</p>
    <h2>Three formats to choose from.</h2>

    <p>
      Pick the format that fits your material. We review each format on its own
      merits — a 45-minute talk is not a better or worse submission than a
      tutorial.
    </p>
  </section>

  <div class="break-wide">
    <dl class="facts">
      <div>
        <dt>Talk · 45 min</dt>
        <dd>
          The main format. Slide-driven or live-demo. Q&amp;A in the final 5–10
          minutes. Three parallel tracks.
        </dd>
      </div>
      <div>
        <dt>Tutorial · 90 min</dt>
        <dd>
          Hands-on, laptop-required session. Day 1 only (tutorial day). Max 40
          attendees per room. Attendees should have Postgres 17 installed.
        </dd>
      </div>
      <div>
        <dt>Unconference</dt>
        <dd>
          Proposed and voted on the day of (Friday). Submit a topic idea in
          advance to seed the board; final schedule fills live from attendee
          proposals.
        </dd>
      </div>
    </dl>
  </div>

  <section>
    <p class="over">§ 03 · Review process</p>
    <h2>Double-blind, then discussed.</h2>

    <p>
      Every proposal is reviewed independently by at least two members of the
      program committee. The first pass is blind to author identity. In the
      second pass, reviewers discuss shortlisted proposals with author context
      visible and conflicts of interest declared.
    </p>

    <p>
      All proposers receive written feedback regardless of outcome. If your talk
      isn't selected, you'll get specific notes you can use for the next
      submission or a future edition.
    </p>
  </section>

  <div class="callout callout--info">
    <p class="callout__title">Speaker support</p>
    <p>
      Accepted speakers receive a complimentary full-conference registration. If
      travel funding would make the difference between submitting and not, note
      that in your proposal — we have a small speaker travel fund allocated each
      year.
    </p>
  </div>

  <section>
    <p class="over">§ 04 · Key dates</p>
    <h2>Important deadlines.</h2>
  </section>

  <div class="break-wide">
    <dl class="facts">
      <div>
        <dt>CFP opens</dt>
        <dd><time datetime="2026-12-01">1 December 2026</time></dd>
      </div>
      <div>
        <dt>CFP closes</dt>
        <dd>
          <time datetime="2027-02-14">14 February 2027</time> at 11:59 pm UTC
        </dd>
      </div>
      <div>
        <dt>Notifications</dt>
        <dd><time datetime="2027-03-15">by 15 March 2027</time></dd>
      </div>
      <div>
        <dt>Schedule published</dt>
        <dd><time datetime="2027-04-01">early April 2027</time></dd>
      </div>
      <div>
        <dt>Conference</dt>
        <dd>18 – 21 May 2027 · Montréal</dd>
      </div>
    </dl>
  </div>

  <div style="text-align: center; padding-block: var(--margin)">
    <a
      href="#"
      class="button circle"
      style="color: var(--delete-fg); border: 1px solid var(--delete-fg); background: none;"
    >
      Submit a proposal — link coming soon
    </a>
    <p class="fg-mute" style="font-size: 0.875rem; margin-top: 1rem">
      Questions? Email <a href="/about#contact">the program committee</a>.
    </p>
  </div>
</article>
