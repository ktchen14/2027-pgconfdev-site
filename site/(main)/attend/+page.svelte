<script>
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
</script>

<style>
  header h1 {
    font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem);
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .section-nav :global(a) {
    border-inline-start: 2px solid var(--border);
    border-radius: 0;
    margin-inline: 0;
  }

  .section-nav :global(a[aria-current]:where(:not([aria-current="false"]))) {
    background-color: var(--action-bg-tint);
  }

  .section-nav
    :global(a:is(:hover, [aria-current]:where(:not([aria-current="false"])))) {
    border-color: var(--action-fg);
  }

  /* Aligned label → value spec table */
  .facts {
    display: grid;
  }

  .facts > div {
    align-items: baseline;
    border-top: 1px solid var(--border);
    display: grid;
    gap: 1rem;
    grid-template-columns: 9rem 1fr;
    padding-block: 0.75rem;
  }

  .facts > div:last-child {
    border-bottom: 1px solid var(--border);
  }

  .facts dd {
    color: var(--fg-mute);
    margin-inline-start: 0;
  }
</style>

<svelte:head>
  <title>Attend — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Venue, travel, social events, and everything you need to attend PGConf.dev 2027 in Montréal."
  />
</svelte:head>

<nav class="(main)" aria-label="Breadcrumb">
  <ol class="iconic over" style:gap="1em">
    <li aria-hidden="true">/</li>
    <li><Link href={resolve("/")}>Attend</Link></li>
  </ol>
</nav>

<header class="(main)">
  <hgroup>
    <p class="action">Attend · Montréal 2027</p>
    <h1>Everything you need to get here.</h1>
  </hgroup>

  <p class="lede mute text">
    PGConf.dev 2027 takes place 18 – 21 May at the Palais des congrès de
    Montréal. This page covers the venue, getting there, accommodation, and
    everything you need for the week.
  </p>
</header>

<hr class="section" />

<nav class="section-nav ( none@-64 note" aria-labelledby="attend-nav">
  <h2 id="attend-nav" class="over">Attend</h2>
  <ul>
    <li><Link href={resolve("/attend")}>Venue</Link></li>
    <li><Link href={resolve("/attend/travel")}>Travel &amp; hotels</Link></li>
    <li><Link href={resolve("/attend/social")}>Social events</Link></li>
    <li><Link href={resolve("/attend/volunteer")}>Volunteer</Link></li>
  </ul>
</nav>

<nav aria-labelledby="on-this-page" class=") none@-48 note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#venue">The venue</a></li>
    <li>
      <a class="li-number" href="#floor-plans">Rooms &amp; floor plans</a>
    </li>
    <li><a class="li-number" href="#accessibility">Accessibility</a></li>
  </ol>
</nav>

<section id="venue" class="main">
  <hgroup>
    <p class="section-number">Venue</p>
    <h2>Palais des congrès de Montréal.</h2>
  </hgroup>

  <p class="lede">
    The Palais des congrès is Montréal's downtown convention centre, located
    directly above the Place-d'Armes métro station in the heart of Old Montréal.
  </p>

  <p>
    The venue is a short walk from hotels, restaurants, and the rest of the
    downtown core. Old Montréal and the Vieux-Port are minutes away on foot.
  </p>

  <dl class="facts">
    <div>
      <dt class="over">Address</dt>
      <dd>159 Rue Saint-Antoine Ouest, Montréal, QC H2Z 1H2</dd>
    </div>
    <div>
      <dt class="over">Métro</dt>
      <dd>Place-d'Armes (Orange line) — direct access from underground</dd>
    </div>
    <div>
      <dt class="over">Dates</dt>
      <dd>18 – 21 May 2027 (Tue – Fri)</dd>
    </div>
    <div>
      <dt class="over">Registration</dt>
      <dd>Main lobby, Level 2. Open from 08:00 each day.</dd>
    </div>
  </dl>

  <figure class="section">
    <div class="border" style:aspect-ratio="16 / 7">
      [ Photo · Palais des congrès exterior ]
    </div>
    <figcaption>
      Fig. 01 — Replace with a photo of the Palais des congrès.
    </figcaption>
  </figure>
</section>

<section id="floor-plans" class="main">
  <hgroup>
    <p class="section-number">Rooms &amp; floor plans</p>
    <h2>Session rooms and spaces.</h2>
  </hgroup>

  <p>
    The conference occupies Level 5 of the Palais des congrès for the talk
    tracks, with plenary sessions in the Grand Ballroom (Level 7). Tutorial
    rooms are on Level 2. Registration and the sponsor hall are in the main
    lobby on Level 2.
  </p>

  <dl class="facts">
    <div>
      <dt class="over">Grand Ballroom</dt>
      <dd>Level 7 · Plenary sessions, keynotes, opening/closing</dd>
    </div>
    <div>
      <dt class="over">Room 5A – 5C</dt>
      <dd>Level 5 · Main talk tracks, 150 seats each</dd>
    </div>
    <div>
      <dt class="over">Room 2A – 2B</dt>
      <dd>Level 2 · Tutorial rooms, 40 seats, tables for laptops</dd>
    </div>
    <div>
      <dt class="over">Room U-1 – U-3</dt>
      <dd>Level 5 · Unconference rooms, Friday only, flexible seating</dd>
    </div>
    <div>
      <dt class="over">Sponsor hall</dt>
      <dd>Level 2 · Adjacent to registration, open all four days</dd>
    </div>
    <div>
      <dt class="over">Grand Foyer</dt>
      <dd>Level 5 · Breaks, hallway track, coffee</dd>
    </div>
    <div>
      <dt class="over">Hall C</dt>
      <dd>Level 3 · Catered lunch (included in registration)</dd>
    </div>
  </dl>
</section>

<section class="main">
  <div class="action-area edge">
    <h3 class="h6">Floor plans</h3>

    <p>
      Detailed floor plans will be published closer to the conference and
      included in the printed program distributed at registration.
    </p>
  </div>
</section>

<section id="accessibility" class="main">
  <hgroup>
    <p class="section-number">Accessibility</p>
    <h2>Accessible by design.</h2>
  </hgroup>

  <p>
    The Palais des congrès is fully wheelchair accessible, with elevators
    serving all levels. Accessible entrances are available on Rue Saint-Antoine
    Ouest and via the underground Place-d'Armes métro station.
  </p>

  <p>
    If you have specific accessibility requirements, contact us in advance at
    <Link href={`${resolve("/team")}#contact`}>info@pgconf.dev</Link> so we can make
    arrangements. Captioning and hearing loop availability will be confirmed closer
    to the conference.
  </p>
</section>
