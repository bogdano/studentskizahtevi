// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: "https://studentskizahtevi.com",
  output: "static",
  prefetch: true,

  experimental: {
      clientPrerender: true,
  },

  adapter: cloudflare(),
});