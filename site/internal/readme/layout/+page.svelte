<script lang="ts">
  import Rule from "$lib/Rule.svelte";
  import Demo from "../Demo.svelte";
  import T from "../T.svelte";
</script>

<svelte:head>
  <title>CSS utilities: layout — PGConf.dev 2027</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<nav class=") note" aria-labelledby="on-this-page">
  <h2 id="on-this-page" class="over">On this page</h2>
  <ol>
    <li><a class="li-number" href="#rule">Rule</a></li>
    <li><a class="li-number" href="#counters">Counters</a></li>
    <li><a class="li-number" href="#layout">Layout</a></li>
    <li><a class="li-number" href="#dedent">Dedent</a></li>
  </ol>
</nav>

<hgroup class="main" style:margin-block-start="0">
  <p>Internal</p>
  <h1>CSS Utilities: Layout</h1>
  <p>
    Counters, the grid and flex layout system, and the page-layout classes.
    Every reusable class, with the result on top and the markup below.
  </p>
</hgroup>

<section id="rule" class="main">
  <hgroup>
    <h2 class="section-number">Rule</h2>
    <p>Divide sections with a horizontal rule.</p>
  </hgroup>

  <p>
    Use a plain <code>&lt;hr&gt;</code> for an unlabeled divider between
    sections. <T>Rule</T> is a Svelte component for the less common case where the
    divider needs a visible label.
  </p>

  <Demo source={`<hr />`} />

  <Demo
    source={`
import Rule from "$lib/Rule.svelte";

<Rule>Schedule</Rule>`}
  >
    <Rule>Schedule</Rule>
  </Demo>
</section>

<section id="counters" class="main">
  <hgroup>
    <h2 class="section-number">Counters</h2>
    <p>Automatically number sections and list items.</p>
  </hgroup>

  <p>
    <T>.section-number</T> prepends a section counter to an element in the form
    <code>§ 01 ·</code>. Each use increments automatically, so sections number
    themselves. Use it on the label paragraph inside an
    <code>&lt;hgroup&gt;</code>.
  </p>

  <Demo
    source={`
<hgroup>
<p class="section-number">Introduction</p>
<h2>Getting started</h2>
</hgroup>

<hgroup>
<p class="section-number">Background</p>
<h2>How it works</h2>
</hgroup>`}
    style="counter-reset: section"
  />

  <p>
    <T>.li-number</T> prepends the list item's ordinal in monospace. Use it on navigation
    lists where the number should appear inside the link rather than outside it.
  </p>

  <Demo
    source={`
<nav>
  <ol>
    <li>
      <a class="li-number" href="#">Introduction</a>
    </li>
    <li>
      <a class="li-number" href="#">Background</a>
    </li>
    <li>
      <a class="li-number" href="#">Getting started</a>
    </li>
  </ol>
</nav>`}
  />
</section>

<section id="layout" class="main">
  <hgroup>
    <h2 class="section-number">Layout</h2>
    <p>Flex and grid containers, with responsive variants.</p>
  </hgroup>

  <p>
    All layout classes zero out the block margins of their direct children,
    since <code>gap</code> handles the spacing between items.
  </p>

  <h3>None</h3>

  <p>
    <T>none</T> hides an element (with <code>display: none</code>). Its main use
    is with a <a href="#layout-responsive-variants">responsive variant</a> to show
    or hide content at specific viewport widths.
  </p>

  <h3>Flex</h3>

  <p>
    <T>flex</T> lays out children horizontally (in a flexbox), wrapping as needed.
    Use it for a row of buttons, badges, or other inline-sized elements.
  </p>

  <Demo
    source={`
<div class="flex">
  <button>Speakers</button>
  <button>Schedule</button>
  <button>Venue</button>
  <button>Workshops</button>
</div>`}
  />

  <h3>Grid</h3>

  <p>
    <T>grid+N</T> arranges children in a grid, with columns at least
    <code>N</code> rem wide, fitting as many as possible before wrapping. Use it for
    card grids where the number of columns should adapt to the available space.
  </p>

  <Demo
    source={`
<div class="grid+8">
  <p class="area">Speaker A</p>
  <p class="area">Speaker B</p>
  <p class="area">Speaker C</p>
  <p class="area">Speaker D</p>
</div>`}
  />

  <p>
    <T>grid/N</T> divides children into exactly <code>N</code> equal columns. Use
    it for a fixed column layout.
  </p>

  <Demo
    source={`
<div class="grid/3">
  <p class="area">Column 1</p>
  <p class="area">Column 2</p>
  <p class="area">Column 3</p>
</div>`}
  />

  <p>
    <T>subgrid</T> lets a spanning grid item's children align with the outer grid's
    column tracks. In the example below, the two children inside the spanning item
    line up with the items in the row above.
  </p>

  <Demo
    source={`
<div class="grid/3">
  <p class="area">Alpha</p>
  <p class="area">Beta</p>
  <p class="area">Gamma</p>
  <div class="subgrid column-span-2">
    <p class="area">Aligns with Alpha</p>
    <p class="area">Aligns with Beta</p>
  </div>
  <p class="area">Gamma</p>
</div>`}
  />

  <h3>Column placement</h3>

  <p>
    <T>column-N</T> positions a grid item in column <code>N</code>.
    <T>column-span-N</T> stretches a grid item across <code>N</code> columns.
  </p>

  <Demo
    source={`
<div class="grid/3">
  <p class="area">Column 1</p>
  <p class="area">Column 2</p>
  <p class="area column-1">Forced to column 1</p>
  <p class="area column-span-2">Spans columns 1–2</p>
  <p class="area">Column 3</p>
</div>`}
  />

  <h3 id="layout-responsive-variants">Responsive variants</h3>

  <p>
    Any layout class (and <T>none</T>) can be scoped to a viewport width range
    by appending <code>@min-max</code>. <code>min</code> and <code>max</code>
    are rem values; either can be omitted.
  </p>

  <Demo
    source={`
<!-- Resize viewport to ≥ 48rem to view -->
<p class="none@-48">
  Visible at 48rem and above
</p>

<!-- Side by side when viewport is ≥ 48rem -->
<div class="flex@48-">
  <p class="area">Speakers</p>
  <p class="area">Schedule</p>
  <p class="area">Venue</p>
</div>`}
  />
</section>

<section id="dedent" class="main">
  <hgroup>
    <h2 class="section-number">Dedent</h2>
    <p>Remove list indentation for flex and grid layouts.</p>
  </hgroup>

  <p>
    <T>.dedent</T> removes the markers and start padding from a list. Its main use
    is when you want to lay out list items with <T>flex</T> or <T>grid</T>
    while keeping their list semantics intact.
  </p>

  <Demo
    source={`
<ul class="flex dedent">
  <li><button>Speakers</button></li>
  <li><button>Schedule</button></li>
  <li><button>Venue</button></li>
  <li><button>Workshops</button></li>
</ul>`}
  />

  <p>
    On a <code>&lt;dd&gt;</code> or parent <code>&lt;dl&gt;</code>, it removes
    the start indent from definition values — useful when laying out a
    <code>&lt;dl&gt;</code> in a grid.
  </p>

  <Demo
    source={`
<dl class="grid+12 dedent">
  <div>
    <dt class="over">Date</dt>
    <dd>May 11–14, 2027</dd>
  </div>

  <div>
    <dt class="over">Location</dt>
    <dd>Montréal, QC</dd>
  </div>

  <div>
    <dt class="over">Format</dt>
    <dd>3+ tracks × 4 days</dd>
  </div>
</dl>`}
  />
</section>
