<script lang="ts">
  import T from "../T.svelte";
</script>

<svelte:head>
  <title>CSS utilities: page layout — PGConf.dev 2027</title>
  <meta name="robots" content="noindex" />
</svelte:head>

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

  /* Make the live demos legible: a labelled box with visible region cells. */
  .demo {
    outline: 1px dashed var(--border-bold);
    outline-offset: 0.25rem;
  }

  .demo > .cell {
    background-color: var(--action-bg-tint);
    border-radius: var(--radius);
    padding: 0.75em 1em;
    text-align: center;
  }

  /* Footprint pictures: a mini three-column page with the used cells filled. */
  .frame {
    display: grid;
    gap: 3px;
    grid-template-columns: 1fr 2.5fr 1fr;
  }

  .frame > span {
    block-size: 1.75rem;
    border-radius: 2px;
  }

  .frame > .on {
    background-color: var(--action-fg);
  }

  .frame > .off {
    border: 1px dashed var(--border);
  }
</style>

<nav class=") note" aria-labelledby="on-this-page">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#regions">The three regions</a></li>
    <li><a class="li-number" href="#placements">A class is a placement</a></li>
    <li><a class="li-number" href="#workhorses">Two workhorses</a></li>
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
    <h2 class="section-number">The page is up to three columns</h2>
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
    whenever the left is. So there are only three states: <strong>main alone</strong>
    (phone), <strong>main + right</strong> (tablet), and <strong>all three</strong>
    (desktop).
  </p>

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

  <p>
    Picture the regions in a row: <code>(</code> on the left, <code>main</code>
    in the middle, <code>)</code> on the right. A placement class names a
    <strong>run</strong> of adjacent regions, and the brackets are simply the
    left and right ends of that run.
  </p>

  <p>
    So <code>(main)</code> runs from the left bracket through main to the right
    one: all three. <code>(main</code> opens on the left and stops at main.
    <code>main)</code> covers main through the right. A lone <code>(</code>,
    <code>main</code>, or <code>)</code> is a run of one. Those are every
    placement there is:
  </p>

  <div class="grid+12">
    <figure>
      <div class="frame">
        <span class="on"></span><span class="off"></span><span class="off"></span>
      </div>
      <figcaption><code>(</code>: the left sidebar alone.</figcaption>
    </figure>

    <figure>
      <div class="frame">
        <span class="off"></span><span class="on"></span><span class="off"></span>
      </div>
      <figcaption><code>main</code>: the centre column alone.</figcaption>
    </figure>

    <figure>
      <div class="frame">
        <span class="off"></span><span class="off"></span><span class="on"></span>
      </div>
      <figcaption><code>)</code>: the right sidebar alone.</figcaption>
    </figure>

    <figure>
      <div class="frame">
        <span class="on"></span><span class="on"></span><span class="off"></span>
      </div>
      <figcaption><code>(main</code>: left through main.</figcaption>
    </figure>

    <figure>
      <div class="frame">
        <span class="off"></span><span class="on"></span><span class="on"></span>
      </div>
      <figcaption><code>main)</code>: main through right.</figcaption>
    </figure>

    <figure>
      <div class="frame">
        <span class="on"></span><span class="on"></span><span class="on"></span>
      </div>
      <figcaption><code>(main)</code>: all three.</figcaption>
    </figure>
  </div>

  <p>
    A block fills the part of its run that <strong>exists at the current
    width</strong>, and no more. You never set widths or breakpoints yourself.
    Widen the window and a run can spread into a sidebar that has appeared;
    narrow it and the run gives up the columns that have gone.
  </p>

  <p>
    That single rule covers both ends. <code>(main)</code> is full width on a
    desktop and plain main on a phone, because its run keeps shrinking to what
    is left. A lone <code>)</code> shows from a tablet up and is simply absent on
    a phone, because its run is one region and that region isn't there.
  </p>

  <p class="note">
    You only ever write a single <code>(</code> and a single <code>)</code> on a
    block. A run has one left end and one right end, and even the fallback lists
    below keep to one of each, so two placements can never fight over the same
    sidebar. There is no more syntax than that.
  </p>
</section>

<section id="workhorses" class="main">
  <hgroup>
    <h2 class="section-number">Your two workhorses</h2>
    <p><code>main</code> for the reading column, <code>(main)</code> for full width.</p>
  </hgroup>

  <p>Two of the six runs cover most of a page.</p>

  <p>
    <T>main</T> keeps a block in the centre reading column and leaves the
    sidebars free. Use it for body copy, article sections, anything text-heavy.
  </p>

  <p>
    <T>(main)</T> is a box that spans the <em>whole</em> content area, soaking up
    the sidebars when they exist. Reach for it on headers, footers, heroes, and
    full-bleed sections.
  </p>

  <p>
    The two boxes below are live and styled so you can see their edges. Widen the
    window past 64rem and watch <code>(main)</code> stretch out past
    <code>main</code> into the sidebar space on both sides.
  </p>
</section>

<p class="main demo cell">main: the centre reading column</p>

<p class="(main) demo cell">(main): spans every column that exists</p>

<section class="main">
  <p class="note">
    A <code>(main)</code> box is a single block by default. Put a grid inside it
    (for example <code>grid+16</code> or <code>grid/3@)</code>) when you want its
    contents laid out in cards or columns, exactly as the
    <a href="/">landing page</a> does for its sponsor and gallery sections.
  </p>
</section>

<section id="sidebars" class="main">
  <hgroup>
    <h2 class="section-number">Sidebars: <code>(</code> and <code>)</code></h2>
    <p>Navigation and asides that ride alongside the main column.</p>
  </hgroup>

  <p>
    The single-region runs <T>(</T> and <T>)</T> are how you put a block beside
    your content rather than in it: an "On this page" table of contents, a
    section navigation, a pull-quote, an at-a-glance box.
  </p>

  <p>
    Being a run of one region, a sidebar block shows up only where that sidebar
    exists and is absent otherwise, so nothing is needed to hide it on a phone.
    <code>)</code> appears from 48rem, <code>(</code> from 64rem.
  </p>

  <p>
    The usual companion is just <code>note</code>, for the muted, smaller sidebar
    styling. The CSS-Utilities list on the left of this page is placed with
    <code>(</code>; the "On this page" navs use <code>)</code>.
  </p>
</section>

<aside class=") note border">
  <p class="over">On this page</p>
  <p style:margin-block="0">
    A <code>)</code> aside. It rides in the right sidebar from 48rem up and is
    hidden below it.
  </p>
</aside>

<aside class="( note border">
  <p class="over">Section nav</p>
  <p style:margin-block="0">
    A <code>(</code> aside. It appears in the left sidebar from 64rem up.
  </p>
</aside>

<section id="fallback" class="main">
  <hgroup>
    <h2 class="section-number">Listing fallbacks</h2>
    <p>Give a block several placements; it takes the best one available.</p>
  </hgroup>

  <p>
    Everything so far has been one placement. Put a space between two of them and
    you have handed the block <strong>two placements</strong> to choose from: it
    renders in the best one available at the current width, re-choosing as the
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
        <td>One placement: a run spanning main and the right sidebar at once</td>
      </tr>
      <tr>
        <td><code>main )</code> <small>(a space)</small></td>
        <td>Two placements, <code>main</code> and <code>)</code>: the block takes the right sidebar when it fits, else main</td>
      </tr>
    </tbody>
  </table>

  <p>
    That second one is the useful "at a glance" pattern: a summary that sits
    inline under the heading on a phone, then moves up into the right sidebar
    when there is room. The box below is a live <code>main )</code>; resize to
    watch it move.
  </p>
</section>

<aside class="main ) note area border">
  <p class="over">At a glance</p>
  <p style:margin-block="0">
    <code>main )</code>: inline here on a narrow screen, up in the right sidebar
    on a wide one.
  </p>
</aside>

<section class="main">
  <p>
    The same works on the left: <code>( main</code> chooses the left sidebar when
    it exists, else main. List all three, <code>( main )</code>, for "left, else
    right, else main".
  </p>

  <p class="note">
    When a layout looks wrong, check your spaces first: a stray space turns one
    spanning placement into two competing ones.
  </p>
</section>

<section id="columnar" class="main">
  <hgroup>
    <h2 class="section-number">Split a box into columns: <code>columnar</code></h2>
    <p>Turn a spanning box's regions into real grid columns.</p>
  </hgroup>

  <p>
    A run across more than one region, like <code>(main)</code> or
    <code>main)</code>, is one continuous block by default. Add <T>columnar</T>
    and it becomes a grid with one column per region, so its children line up
    with main and the sidebars.
  </p>

  <p>
    Use it for a wide band whose pieces sit in distinct columns, like the
    timeline on the <a href="/about">About page</a>: a <code>main) columnar</code>
    with a year in the right column and its description in main.
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
    you want pushed into a margin. The <a href="/about">About page</a> uses it to
    set a marginal note beside its history text:
  </p>

  <pre><code>{`<section class="*:main">
  <hgroup>...</hgroup>
  <aside class="( note">...</aside>  <!-- floats into the left margin -->
  <p>...</p>                          <!-- stays in main -->
</section>`}</code></pre>

  <p>The section below does exactly that. Widen past 64rem to see the note slide out.</p>
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
    <p style:margin-block="0">A <code>(</code> child of a <code>*:main</code> section.</p>
  </aside>

  <p>
    Without <code>*:main</code> you would have to write <code>main</code> on
    every paragraph and <code>div</code> in the section. The variant saves you
    the repetition.
  </p>
</section>

<section id="breakpoints" class="main">
  <hgroup>
    <h2 class="section-number">Matching other classes to the bands</h2>
    <p>Use <code>@)</code> and <code>@(</code> as breakpoint shorthands.</p>
  </hgroup>

  <p>
    Any responsive variant (see the <a href="../layout">Layout</a> page) can be
    tied to the layout's own breakpoints. <code>@)</code> means "from 48rem",
    where the right sidebar appears; <code>@(</code> means "from 64rem", where
    the left one does.
  </p>

  <p>
    So <code>grid/3@)</code> becomes three columns exactly when the right sidebar
    arrives. Reaching for these instead of raw rem values keeps a block tied to
    the regions if the breakpoints ever move.
  </p>
</section>
