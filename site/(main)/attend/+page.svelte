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

  .callout__title {
    font-weight: 600;
    margin-block: 0 0.5em;
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
  <title>Attend — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Venue, travel, social events, and everything you need to attend PGConf.dev 2027 in Montréal."
  />
</svelte:head>

<div class="restrict-1280">
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <a href="/">PGConf.dev 2027</a>
    <span class="sep">/</span>
    <span>Attend</span>
  </nav>
</div>

<div class="restrict-1280 page-head">
  <p class="over action">Attend · Montréal 2027</p>
  <h1>Everything you need to get here.</h1>
  <p class="lede fg-mute">
    PGConf.dev 2027 takes place 18 – 21 May at the Palais des congrès de
    Montréal. This page covers the venue, getting there, accommodation, and
    everything you need for the week.
  </p>
</div>

<article class="editorial restrict-1280">
  <nav class="section-nav" aria-label="Attend sections">
    <a href="/attend">Venue</a>
    <a href="/attend/travel">Travel &amp; hotels</a>
    <a href="/attend/social">Social events</a>
    <a href="/attend/volunteer">Volunteer</a>
  </nav>

  <!-- Venue -->
  <section id="venue">
    <p class="over">§ 01 · Venue</p>
    <h2>Palais des congrès de Montréal.</h2>

    <p class="lede">
      The Palais des congrès is Montréal's downtown convention centre, located
      directly above the Place-d'Armes métro station in the heart of Old
      Montréal.
    </p>

    <p>
      The venue is a short walk from hotels, restaurants, and the rest of the
      downtown core. Old Montréal and the Vieux-Port are minutes away on foot.
    </p>
  </section>

  <div class="break-wide">
    <dl class="facts">
      <div>
        <dt>Address</dt>
        <dd>159 Rue Saint-Antoine Ouest, Montréal, QC H2Z 1H2</dd>
      </div>
      <div>
        <dt>Métro</dt>
        <dd>Place-d'Armes (Orange line) — direct access from underground</dd>
      </div>
      <div>
        <dt>Dates</dt>
        <dd>18 – 21 May 2027 (Tue – Fri)</dd>
      </div>
      <div>
        <dt>Registration</dt>
        <dd>Main lobby, Level 2. Open from 08:00 each day.</dd>
      </div>
    </dl>
  </div>

  <figure class="break-wide" style="margin: 0">
    <div class="photo-placeholder--wide">
      [ Photo · Palais des congrès exterior ]
    </div>
    <figcaption>
      Fig. 01 — Replace with a photo of the Palais des congrès.
    </figcaption>
  </figure>

  <!-- Rooms -->
  <section id="floor-plans">
    <p class="over">§ 02 · Rooms &amp; floor plans</p>
    <h2>Session rooms and spaces.</h2>

    <p>
      The conference occupies Level 5 of the Palais des congrès for the talk
      tracks, with plenary sessions in the Grand Ballroom (Level 7). Tutorial
      rooms are on Level 2. Registration and the sponsor hall are in the main
      lobby on Level 2.
    </p>
  </section>

  <div class="break-wide">
    <dl class="facts">
      <div>
        <dt>Grand Ballroom</dt>
        <dd>Level 7 · Plenary sessions, keynotes, opening/closing</dd>
      </div>
      <div>
        <dt>Room 5A – 5C</dt>
        <dd>Level 5 · Main talk tracks, 150 seats each</dd>
      </div>
      <div>
        <dt>Room 2A – 2B</dt>
        <dd>Level 2 · Tutorial rooms, 40 seats, tables for laptops</dd>
      </div>
      <div>
        <dt>Room U-1 – U-3</dt>
        <dd>Level 5 · Unconference rooms, Friday only, flexible seating</dd>
      </div>
      <div>
        <dt>Sponsor hall</dt>
        <dd>Level 2 · Adjacent to registration, open all four days</dd>
      </div>
      <div>
        <dt>Grand Foyer</dt>
        <dd>Level 5 · Breaks, hallway track, coffee</dd>
      </div>
      <div>
        <dt>Hall C</dt>
        <dd>Level 3 · Catered lunch (included in registration)</dd>
      </div>
    </dl>
  </div>

  <div class="callout callout--info">
    <p class="callout__title">Floor plans</p>
    <p>
      Detailed floor plans will be published closer to the conference and
      included in the printed program distributed at registration.
    </p>
  </div>

  <!-- Accessibility -->
  <section id="accessibility">
    <p class="over">§ 03 · Accessibility</p>
    <h2>Accessible by design.</h2>

    <p>
      The Palais des congrès is fully wheelchair accessible, with elevators
      serving all levels. Accessible entrances are available on Rue
      Saint-Antoine Ouest and via the underground Place-d'Armes métro station.
    </p>

    <p>
      If you have specific accessibility requirements, contact us in advance at
      <a href="/about#contact">info@pgconf.dev</a> so we can make arrangements. Captioning
      and hearing loop availability will be confirmed closer to the conference.
    </p>
  </section>
</article>
