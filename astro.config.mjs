import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://notes.juanbenitez.dev',
  integrations: [
    tailwind(),
    icon(),
    vercel({ webAnalytics: { enabled: true } }),
    sitemap(),
  ],
});
