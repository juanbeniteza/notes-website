import { defineCollection, z } from 'astro:content';

// Define the schema for the notes collection
export const collections = {
  'notes': defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      tags: z.array(z.string()).optional(),
      draft: z.boolean().optional().default(false),
    }),
  }),
}; 