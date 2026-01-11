import { defineCollection, z } from 'astro:content';

// 定义文章集合的 schema
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

// 导出集合
export const collections = {
  posts: postsCollection,
};
