<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../styles/all.css';
</script>

<Header />

<main id="main-content">
	<div class="landmark-content">
		<slot />
	</div>
</main>

<Footer />
