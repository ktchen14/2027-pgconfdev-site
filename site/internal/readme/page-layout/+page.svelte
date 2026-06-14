<script lang="ts">
  import { resolve } from "$app/paths";
  import Link from "$lib/Link";
  import T from "../T.svelte";
</script>

<style>
  /* Schematic of the three regions; not the real layout, just a picture. */
  .region-map {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 2.5fr 1fr;
    text-align: center;
  }

  .region-map > * {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: var(--gap) 0.5rem;
  }

  .region-map .faint {
    border-style: dashed;
    color: var(--fg-mute);
  }

  .demo {
    border: 1px dashed var(--border-bold);
    padding: var(--gap);
  }

  .demo > .cell {
    background-color: var(--action-bg-tint);
    border-radius: var(--radius);
    padding: 0.75em 1em;
    text-align: center;
  }

  /* Footprint pictures: a mini three-column page with the used cells filled. */
  .on,
  .off {
    block-size: 1.75rem;
    border-radius: 2px;
  }

  .on {
    background-color: var(--action-fg);
  }

  .off {
    border: 1px dashed var(--border);
  }
</style>

<svelte:head>
  <title>CSS utilities: page layout — PGConf.dev 2027</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<nav class=") note" aria-labelledby="on-this-page">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#regions">The three regions</a></li>
    <li><a class="li-number" href="#placements">A class is a placement</a></li>
    <li><a class="li-number" href="#workhorses">Two workhorses</a></li>
    <li><a class="li-number" href="#boxes">Spanning one sidebar</a></li>
    <li><a class="li-number" href="#sidebars">Sidebars</a></li>
    <li><a class="li-number" href="#fallback">Listing fallbacks</a></li>
    <li><a class="li-number" href="#columnar">columnar</a></li>
    <li><a class="li-number" href="#star-variant">The *: variant</a></li>
    <li><a class="li-number" href="#breakpoints">Breakpoint aliases</a></li>
  </ol>
</nav>

<hgroup class="main" style:margin-block-start="0">
  <p>Internal</p>
  <h1>CSS Utilities: Page layout</h1>
  <p>
    Place a top-level block in the centre column, in a sidebar, or spanning the
    whole page.
  </p>
</hgroup>

<p class="main">
  Every page on this site, this one included, is built from a handful of
  placement classes. They decide whether a block sits in the reading column,
  rides in a sidebar, or stretches across the page, and how it rearranges as the
  window grows and shrinks.
</p>

<section id="regions" class="main">
  <hgroup>
    <h2 class="section-number">The three regions</h2>
    <p>A centre column, with two sidebars that appear as the window widens.</p>
  </hgroup>

  <p>
    The <strong>main</strong> column is always there. A <strong>right</strong>
    sidebar appears once the window reaches 48rem, and a <strong>left</strong>
    one joins it at 64rem.
  </p>

  <div class="region-map note p">
    <div class="faint">
      Left<br /><small>≥ 64rem</small>
    </div>
    <div>
      Main<br /><small>always</small>
    </div>
    <div class="faint">
      Right<br /><small>≥ 48rem</small>
    </div>
  </div>

  <p>
    Because the left sidebar needs more room, the right one is always present
    whenever the left is, so there are only three states:
  </p>

  <ul>
    <li><strong>Main alone</strong> on a phone</li>
    <li><strong>Main and right</strong> on a tablet</li>
    <li><strong>All three</strong> on a desktop</li>
  </ul>

  <p class="note">
    You apply these classes to the direct children of a page's
    <code>&lt;main&gt;</code>.
  </p>
</section>

<section id="placements" class="main">
  <hgroup>
    <h2 class="section-number">A class is a placement</h2>
    <p>Name the run of regions a block should cover, as a single class.</p>
  </hgroup>

  <div class="region-map note p">
    <div><code class="size++">(</code><br /><small>left sidebar</small></div>
    <div><code class="size++">main</code><br /><small>centre</small></div>
    <div><code class="size++">)</code><br /><small>right sidebar</small></div>
  </div>

  <p>
    A placement class names a <strong>run</strong> of adjacent regions, with the brackets
    as its left and right ends. The six possible runs are every placement there is:
  </p>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <span class="on"></span>
      <span class="off column-span-2"></span>
      <span class="off"></span>
    </div>

    <figcaption>
      <T>(</T> &mdash; the left sidebar alone.
    </figcaption>
  </figure>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="off"></div>
      <div class="on column-span-2"></div>
      <div class="off"></div>
    </div>

    <figcaption style:text-align="center">
      <T>main</T> &mdash; the centre column alone.
    </figcaption>
  </figure>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="off"></div>
      <div class="off column-span-2"></div>
      <div class="on"></div>
    </div>

    <figcaption style:text-align="right">
      <T>)</T> &mdash; the right sidebar alone.
    </figcaption>
  </figure>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="on"></div>
      <div class="on column-span-2"></div>
      <div class="off"></div>
    </div>

    <figcaption>
      <T>(main</T> &mdash; left through main.
    </figcaption>
  </figure>

  <figure class="margin-gap">
    <div class="grid/4" style:gap="0.5rem">
      <div class="off"></div>
      <div class="on column-span-2"></div>
      <div class="on"></div>
    </div>

    <figcaption style:text-align="right">
      <T>main)</T> &mdash; main through right.
    </figcaption>
  </figure>

  <figure>
    <div class="grid/4" style:gap="0.5rem">
      <div class="on"></div>
      <div class="on column-span-2"></div>
      <div class="on"></div>
    </div>

    <figcaption style:text-align="center">
      <T>(main)</T> &mdash; all three.
    </figcaption>
  </figure>

  <p>
    A block fills the part of its run that <strong
      >exists at the current width</strong
    >, and no more. You never set widths or breakpoints yourself. Widen the
    window and a run can spread into a sidebar that has appeared; narrow it and
    the run gives up the columns that have gone.
  </p>

  <p>
    That single rule covers both ends. <code>(main)</code> is full width on a
    desktop and plain main on a phone, because its run keeps shrinking to what
    is left. A lone <code>)</code> shows from a tablet up and is simply absent on
    a phone, because its run is one region and that region isn't there.
  </p>

  <p class="note">
    You only ever write a single <code>(</code> and a single <code>)</code> on a block.
    A run has one left end and one right end, and even the fallback lists below keep
    to one of each, so two placements can never fight over the same sidebar. There
    is no more syntax than that.
  </p>
</section>

<section id="workhorses" class="main">
  <hgroup>
    <h2 class="section-number">Your two workhorses</h2>
    <p>
      <code>main</code> for the reading column, <code>(main)</code> for full width.
    </p>
  </hgroup>

  <p>Two of the six runs cover most of a page.</p>

  <p>
    <T>main</T> keeps a block in the centre reading column and leaves the sidebars
    free. Use it for body copy, article sections, anything text-heavy.
  </p>
</section>

<div class="main demo">
  <p class="over">class "main"</p>
  <h3 class="h4">A working conference for the people building Postgres</h3>
  <p>
    PGConf.dev was founded in 2024 to fill a specific gap: a yearly room where
    PostgreSQL contributors and the developers integrating Postgres into other
    systems could spend four days together, without the conference circuit's
    usual layer of polish.
  </p>
  <p style:margin-block-end="0">
    The format borrows from academic conferences: proposals are reviewed by a
    program committee, talks are technical, and a third of the schedule is
    unconference.
  </p>
</div>

<section class="main">
  <p>
    <T>(main)</T> is a box that spans the <em>whole</em> content area, soaking
    up the sidebars when they exist. Reach for it on headers, footers, heroes,
    and full-bleed sections. Both examples are live; widen past 64rem to watch
    <code>(main)</code> reach past <code>main</code> into the sidebar space.
  </p>
</section>

<div class="(main) demo">
  <p class="over" style:margin-block-start="0">class "(main)"</p>
  <div class="grid+12">
    <figure>
      <div class="action h2">~600</div>
      <figcaption class="over">Attendees</figcaption>
    </figure>
    <figure>
      <div class="action h2">3</div>
      <figcaption class="over">Parallel tracks</figcaption>
    </figure>
    <figure>
      <div class="action h2">42</div>
      <figcaption class="over">Talks &amp; tutorials</figcaption>
    </figure>
    <figure>
      <div class="action h2">4</div>
      <figcaption class="over">Days</figcaption>
    </figure>
  </div>
</div>

<section class="main">
  <p class="note">
    A <code>(main)</code> box is a single block by default. Put a grid inside it
    (for example <code>grid+16</code> or <code>grid/3@)</code>) when you want
    its contents laid out in cards or columns, exactly as the
    <Link href={resolve("/")}>landing page</Link> does for its sponsor and gallery
    sections.
  </p>
</section>

<section id="boxes" class="main">
  <hgroup>
    <h2 class="section-number">Spanning into one sidebar</h2>
    <p>
      <code>(main</code> and <code>main)</code> reach a box into just one side.
    </p>
  </hgroup>

  <p>
    Between plain <code>main</code> and the full-width <code>(main)</code> sit
    the two half-spans. <T>main)</T> runs from main through the right sidebar;
    <T>(main</T> runs from the left through main. Each is one block that widens to
    take in its sidebar where there is room and stays plain main where there isn't.
    Reach for them when a band should lean into one margin but not both.
  </p>
</section>

<div class="main) demo">
  <p class="over">class "main)"</p>
  <h3 class="h4">Call for proposals</h3>
  <p style:margin-block-end="0">
    Submit a talk, tutorial, or unconference topic by 14 February. This banner
    runs from main into the right sidebar, so on a desktop it reaches wider than
    the reading column.
  </p>
</div>

<div class="(main demo">
  <p class="over">class "(main"</p>
  <h3 class="h4">Sponsors</h3>
  <p style:margin-block-end="0">
    PGConf.dev is non-profit; sponsors cover the venue, A/V, and scholarships.
    The same band reaching the other way, from the left sidebar through main.
  </p>
</div>

<section id="sidebars" class="main">
  <hgroup>
    <h2 class="section-number">Sidebars: <code>(</code> and <code>)</code></h2>
    <p>Navigation and asides that ride alongside the main column.</p>
  </hgroup>

  <p>
    The single-region runs <T>(</T> and <T>)</T> are how you put a block beside your
    content rather than in it: an "On this page" table of contents, a section navigation,
    a pull-quote, an at-a-glance box.
  </p>
</section>

<aside class=") note border">
  <p class="over">On this page</p>
  <p style:margin-block="0">
    A <code>)</code> aside. It rides in the right sidebar from 48rem up and is hidden
    below it.
  </p>
</aside>

<aside class="( note border">
  <p class="over">Section nav</p>
  <p style:margin-block="0">
    A <code>(</code> aside. It appears in the left sidebar from 64rem up.
  </p>
</aside>

<section class="main">
  <p>
    Being a run of one region, a sidebar block shows up only where that sidebar
    exists and is absent otherwise, so nothing is needed to hide it on a phone.
    <code>)</code> appears from 48rem, <code>(</code> from 64rem.
  </p>

  <p>
    The usual companion is just <code>note</code>, for the muted, smaller
    sidebar styling. The CSS-Utilities list on the left of this page is placed
    with
    <code>(</code>; the "On this page" navs use <code>)</code>.
  </p>
</section>

<section id="fallback" class="main">
  <hgroup>
    <h2 class="section-number">Listing fallbacks</h2>
    <p>Give a block several placements; it takes the best one available.</p>
  </hgroup>

  <p>
    Everything so far has been one placement. Put a space between two of them
    and you have handed the block <strong>two placements</strong> to choose from:
    it renders in the best one available at the current width, re-choosing as the
    window changes.
  </p>

  <p>
    Since the space is what separates placements, it is the whole difference
    between spanning and choosing:
  </p>

  <table class="stripe">
    <thead>
      <tr><th>You write</th><th>You get</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><code>main)</code> <small>(no space)</small></td>
        <td>One placement: a run spanning main and the right sidebar at once</td
        >
      </tr>
      <tr>
        <td><code>main )</code> <small>(a space)</small></td>
        <td
          >Two placements, <code>main</code> and <code>)</code>: the block takes
          the right sidebar when it fits, else main</td
        >
      </tr>
    </tbody>
  </table>

  <p>
    That second one is the useful "at a glance" pattern: a summary that sits
    inline under the heading on a phone, then moves up into the right sidebar
    when there is room. The box here is a live <code>main )</code>.
  </p>
</section>

<aside class="main ) note area border">
  <p class="over">At a glance · <code>main )</code></p>
  <dl class="dedent" style:margin-block="0">
    <div class="p">
      <dt class="over">Dates</dt>
      <dd>18–21 May 2027</dd>
    </div>
    <div class="p">
      <dt class="over">Venue</dt>
      <dd>Palais des congrès de Montréal</dd>
    </div>
    <div class="p" style:margin-block="0">
      <dt class="over">Format</dt>
      <dd>Tutorial day, two talk days, an unconference day</dd>
    </div>
  </dl>
</aside>

<section class="main">
  <p>
    The same works on the left. <code>( main</code> chooses the left sidebar when
    it exists, else main, which makes a tidy margin note beside the text.
  </p>
</section>

<aside class="( main note border">
  <p class="over"><code>( main</code></p>
  <p style:margin-block="0">
    PGCon ran in Ottawa from 2007 to 2023, sixteen editions before PGConf.dev
    picked up the thread.
  </p>
</aside>

<section class="main">
  <p>
    List all three, <code>( main )</code>, for "left, else right, else main": it
    prefers the left sidebar, accepts the right when the left is gone, and drops
    inline on a phone.
  </p>
</section>

<aside class="( main ) note border">
  <p class="over"><code>( main )</code></p>
  <p style:margin-block="0">
    Left sidebar on a desktop, right sidebar on a tablet, inline on a phone.
  </p>
</aside>

<section class="main">
  <p class="note">
    When a layout looks wrong, check your spaces first: a stray space turns one
    spanning placement into two competing ones.
  </p>
</section>

<section id="columnar" class="main">
  <hgroup>
    <h2 class="section-number">
      Split a box into columns: <code>columnar</code>
    </h2>
    <p>Turn a spanning box's regions into real grid columns.</p>
  </hgroup>

  <p>
    A run across more than one region, like <code>(main)</code> or
    <code>main)</code>, is one continuous block by default. Add <T>columnar</T>
    and it becomes a grid with one column per region, so its children line up with
    main and the sidebars.
  </p>

  <p>
    Use it for a wide band whose pieces sit in distinct columns. The
    <Link href={resolve("/about")}>About page</Link> timeline does this with
    <code>(main main) columnar</code>: a fallback between the boxes
    <code>(main</code> and <code>main)</code>, so each row leans into the left
    sidebar on a desktop and the right one on a tablet, with the year in one
    column and its description in the other.
  </p>

  <p>
    The box below is a live <code>main) columnar</code>. From 48rem up it is two
    columns; narrower, the columns stack.
  </p>
</section>

<div class="main) columnar demo">
  <p class="cell">Main column</p>
  <p class="cell">Right column</p>
</div>

<section id="star-variant" class="main">
  <hgroup>
    <h2 class="section-number">Place a block's children: <code>*:</code></h2>
    <p>Lay out an article with asides beside it, in one wrapper.</p>
  </hgroup>

  <p>
    Prefix any placement with <code>*:</code> to apply it to a block's
    <em>children</em> instead of the block itself.
  </p>

  <p>
    <T>*:main</T> is the handy one. Wrap a section in it and every child lands in
    the main column; then drop a <code>(</code> or <code>)</code> on the asides
    you want pushed into a margin. The <Link href={resolve("/about")}
      >About page</Link
    > uses it to set a marginal note beside its history text:
  </p>

  <pre><code
      >{`<section class="*:main">
  <hgroup>...</hgroup>
  <aside class="( note">...</aside>  <!-- floats into the left margin -->
  <p>...</p>                          <!-- stays in main -->
</section>`}</code
    ></pre>

  <p>
    The section below does exactly that. Widen past 64rem to see the note slide
    out.
  </p>
</section>

<section class="*:main">
  <p>
    This paragraph sits in the main column because its parent section is
    <code>*:main</code>. The note beside it is a child with a <code>(</code> of
    its own, so on a wide screen it floats into the left sidebar. Because
    <code>*:main</code> also gives it main, it tucks back inline lower down
    instead of disappearing as a bare <code>(</code> would.
  </p>

  <aside class="( note border">
    <p class="over">Aside</p>
    <p style:margin-block="0">
      A <code>(</code> child of a <code>*:main</code> section.
    </p>
  </aside>

  <p>
    Without <code>*:main</code> you would have to write <code>main</code> on
    every paragraph and <code>div</code> in the section. The variant saves you the
    repetition.
  </p>
</section>

<section id="breakpoints" class="main">
  <hgroup>
    <h2 class="section-number">Matching other classes to the bands</h2>
    <p>Use <code>@)</code> and <code>@(</code> as breakpoint shorthands.</p>
  </hgroup>

  <p>
    Any responsive variant (see the <Link href="layout">Layout</Link> page) can be
    tied to the layout's own breakpoints. <code>@)</code> means "from 48rem",
    where the right sidebar appears; <code>@(</code> means "from 64rem", where the
    left one does.
  </p>

  <p>
    So <code>grid/3@)</code> becomes three columns exactly when the right sidebar
    arrives. Reaching for these instead of raw rem values keeps a block tied to the
    regions if the breakpoints ever move.
  </p>
</section>
