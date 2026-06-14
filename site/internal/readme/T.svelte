<script lang="ts">
  let { class: klass = undefined, children, ...rest } = $props();
</script>

<code class={["action", klass]} {...rest}>
  {@render children()}
</code>
