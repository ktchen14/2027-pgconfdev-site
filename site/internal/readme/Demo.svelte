<script lang="ts">
  let { code }: { code: string } = $props();
</script>

<figure class="demo">
  <div class="result">{@html code}</div>
  <pre class="source"><code>{code.trim()}</code></pre>
</figure>

<style>
  .demo {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    margin-inline: 0;
    overflow: hidden;
  }

  .result {
    margin-block: 0;
    padding: var(--gap);
  }

  .source {
    background-color: var(--bg-tint);
    margin-block: 0;
    padding: 1rem var(--gap);
  }
</style>
