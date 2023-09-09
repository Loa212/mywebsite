import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
// @ts-expect-error
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

// Environment variables for Tina Cloud
// @ts-expect-error
const clientId = process.env.TinaClientID;
// @ts-expect-error
const token = process.env.TinaToken;

// Tina Config
export default defineConfig({
  branch,
  clientId: clientId,
  token: token,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "./src/assets",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "i18n",
        label: "i18n",
        path: "src/content/i18n",
        format: "json",
        fields: [
          {
            type: "string",
            name: "displayName",
            label: "Display Name",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            name: "nav",
            label: "Navigation",
            fields: [
              {
                type: "string",
                name: "home",
                label: "Home",
                required: true,
              },
              {
                type: "string",
                name: "portfolio",
                label: "Portfolio",
                required: true,
              },
              {
                type: "string",
                name: "testimonials",
                label: "Testimonials",
                required: true,
              },
              {
                type: "string",
                name: "prices",
                label: "Prices",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                required: true,
              },
              {
                type: "string",
                name: "cta",
                label: "Call to Action",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "services",
            label: "Services",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtitle",
                required: true,
              },
              {
                type: "string",
                name: "cta",
                label: "Call to Action",
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "services",
        label: "Services",
        path: "src/content/services",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            required: true,
          },
          {
            type: "string",
            name: "icon",
            label: "Icon",
            required: true,
          },
        ],
      },
      {
        name: "portfolio",
        label: "Portfolio",
        path: "src/content/portfolio",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "url",
            label: "URL",
            required: true,
          },
          {
            type: "image",
            name: "hero",
            label: "Hero",
            required: true,
          },
          {
            type: "image",
            name: "images",
            label: "Images",
            required: true,
            list: true,
          },
        ],
      },
    ],
  },
});
