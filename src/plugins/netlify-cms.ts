import type { CmsConfig } from "netlify-cms-core";
export const config: Omit<CmsConfig, "load_config_file" | "local_backend"> = {
  backend: {
    name: "git-gateway",
    branch: "main",
  },
  publish_mode: "editorial_workflow",
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
        {
          label: "hero",
          name: "hero",
          widget: "image",
        },
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
};
