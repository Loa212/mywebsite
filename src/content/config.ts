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
    stats: z.object({
      title: z.string(),
      success: z.string(),
      satisfy: z.string(),
      experience: z.string(),
    }),
    used_by: z.object({
      title: z.string(),
    }),
    services: z.object({
      title: z.string(),
      subtitle: z.string(),
      cta: z.string(),
    }),
    contact: z.object({
      title: z.string(),
      subtitle: z.string(),
      name: z.string(),
      email: z.string(),
      businessName: z.string(),
      website: z.string(),
      message: z.string(),
      cta: z.string(),
    }),
    mailer: z.object({
      missing_fields: z.string(),
      success: z.string(),
      error: z.string(),
    }),
    navbar: z.object({
      services: z.string(),
      portfolio: z.string(),
      pricing: z.string(),
      contact: z.string(),
    }),
    // landing
    landingHero: z.object({
      title: z.string(),
      subtitle: z.string(),
      cta: z.string(),
    }),
    adCopy: z.object({
      title: z.string(),
      t1: z.string(),
      t2: z.string(),
      t3: z.string(),
      t4: z.string(),
      t5: z.string(),
      t6: z.string(),
      t7: z.string(),
      t8: z.string(),
      t9: z.string(),
      t10: z.string(),
      t11: z.string(),
      t12: z.string(),
      t13: z.string(),
    }),
  }),
});

const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    id: z.string(),
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
