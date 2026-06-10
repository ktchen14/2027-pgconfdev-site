<script lang="ts">
  let { code }: { code: string } = $props();
</script>

<figure class="demo">
  <div class="result">{@html code}</div>
  <pre class="source area"><code>{code.trim()}</code></pre>
</figure>

<style>
  .demo {
    border-radius: var(--radius);
    border: 1px solid var(--border);
    margin-inline: 0;
  }

  .result {
    padding: var(--gap);
  }

  .source {
    padding: 1rem var(--gap);
  }
</style>
