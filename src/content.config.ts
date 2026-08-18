import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob, file } from "astro/loaders";


const books = defineCollection({
  loader: file("src/content/books/books.json"),
  schema: z.object({  
    id:z.string(),  
    name: z.string(),
    title: z.string(),
    author: z.string(),
    age: z.number(),
  }),
});

const mkBooks = defineCollection({
  loader: glob({ base: "./src/content/books", pattern: "**/*.{md,mdx}" }),
  schema: z.object({        
    
    name: z.string(),
    title: z.string(),
    author: z.string(),
    age: z.number(),
  }),
});




export const collections = { books, mkBooks };