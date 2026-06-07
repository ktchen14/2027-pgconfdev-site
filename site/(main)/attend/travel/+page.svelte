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

  .callout--notice {
    background: var(--notice-bg-mute);
    border-inline-start: 3px solid var(--notice-fg);
  }

  .callout--info {
    background: var(--action-bg-mute);
    border-inline-start: 3px solid var(--action-fg);
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

  .facts dd {
    margin-inline-start: 0;
    color: var(--fg-mute);
  }

  .hotel-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  .hotel-card {
    border: 1px solid var(--border);
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .hotel-card h3 {
    font-family: var(--header-font);
    font-size: 1.125rem;
    margin: 0;
  }

  .hotel-card .price {
    font-family: var(--mono-font);
    font-size: 0.8rem;
    color: var(--action-fg);
    letter-spacing: 0.05em;
  }

  .hotel-card .deadline {
    font-family: var(--mono-font);
    font-size: 0.75rem;
    color: var(--fg-tint);
    letter-spacing: 0.04em;
  }

  .hotel-card p {
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
  <title>Travel &amp; Hotels — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Getting to PGConf.dev 2027 in Montréal — flights, train, métro, and partner hotels."
  />
</svelte:head>

<nav class="breadcrumb restrict-1280" aria-label="Breadcrumb">
  <ol class="flex over" style:gap="0.5em">
    <li><a href="/">PGConf.dev 2027</a></li>
    <li><a href="/attend">Attend</a></li>
    <li>Travel &amp; Hotels</li>
  </ol>
</nav>

<header class="restrict-1280">
  <hgroup>
    <p class="action">Attend · Travel</p>
    <h1>Getting to Montréal.</h1>
  </hgroup>
  <p class="lede fg-mute">
    Montréal is well-connected by air and rail. The Palais des congrès is in the
    heart of downtown, directly on the métro.
  </p>
</header>

<article class="editorial restrict-1280">
  <nav class="section-nav" aria-label="Attend sections">
    <a href="/attend">Venue</a>
    <a href="/attend/travel" aria-current="page">Travel &amp; hotels</a>
    <a href="/attend/social">Social events</a>
    <a href="/attend/volunteer">Volunteer</a>
  </nav>

  <!-- By air -->
  <section>
    <hgroup>
      <p>§ 01 · By air</p>
      <h2>Montréal–Trudeau International Airport (YUL).</h2>
    </hgroup>

    <p class="lede">
      YUL is the main hub for Montréal, served by Air Canada, WestJet, Delta,
      United, Air France, and most major carriers.
    </p>

    <p>
      The best way to get from YUL to the Palais des congrès is by the
      <strong>747 Express bus</strong> to Lionel-Groulx station, then the Orange or
      Green line to Place-d'Armes — about 45 minutes total, no transfers required
      from the métro. Taxis and rideshare are readily available; typical fare is CAD
      $45–55.
    </p>
  </section>

  <div class="break-wide">
    <dl class="facts">
      <div>
        <dt class="over">747 bus</dt>
        <dd>
          YUL → Lionel-Groulx · 24/7 service · CAD $11 (STM pass accepted)
        </dd>
      </div>
      <div>
        <dt class="over">Métro</dt>
        <dd>Lionel-Groulx → Place-d'Armes · Orange line · 20 min</dd>
      </div>
      <div>
        <dt class="over">Taxi / rideshare</dt>
        <dd>~45 min from airport · CAD $45–55</dd>
      </div>
    </dl>
  </div>

  <!-- By train -->
  <section>
    <hgroup>
      <p>§ 02 · By train</p>
      <h2>VIA Rail and Amtrak.</h2>
    </hgroup>

    <p>
      Montréal's Gare Centrale is served by VIA Rail from Québec City, Ottawa,
      Toronto, and Halifax, and by Amtrak's <em>Adirondack</em> (New
      York–Montréal) and <em>Maple Leaf</em> connections. The station is connected
      underground to the Square-Victoria–OACI métro station (Orange line), two stops
      from Place-d'Armes.
    </p>
  </section>

  <!-- Visa -->
  <section id="visa">
    <hgroup>
      <p>§ 03 · Entry requirements</p>
      <h2>Visas and eTAs.</h2>
    </hgroup>

    <p>Entry requirements depend on your country of citizenship:</p>

    <ul>
      <li>
        <strong>U.S. citizens and permanent residents</strong> — entry is visa-free;
        a valid passport or NEXUS card is required.
      </li>
      <li>
        <strong>Citizens of visa-exempt countries</strong> — must apply for an
        <strong>Electronic Travel Authorization (eTA)</strong> before flying to Canada.
        An eTA is CAD $7 and typically approved in minutes, though processing can
        take several days in some cases.
      </li>
      <li>
        <strong>All other visitors</strong> — a temporary resident visa is required.
        Apply well in advance; processing times vary significantly.
      </li>
    </ul>

    <p>
      If you need a formal invitation letter for your visa application, email
      <a href="/about#contact">info@pgconf.dev</a> with your full name and country
      of citizenship.
    </p>
  </section>

  <div class="callout callout--notice">
    <h3 class="h6">Apply early</h3>
    <p>
      Visa and eTA processing can be slow, especially around major holidays.
      Apply at least 8 weeks before the conference if in doubt.
    </p>
  </div>

  <!-- Hotels -->
  <section id="hotels">
    <hgroup>
      <p>§ 04 · Hotels</p>
      <h2>Partner hotels for 2027.</h2>
    </hgroup>

    <p>
      We are negotiating rates at several downtown hotels within walking
      distance of the Palais des congrès. Partner hotels will be listed here
      once confirmed. Book early — May is peak conference season in Montréal.
    </p>
  </section>

  <div class="break-wide">
    <div class="hotel-grid">
      <div class="hotel-card">
        <h3>Hotel details to be confirmed</h3>
        <p class="price">Rate TBD</p>
        <p class="deadline">Booking deadline TBD</p>
        <p>Partner hotel details will be posted by March 2027.</p>
      </div>
      <div class="hotel-card">
        <h3>Hotel details to be confirmed</h3>
        <p class="price">Rate TBD</p>
        <p class="deadline">Booking deadline TBD</p>
        <p>Partner hotel details will be posted by March 2027.</p>
      </div>
      <div class="hotel-card">
        <h3>Hotel details to be confirmed</h3>
        <p class="price">Rate TBD</p>
        <p class="deadline">Booking deadline TBD</p>
        <p>Partner hotel details will be posted by March 2027.</p>
      </div>
    </div>
  </div>

  <div class="callout callout--info">
    <h3 class="h6">Book early</h3>
    <p>
      Montréal is a popular conference destination in spring. Even outside our
      partner hotels, downtown options book up quickly in May. We recommend
      confirming accommodation as soon as your registration is confirmed.
    </p>
  </div>
</article>
