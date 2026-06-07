<style>
  header {
    padding-block: var(--margin);
    border-bottom: 1px solid var(--border);
  }

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

  .event-card {
    border: 1px solid var(--border);
    border-top: 3px solid var(--border);
    padding: 1.5rem;
  }

  .event-card--featured {
    border-top-color: var(--action);
  }
  .event-card--social {
    border-top-color: var(--insert);
  }

  .event-card__eyebrow {
    font-family: var(--mono-font);
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--fg-tint);
    margin-block: 0 0.5rem;
  }

  .event-card h3 {
    font-size: 1.25rem;
    margin: 0 0 0.5rem;
  }

  .event-card__meta {
    font-family: var(--mono-font);
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--fg-tint);
    margin-bottom: 0.75rem;
  }

  .event-card p {
    font-size: 0.9375rem;
    color: var(--fg-mute);
    margin: 0;
  }

  .event-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
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
  <title>Social Events — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Social events at PGConf.dev 2027 — welcome breakfast, group run, reception, community dinner, and the conference pub."
  />
</svelte:head>

<nav class="breadcrumb restrict-1280" aria-label="Breadcrumb">
  <ol class="flex over" style:gap="0.5em">
    <li><a href="/">PGConf.dev 2027</a></li>
    <li><a href="/attend">Attend</a></li>
    <li>Social Events</li>
  </ol>
</nav>

<header class="restrict-1280">
  <hgroup>
    <p class="action">Attend · Social</p>
    <h1>Social events.</h1>
  </hgroup>
  <p class="lede fg-mute">
    PGConf.dev's hallway track is as valuable as the scheduled program. These
    events are how the contributor community actually connects — don't skip
    them.
  </p>
</header>

<article class="editorial restrict-1280">
  <nav class="section-nav" aria-label="Attend sections">
    <a href="/attend">Venue</a>
    <a href="/attend/travel">Travel &amp; hotels</a>
    <a href="/attend/social" aria-current="page">Social events</a>
    <a href="/attend/volunteer">Volunteer</a>
  </nav>

  <div class="callout callout--info">
    <h3 class="h6">Details coming soon</h3>
    <p>
      Specific venues and signup links for 2027 will be posted closer to the
      conference. The events below are modeled on 2026 and may change. Subscribe
      to the mailing list for announcements.
    </p>
  </div>

  <!-- Tuesday -->
  <section id="tuesday">
    <hgroup>
      <p>Tuesday · 18 May</p>
      <h2>Tutorial day social.</h2>
    </hgroup>
  </section>

  <div class="break-wide">
    <div class="event-grid">
      <div class="event-card event-card--social" id="breakfast">
        <p class="event-card__eyebrow">Welcome breakfast</p>
        <h3>Newcomer Welcome Breakfast</h3>
        <p class="event-card__meta">Tue · 07:30 · Registration area</p>
        <p>
          Meet other newcomers alongside experienced community members before
          the day gets started. No signup required — just show up. Coffee,
          pastries, and good conversation.
        </p>
      </div>

      <div class="event-card event-card--social" id="run">
        <p class="event-card__eyebrow">Group run</p>
        <h3>Social Run</h3>
        <p class="event-card__meta">Tue · 17:30 · Main entrance</p>
        <p>
          A recreational run through the streets of Montréal and along the
          waterfront. Multiple pace groups, 5–10 km depending on interest.
          Running shoes required; bring your conference badge for meetup
          identification.
        </p>
      </div>
    </div>
  </div>

  <!-- Wednesday -->
  <section id="wednesday">
    <hgroup>
      <p>Wednesday · 19 May</p>
      <h2>First talk day.</h2>
    </hgroup>
  </section>

  <div class="break-wide">
    <div class="event-grid">
      <div class="event-card event-card--featured" id="reception">
        <p class="event-card__eyebrow">Social reception</p>
        <h3>Evening Reception</h3>
        <p class="event-card__meta">
          Wed · 18:00 · Venue TBD · Near conference
        </p>
        <p>
          Appetizers and two complimentary drinks included with your
          registration. A chance to decompress after day one of talks. Bring
          your badge. Additional drinks available for purchase.
        </p>
      </div>
    </div>
  </div>

  <!-- Thursday -->
  <section id="thursday">
    <hgroup>
      <p>Thursday · 20 May</p>
      <h2>Second talk day.</h2>
    </hgroup>
  </section>

  <div class="break-wide">
    <div class="event-grid">
      <div class="event-card event-card--featured" id="dinner">
        <p class="event-card__eyebrow">Community dinner</p>
        <h3>Conference Dinner — Old Montréal</h3>
        <p class="event-card__meta">
          Thu · 19:30 · Restaurant TBD · Separate signup
        </p>
        <p>
          The traditional conference dinner, held at a venue in Old Montréal.
          Separate signup required; subsidized by sponsorship. Limited to 250
          seats. Signup opens with early-bird registration.
        </p>
      </div>
    </div>
  </div>

  <!-- All week -->
  <section id="all-week">
    <hgroup>
      <p>All week</p>
      <h2>Ongoing throughout the conference.</h2>
    </hgroup>
  </section>

  <div class="break-wide">
    <div class="event-grid">
      <div class="event-card" id="pub">
        <p class="event-card__eyebrow">Conference pub</p>
        <h3>Hallway pub</h3>
        <p class="event-card__meta">Evenings · Venue TBD · Near conference</p>
        <p>
          An informal after-hours gathering spot near the venue. No signup, no
          agenda — just the contributor community continuing conversations from
          the day. Venue will be announced at registration.
        </p>
      </div>

      <div class="event-card event-card--social">
        <p class="event-card__eyebrow">Meet &amp; Eat</p>
        <h3>Small-group dinners</h3>
        <p class="event-card__meta">
          Tue &amp; Thu evenings · Various restaurants
        </p>
        <p>
          Self-organized dinners in groups of 8. Sign up via the form at
          registration, get assigned a group and a restaurant, meet at the
          registration desk at 17:00. Self-pay. A great way to have an actual
          conversation with people you've only known by email address.
        </p>
      </div>
    </div>
  </div>

  <div class="callout callout--positive">
    <h3 class="h6">Signup forms</h3>
    <p>
      Signup links for the dinner, Meet &amp; Eat, and any ticketed events will
      be available at the registration desk and posted on the conference Discord
      server. Details will also be emailed to registered attendees before the
      conference.
    </p>
  </div>
</article>
