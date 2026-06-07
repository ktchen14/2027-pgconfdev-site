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

  /* Sponsor tiers */
  .tier {
    margin-block: var(--margin);
  }

  .tier__header {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    border-bottom: 1px solid var(--border);
    padding-bottom: 0.75rem;
    margin-bottom: var(--margin);
  }

  .tier__name {
    font-family: var(--header-font);
    font-size: var(--h2-size);
    font-weight: 500;
    margin: 0;
  }

  .tier__price {
    font-family: var(--mono-font);
    font-size: 0.875rem;
    color: var(--fg-tint);
    letter-spacing: 0.05em;
  }

  .tier--platinum .tier__header {
    border-bottom-color: var(--action-fg);
  }
  .tier--gold .tier__header {
    border-bottom-color: oklch(0.75 0.14 80);
  }
  .tier--silver .tier__header {
    border-bottom-color: oklch(0.65 0.02 245);
  }
  .tier--bronze .tier__header {
    border-bottom-color: oklch(0.6 0.08 50);
  }

  .sponsor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  .sponsor-card {
    border: 1px solid var(--border);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .sponsor-card__logo {
    aspect-ratio: 3 / 1;
    background: var(--bg-tint);
    border: 1px dashed var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--mono-font);
    font-size: 0.75rem;
    color: var(--fg-tint);
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .sponsor-card__name {
    font-family: var(--header-font);
    font-weight: 500;
    font-size: 1.125rem;
    margin: 0;
  }

  .sponsor-card__bio {
    font-size: 0.875rem;
    color: var(--fg-mute);
    margin: 0;
  }

  /* Benefits table */
  .benefits {
    width: 100%;
    font-size: 0.875rem;
  }

  .benefits th {
    font-family: var(--mono-font);
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--fg-tint);
    text-align: left;
    padding: 0.5rem 0.75rem;
  }

  .benefits td {
    padding: 0.5rem 0.75rem;
    color: var(--fg-mute);
  }

  .benefits .check {
    color: var(--insert-fg);
    font-weight: 600;
  }

  .benefits .dash {
    color: var(--fg-tint);
  }
</style>

<svelte:head>
  <title>Sponsors — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Sponsor PGConf.dev 2027. The companies underwriting the annual PostgreSQL Developer Conference."
  />
</svelte:head>

<nav class="breadcrumb restrict-1280" aria-label="Breadcrumb">
  <ol class="flex over" style:gap="0.5em">
    <li><a href="/">PGConf.dev 2027</a></li>
    <li>Sponsors</li>
  </ol>
</nav>

<header class="restrict-1280">
  <hgroup>
    <p>Sponsors</p>
    <h1>The companies underwriting 2027.</h1>
  </hgroup>
  <p class="lede fg-mute">
    PGConf.dev is non-profit. Sponsors cover the venue, A/V, catering,
    scholarships, and the parts of the program that ticket revenue alone can't.
  </p>
</header>

<article class="editorial restrict-1280">
  <div class="callout callout--info">
    <h3 class="h6">Sponsorships are open</h3>
    <p>
      We are actively seeking sponsors for the 2027 edition. See the tiers below
      or <a href="/about#contact">contact the sponsorship team</a> for a full prospectus.
    </p>
  </div>

  <!-- 2027 sponsors — placeholder until confirmed -->
  <section>
    <hgroup>
      <p>2027 sponsors</p>
      <h2>Confirmed sponsors will appear here.</h2>
    </hgroup>
    <p class="fg-mute">
      Announcements will be made as sponsorships are confirmed. Check back or
      subscribe to the mailing list for updates.
    </p>
  </section>

  <!-- Become a sponsor -->
  <section id="become">
    <hgroup>
      <p>§ 01 · Become a sponsor</p>
      <h2>Why sponsor PGConf.dev?</h2>
    </hgroup>

    <p class="lede">
      PGConf.dev puts your company in front of the engineers who build,
      maintain, and extend PostgreSQL — not just use it.
    </p>

    <p>
      The audience is different from general PostgreSQL conferences. The
      majority of attendees are committers, patch authors, extension
      maintainers, and database infrastructure engineers from companies shipping
      Postgres at scale. If your company's products or services reach this
      audience, sponsoring PGConf.dev is the most direct way to do it.
    </p>

    <p>
      Sponsorship funds directly cover: venue costs, A/V production, catering,
      the scholarship program (travel grants for contributors who couldn't
      otherwise attend), and speaker travel support.
    </p>
  </section>

  <!-- Tiers -->
  <section>
    <hgroup>
      <p>§ 02 · Sponsorship tiers</p>
      <h2>Four levels of support.</h2>
    </hgroup>
    <p class="fg-mute">
      Pricing in Canadian dollars. Contact us for the full prospectus with
      detailed benefit descriptions.
    </p>
  </section>

  <div class="break-wide">
    <div class="tier tier--platinum">
      <div class="tier__header">
        <h3 class="tier__name">Platinum</h3>
        <span class="tier__price">CAD $25,000</span>
      </div>
      <p class="fg-mute">
        Prominent logo placement throughout the venue and website, speaking
        opportunity at the opening session, two complimentary registrations,
        dedicated table in the sponsor area.
      </p>
    </div>

    <div class="tier tier--gold">
      <div class="tier__header">
        <h3 class="tier__name">Gold</h3>
        <span class="tier__price">CAD $15,000</span>
      </div>
      <p class="fg-mute">
        Logo on website, printed program, and sponsor banner. Two complimentary
        registrations. Table in the sponsor area.
      </p>
    </div>

    <div class="tier tier--silver">
      <div class="tier__header">
        <h3 class="tier__name">Silver</h3>
        <span class="tier__price">CAD $7,500</span>
      </div>
      <p class="fg-mute">
        Logo on website and printed program. One complimentary registration.
        Shared sponsor table.
      </p>
    </div>

    <div class="tier tier--bronze">
      <div class="tier__header">
        <h3 class="tier__name">Bronze</h3>
        <span class="tier__price">CAD $3,000</span>
      </div>
      <p class="fg-mute">Logo on website. One complimentary registration.</p>
    </div>
  </div>

  <p class="fg-mute" style="font-size: 0.875rem">
    Custom arrangements are possible — contact us to discuss. All sponsors are
    listed in the printed program, website, and social media announcements.
    Benefits are fulfilled based on the tier at time of contract.
  </p>

  <div style="padding-block: var(--margin)">
    <a href="/about#contact" class="button circle"
      >Contact the sponsorship team</a
    >
  </div>
</article>

<!-- Registration CTA band -->
<section
  style:background-color="var(--action)"
  style:color="var(--bg)"
  style:padding-block="var(--margin)"
  class="restrict-1280"
>
  <hgroup>
    <p style:color="var(--bg)">Past editions</p>
    <h2 class="h1" style:color="var(--bg)" style:max-width="38rem">
      Thank you to our 2026 sponsors.
    </h2>
  </hgroup>
  <p
    style="
      font-family: var(--mono-font);
      font-size: 0.875rem;
      letter-spacing: 0.05em;
      opacity: 0.85;
    "
  >
    EDB · Microsoft · AWS · Huawei · Databricks · Percona · Fujitsu · HighGo ·
    pganalyze · Supabase · SRA OSS · Snowflake · CYBERTEC · Xata
  </p>
</section>
