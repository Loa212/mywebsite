// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
  }),
});

const i18nCollection = defineCollection({
  type: "data",
  schema: z.object({
    id: z.string(),
    displayName: z.string(),
    nav: z.object({
      home: z.string().min(1),
      portfolio: z.string(),
      testimonials: z.string(),
      prices: z.string(),
    }),
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      cta: z.string(),
    }),
    services: z.object({
      title: z.string(),
      subtitle: z.string(),
      cta: z.string(),
    }),
  }),
});

const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    icon: z.string(),
  }),
});

const portfolioCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      url: z.string(),
      hero: image(),
      images: z.array(image()),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  i18n: i18nCollection,
  services: servicesCollection,
  portfolio: portfolioCollection,
};
