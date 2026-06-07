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

  .callout {
    border-radius: var(--radius);
    padding: 1.5rem;
  }

  .callout--notice {
    background: var(--notice-bg-mute);
    border-inline-start: 3px solid var(--notice-fg);
  }

  .callout--negative {
    background: var(--delete-bg-mute);
    border-inline-start: 3px solid var(--delete-fg);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .contact-card {
    padding: 1.25rem;
    background: var(--bg-tint);
    border: 1px solid var(--border);
  }

  .contact-card h3 {
    font-family: var(--header-font);
    font-size: 1.125rem;
    margin-block: 0 0.25rem;
  }

  .contact-card p {
    margin: 0;
    color: var(--fg-mute);
    font-size: 0.875rem;
  }

  .contact-card a {
    font-family: var(--mono-font);
    font-size: 0.875rem;
    display: inline-block;
    margin-top: 0.5rem;
  }
</style>

<svelte:head>
  <title>Code of Conduct — PGConf.dev 2027</title>
  <meta
    name="description"
    content="PGConf.dev 2027 Code of Conduct — our commitment to a safe, inclusive conference for everyone."
  />
</svelte:head>

<nav class="breadcrumb restrict-1280" aria-label="Breadcrumb">
  <ol class="flex over" style:gap="0.5em">
    <li><a href="/">PGConf.dev 2027</a></li>
    <li>Code of Conduct</li>
  </ol>
</nav>

<header class="restrict-1280">
  <hgroup>
    <p>About</p>
    <h1>Code of Conduct.</h1>
  </hgroup>
  <p class="lede fg-mute">
    PGConf.dev is dedicated to providing a harassment-free conference experience
    for everyone, regardless of gender, sexual orientation, disability, physical
    appearance, body size, race, or religion.
  </p>
</header>

<article class="editorial restrict-1280">
  <section>
    <h2>Our commitment.</h2>

    <p class="lede">
      We do not tolerate harassment of conference participants in any form.
      Conference participants violating these rules may be sanctioned or
      expelled from the conference at the discretion of the conference
      organizers.
    </p>

    <p>
      Harassment includes offensive verbal comments related to gender, sexual
      orientation, disability, physical appearance, body size, race, religion,
      sexual images in public spaces, deliberate intimidation, stalking,
      following, harassing photography or recording, sustained disruption of
      talks or other events, inappropriate physical contact, and unwelcome
      sexual attention.
    </p>

    <p>
      Participants asked to stop any harassing behavior are expected to comply
      immediately.
    </p>
  </section>

  <section>
    <h2>Photography.</h2>

    <p>
      Attendees who do not wish to be photographed should wear a
      <strong>red lanyard</strong>, which will be available at the registration
      desk. Photographers — volunteers, press, and attendees alike — must not
      photograph anyone wearing a red lanyard.
    </p>

    <p>
      If you are uncertain whether someone consents to being photographed, do
      not photograph them.
    </p>
  </section>

  <section>
    <h2>Exhibitors and sponsors.</h2>

    <p>
      Exhibitors in the sponsor hall and similar spaces are also subject to this
      policy. In particular, exhibitors should not use sexualized images,
      activities, or other material. Booth staff should not use sexualized
      clothing, uniforms, or costumes.
    </p>
  </section>

  <section>
    <h2>Reporting.</h2>

    <p>
      If you are being harassed, notice that someone else is being harassed, or
      have any other concerns, please contact a member of conference staff
      immediately. Conference staff can be identified by their staff badge.
    </p>

    <p>
      You may also report incidents confidentially to the Code of Conduct
      committee at the address below. Reports to this address are seen only by
      the CoC committee — not by the general organizing committee.
    </p>
  </section>

  <div class="contact-grid">
    <div class="contact-card">
      <h3>Code of Conduct committee</h3>
      <p>Confidential. Monitored by the CoC committee only.</p>
      <a href="#">conduct@pgconf.dev</a>
    </div>
    <div class="contact-card">
      <h3>On-site staff</h3>
      <p>Identify any staff member at the registration desk or venue.</p>
      <p
        style="margin-top: 0.5rem; font-family: var(--mono-font); font-size: 0.875rem;"
      >
        Staff badge · blue lanyard
      </p>
    </div>
  </div>

  <section>
    <h2>Consequences.</h2>

    <p>
      If a participant engages in harassing behavior, the conference organizers
      may take any action they deem appropriate, including warning the offender
      or expulsion from the conference with no refund.
    </p>

    <p>
      We expect participants to follow these rules at all conference venues and
      conference-related social events.
    </p>
  </section>

  <div class="callout callout--notice">
    <h3 class="h6">Enforcement</h3>
    <p>
      The CoC committee is independent of the organizing committee. Reports are
      handled confidentially. The committee will acknowledge receipt of every
      report within 24 hours.
    </p>
  </div>
</article>
