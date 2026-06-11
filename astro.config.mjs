import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://fitzroyminerals.com',
  trailingSlash: 'never',

  integrations: [
    mdx(),
    svelte(),
    sitemap({
      filter: (page) => !page.includes('/life-offering'),
    }),
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  redirects: {
    '/corporate':               '/about',
    '/corporate/management':    '/about/leadership',
    '/investors/stock-info':    '/investors/stock',
  },

  legacy: {
    collections: true,
  },
});
