import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import NetlifyCMS from "astro-netlify-cms";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    tailwind(),
    mdx(),
    NetlifyCMS({
      previewStyles: [
        "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;700&display=swap",
        "/src/styles/previews.css",
      ],
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        media_folder: "src/assets",
        public_folder: "/assets",
        collections: [
          {
            name: "blog",
            label: "Blog Posts",
            folder: "src/content/blog",
            create: true,
            delete: true,
            slug: "{{slug}}",
            fields: [{ label: "title", name: "title", widget: "string" }],
          },
          {
            name: "services",
            label: "Services",
            description: "this is a test description for services",
            folder: "src/content/services",
            create: true,
            delete: true,
            slug: "{{slug}}",
            fields: [
              { label: "title", name: "title", widget: "string" },
              { label: "subtitle", name: "subtitle", widget: "string" },
              { label: "icon", name: "icon", widget: "image" },
            ],
          },
          {
            name: "portfolio",
            label: "Portfolio",
            description: "this is a test description for portfolio",
            folder: "src/content/portfolio",
            create: true,
            delete: true,
            slug: "{{slug}}",
            fields: [
              { label: "title", name: "title", widget: "string" },
              { label: "description", name: "description", widget: "string" },
              { label: "date", name: "date", widget: "datetime" },
              { label: "url", name: "url", widget: "string" },
              { label: "hero", name: "hero", widget: "image" },
              {
                label: "images",
                name: "images",
                widget: "list",
                fields: [{ label: "image", name: "image", widget: "image" }],
              },
              { label: "Content", name: "body", widget: "markdown" },
            ],
          },
        ],
      },
    }),
  ],
  adapter: netlify(),
});
