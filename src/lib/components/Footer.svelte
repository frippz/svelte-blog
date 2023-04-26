<script lang="ts">
	import externalLinks from '../../data/externalLinks.json';
	import feedLinks from '../../data/feedLinks.json';
</script>

<footer id="footer">
	<div class="landmark-content footer-content">
		<h2 class="offscreen">Find Fredrik in other places</h2>

		<ul class="footer-links external-links">
			{#each externalLinks as item}
				<li>
					<a href={item.url}>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>

		<h2 class="offscreen">Subscribe to posts</h2>

		<ul class="footer-links feeds">
			{#each feedLinks as item}
				<li>
					<a href={item.url}>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>

		<small class="copyright">© 2005–2023 Fredrik Frodlund</small>
	</div>
</footer>
