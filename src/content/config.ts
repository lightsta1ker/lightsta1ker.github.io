import { defineCollection, z } from 'astro:content';

const systemsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        stats: z.array(z.string()),
        publishDate: z.date(),
    }),
});

export const collections = {
    'systems': systemsCollection,
};
