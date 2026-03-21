import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const blog = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      datePublished: z.string(),
      teaser: z.string(),
      sharingCard: image().optional(),
    }),
})

export const collections = { blog }
