import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import NetlifyCMS from "astro-netlify-cms";

import netlify from "@astrojs/netlify/functions";
import { config } from "./src/plugins/netlify-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  integrations: [tailwind(), mdx(), NetlifyCMS({ config })],
  adapter: netlify(),
});
