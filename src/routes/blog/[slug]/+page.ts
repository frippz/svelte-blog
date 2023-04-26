export const load = async ({ params }) => {
	const post = await import(`../${params.slug}.md`);
	const { title, published } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		published
	};
};
