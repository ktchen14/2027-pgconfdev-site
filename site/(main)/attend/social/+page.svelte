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

  /* Photo placeholder — drop in real photography later. */
  .photo {
    align-items: center;
    aspect-ratio: 3 / 2;
    color: var(--fg-tint);
    display: flex;
    font-family: var(--mono-font);
    font-size: 0.75rem;
    justify-content: center;
    letter-spacing: 0.05em;
    text-align: center;
    text-transform: uppercase;
  }

  .photo--wide {
    aspect-ratio: 16 / 7;
  }
</style>

<svelte:head>
  <title>Social Events — PGConf.dev 2027</title>
  <meta
    name="description"
    content="Social events at PGConf.dev 2027 — welcome breakfast, group run, reception, community dinner, and the conference pub."
  />
</svelte:head>

<nav class="(main)" aria-label="Breadcrumb">
  <ol class="iconic over" style:gap="1em">
    <li aria-hidden="true">/</li>
    <li><a href={resolve("/attend")}>Attend</a></li>
    <li aria-hidden="true">/</li>
    <li><a href="/">Social events</a></li>
  </ol>
</nav>

<header class="(main)">
  <hgroup>
    <p class="action-text">Attend · Social</p>
    <h1>Social events.</h1>
  </hgroup>

  <p class="lede mute text">
    PGConf.dev's hallway track is as valuable as the scheduled program. These
    events are how the contributor community actually connects — don't skip
    them.
  </p>

  <figure class="section">
    <div class="photo photo--wide border">
      [ Photo · reception · past edition ]
    </div>
    <figcaption>
      Fig. — The hallway track in full swing at a recent edition. Replace with a
      real photograph.
    </figcaption>
  </figure>
</header>

<hr class="section" />

<nav class="section-nav ( none@-64 note" aria-labelledby="attend-nav">
  <h2 id="attend-nav" class="over">Attend</h2>
  <ul>
    <li><a href={resolve("/attend")}>Venue</a></li>
    <li><a href={resolve("/attend/travel")}>Travel &amp; hotels</a></li>
    <li>
      <a href={resolve("/attend/social")} aria-current="page">Social events</a>
    </li>
    <li><a href={resolve("/attend/volunteer")}>Volunteer</a></li>
  </ul>
</nav>

<nav aria-labelledby="on-this-page" class=") none@-48 note">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#evenings">The big evenings</a></li>
    <li><a class="li-number" href="#week">Around the week</a></li>
  </ol>
</nav>

<section id="evenings">
  <hgroup class="main">
    <p class="section-number">The big evenings</p>
    <h2>Two nights worth clearing your calendar for.</h2>
  </hgroup>

  <aside class=") note">
    <h3 class="over">Details &amp; signup</h3>
    <p>
      Venues and signup links for 2027 go up closer to the conference; the
      events here are modeled on 2026 and may change. Signup for the dinner and
      Meet &amp; Eat opens with early-bird registration — watch the mailing list
      and the conference Discord.
    </p>
  </aside>

  <div class="grid+16 (main)">
    <figure id="reception">
      <div class="photo border">[ Photo · evening reception ]</div>
      <figcaption class="note">
        <hgroup>
          <p>Wednesday · 18:00 · Near conference</p>
          <h3 class="h4">Evening Reception</h3>
        </hgroup>
        <p>
          Appetizers and two complimentary drinks included with your
          registration. A chance to decompress after day one of talks. Bring
          your badge; additional drinks available for purchase.
        </p>
      </figcaption>
    </figure>

    <figure id="dinner">
      <div class="photo border">[ Photo · community dinner ]</div>
      <figcaption class="note">
        <hgroup>
          <p>Thursday · 19:30 · Old Montréal</p>
          <h3 class="h4">Community Dinner</h3>
        </hgroup>
        <p>
          The traditional conference dinner at a venue in Old Montréal. Separate
          signup required and subsidized by sponsorship; limited to 250 seats.
          Signup opens with early-bird registration.
        </p>
      </figcaption>
    </figure>
  </div>
</section>

<section id="week">
  <hgroup class="main">
    <p class="section-number">Around the week</p>
    <h2>Smaller ways to meet people.</h2>
  </hgroup>

  <div class="grid+12 (main)">
    <figure id="breakfast">
      <div class="photo border">[ Photo · welcome breakfast ]</div>
      <figcaption class="note">
        <hgroup>
          <p>Tuesday · 07:30 · Registration</p>
          <h3 class="h5">Newcomer Welcome Breakfast</h3>
        </hgroup>
        <p>
          Meet other newcomers alongside experienced community members before
          the day starts. No signup — just show up for coffee and pastries.
        </p>
      </figcaption>
    </figure>

    <figure id="run">
      <div class="photo border">[ Photo · social run ]</div>
      <figcaption class="note">
        <hgroup>
          <p>Tuesday · 17:30 · Main entrance</p>
          <h3 class="h5">Social Run</h3>
        </hgroup>
        <p>
          A recreational 5–10 km run through Montréal and along the waterfront.
          Multiple pace groups. Running shoes required; bring your badge.
        </p>
      </figcaption>
    </figure>

    <figure id="pub">
      <div class="photo border">[ Photo · hallway pub ]</div>
      <figcaption class="note">
        <hgroup>
          <p>Evenings · all week · Near conference</p>
          <h3 class="h5">Hallway Pub</h3>
        </hgroup>
        <p>
          An informal after-hours spot near the venue. No signup, no agenda —
          just the conversations from the day, continued. Venue announced at
          registration.
        </p>
      </figcaption>
    </figure>

    <figure>
      <div class="photo border">[ Photo · small-group dinner ]</div>
      <figcaption class="note">
        <hgroup>
          <p>Tue &amp; Thu · Various restaurants</p>
          <h3 class="h5">Meet &amp; Eat</h3>
        </hgroup>
        <p>
          Self-organized dinners in groups of 8. Sign up at registration, get a
          group and a restaurant, meet at the desk at 17:00. Self-pay — a real
          conversation with people you've only known by email.
        </p>
      </figcaption>
    </figure>
  </div>
</section>
