import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const newsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    category: z.enum(["公司新闻", "媒体报道"]).default("公司新闻"),
  }),
});

const productsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    name: z.string(),
    target: z.string().optional(),
    indication: z.string().optional(),
    stage: z.string().optional(),
    category: z.enum(["研发", "上市"]).default("研发"),
  }),
});

const jobsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/jobs" }),
  schema: z.object({
    title: z.string(),
    department: z.string(),
    location: z.string(),
    date: z.coerce.date(),
    type: z.enum(["全职", "兼职", "实习"]).default("全职"),
    education: z.string().optional(),
    experience: z.string().optional(),
    salary: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
  products: productsCollection,
  jobs: jobsCollection,
};
