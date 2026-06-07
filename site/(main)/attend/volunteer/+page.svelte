<style>
  header h1 {
    font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem);
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .breadcrumb {
    ol > li:where(:not(:first-child))::before {
      content: "›";
      padding-inline-end: 0.5rem;
    }

    a {
      padding-block: 0.75rem;
    }
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
    border-radius: var(--radius);
    padding: 1.5rem;
  }

  .callout--info {
    background: var(--action-bg-mute);
    border-inline-start: 3px solid var(--action-fg);
  }

  .callout--positive {
    background: var(--insert-bg-mute);
    border-inline-start: 3px solid var(--insert-fg);
  }

  .role-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  }

  .role-card {
    border: 1px solid var(--border);
    padding: 1.25rem;
  }

  .role-card h3 {
    font-family: var(--header-font);
    font-size: 1.125rem;
    margin: 0 0 0.25rem;
  }

  .role-card .commitment {
    font-family: var(--mono-font);
    font-size: 0.75rem;
    color: var(--action-fg);
    letter-spacing: 0.04em;
    margin-bottom: 0.75rem;
  }

  .role-card p {
    font-size: 0.875rem;
    color: var(--fg-mute);
    margin: 0;
  }

  .section-nav {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    padding-block: var(--margin);
    border-bottom: 1px solid var(--border);
    margin-bottom: var(--margin);
  }

  .section-nav a {
    font-family: var(--mono-font);
    font-size: 0.8rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
</style>

<svelte:head>
  <title>Volunteer — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Volunteer at PGConf.dev 2027. Help run the conference and get free registration in return."
  />
</svelte:head>

<nav class="breadcrumb restrict-1280" aria-label="Breadcrumb">
  <ol class="flex over" style:gap="0.5em">
    <li><a href="/">PGConf.dev 2027</a></li>
    <li><a href="/attend">Attend</a></li>
    <li>Volunteer</li>
  </ol>
</nav>

<header class="restrict-1280">
  <hgroup>
    <p class="action">Attend · Volunteer</p>
    <h1>Help run the conference.</h1>
  </hgroup>
  <p class="lede fg-mute">
    PGConf.dev would not be possible without volunteers. In exchange for at
    least eight hours of shifts, you get a complimentary full-conference
    registration.
  </p>
</header>

<hr class="margin-section" />

<article class="editorial restrict-1280">
  <nav class="section-nav" aria-label="Attend sections">
    <a href="/attend">Venue</a>
    <a href="/attend/travel">Travel &amp; hotels</a>
    <a href="/attend/social">Social events</a>
    <a href="/attend/volunteer" aria-current="page">Volunteer</a>
  </nav>

  <div class="callout callout--positive">
    <h3 class="h6">Applications open in early 2027</h3>
    <p>
      Volunteer signup opens alongside early-bird registration. Subscribe to the
      mailing list or watch the conference Discord for the announcement.
    </p>
  </div>

  <section>
    <hgroup>
      <p>§ 01 · What you get</p>
      <h2>Free registration for eight hours of work.</h2>
    </hgroup>

    <p class="lede">
      Volunteers who commit to at least eight scheduled hours receive a
      complimentary full-conference registration (value: CAD $480 at early-bird
      rate).
    </p>

    <p>
      Shifts are scheduled in advance. You'll know your assignments before the
      conference, and you'll have plenty of free time to attend sessions, join
      the hallway track, and participate in social events.
    </p>
  </section>

  <section>
    <hgroup>
      <p>§ 02 · Volunteer roles</p>
      <h2>What volunteers do.</h2>
    </hgroup>
  </section>

  <div class="break-wide">
    <div class="role-grid">
      <div class="role-card">
        <h3>Registration desk</h3>
        <p class="commitment">3–4 hr shifts · All days</p>
        <p>
          Check in attendees using the QR code system. Distribute badges,
          lanyards, and t-shirts. Answer questions about venue layout, food,
          Wi-Fi, and social events. First point of contact for attendees.
        </p>
      </div>

      <div class="role-card">
        <h3>Room host (speaker intro)</h3>
        <p class="commitment">Half-day blocks · Talk days</p>
        <p>
          Introduce each speaker, manage timing using the visual cue cards, and
          facilitate Q&amp;A. Two volunteers per room; this role handles
          speaker-facing duties.
        </p>
      </div>

      <div class="role-card">
        <h3>Room host (operations)</h3>
        <p class="commitment">Half-day blocks · Talk days</p>
        <p>
          Manage room seating, keep doors appropriately open or closed, count
          attendance, and report to the Discord coordination channel. Works
          alongside the speaker-intro host.
        </p>
      </div>

      <div class="role-card">
        <h3>A/V support</h3>
        <p class="commitment">Full day · As needed</p>
        <p>
          Assist speakers with microphone setup, slide display, and recording
          equipment. Coordinate with the A/V vendor for technical issues. Some
          prior A/V experience helpful but not required.
        </p>
      </div>
    </div>
  </div>

  <section>
    <hgroup>
      <p>§ 03 · Photography policy</p>
      <h2>The red lanyard rule.</h2>
    </hgroup>

    <p>
      Attendees who do not wish to be photographed wear a
      <strong>red lanyard</strong>. Volunteers taking photos must not photograph
      anyone wearing a red lanyard — this applies to all photography, including
      candid shots and group photos.
    </p>

    <p>
      If you are unsure whether someone consents to being photographed, don't
      photograph them.
    </p>
  </section>

  <section>
    <hgroup>
      <p>§ 04 · Apply</p>
      <h2>How to sign up.</h2>
    </hgroup>

    <p>
      Applications open in early 2027 alongside registration. You'll be asked
      for your availability by day and shift, any relevant experience, and your
      preferred roles. Volunteer coordinators will confirm assignments at least
      two weeks before the conference.
    </p>

    <p>
      Questions? Email <a href="/about#contact">info@pgconf.dev</a>.
    </p>
  </section>

  <div>
    <a
      href="#"
      class="button circle"
      style="color: var(--delete-fg); border: 1px solid var(--delete-fg); background: none;"
    >
      Volunteer application — opens early 2027
    </a>
  </div>
</article>
