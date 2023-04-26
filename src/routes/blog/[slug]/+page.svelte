<script>
	export let data;
  const { title, published, content } = data;
</script>

<article>
	<h1>{title}</h1>
	<p>Published: {published}</p>
	<svelte:component this={content} />
</article>
