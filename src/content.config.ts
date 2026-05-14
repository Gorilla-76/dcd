import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const newsletter = defineCollection({
	loader: glob({ base: "./src/content/newsletter", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		issue: z.number(),
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = { newsletter };
