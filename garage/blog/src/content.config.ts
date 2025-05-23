import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

// F1 Drivers Collection
const drivers = defineCollection({
  loader: glob({ base: "./src/content/drivers", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    firstName: z.string(),
    lastName: z.string(),
    number: z.number(),
    team: z.string(),
    nationality: z.string(),
    age: z.number(),
    profileImage: z.string().optional(),
    season: z.enum(["2024", "2025"]),
    championships: z.number().default(0),
    raceWins: z.number().default(0),
    podiums: z.number().default(0),
    points: z.number().default(0),
  }),
});

// F1 Teams Collection
const teams = defineCollection({
  loader: glob({ base: "./src/content/teams", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    name: z.string(),
    carModel: z.string(),
    season: z.enum(["2024", "2025"]),
    drivers: z.array(z.string()),
    principal: z.string(),
    engine: z.string(),
    chassis: z.string(),
    carImage: z.string().optional(),
    teamLogo: z.string().optional(),
    constructorPoints: z.number().default(0),
    championships: z.number().default(0),
  }),
});

export const collections = { blog, drivers, teams };
