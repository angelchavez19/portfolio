import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  integrations: [
    vue({
      jsx: true,
    }),
    mdx(),
  ],
  output: "server",
  adapter: vercel(),
});
