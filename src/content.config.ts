import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
	// Load Markdown and MDX files in the `src/content/insights/` directory.
	loader: glob({ base: './src/content/insights', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
        isPrivate: z.boolean().optional(),
	}),
});

export const collections = { insights };
