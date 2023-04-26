<script lang="ts">
	import siteData from '../../data/site.json';
	const site = siteData[0];
	const navItems = [
		{
			url: '/',
			label: 'Home'
		},
		{
			url: '/blog/',
			label: 'Blog'
		},
		{
			url: '/about/',
			label: 'About'
		}
	];
</script>

<header id="header">
	<div class="landmark-content header-content">
		<h1 class="main-title">
			<a href="/" aria-label={site.titlePhonetic}>{site.title}</a>
		</h1>
		<nav>
			<ul id="main-nav">
				{#each navItems as { url, label }}
					<li><a href={url}>{label}</a></li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
