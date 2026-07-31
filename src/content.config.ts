import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";


const books = defineCollection({
  loader: file("src/data/books.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    title: z.string(),
    author: z.string(),
    age: z.number(),
  }),
});

const mkBooks = defineCollection({
  loader: glob({ base: "./src/data/books", pattern: "**/*.{md,mdx}" }),
  schema: z.object({        
    name: z.string(),
    title: z.string(),
    author: z.string(),
    age: z.number(),
  }),
});




export const collections = { books, mkBooks };