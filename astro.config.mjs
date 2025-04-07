// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // Import the Astro integration
import icon from "astro-icon"; // Import astro-icon integration
import vercel from "@astrojs/vercel"; // Import the Vercel integration
import sitemap from "@astrojs/sitemap"; // Import the sitemap integration

// Removed vite import

// https://astro.build/config
export default defineConfig({
  site: 'https://juanbenitez.dev', // Add the site URL
  integrations: [
    tailwind(), 
    icon(), // Add the astro-icon integration
    vercel({ // Add the Vercel integration with web analytics enabled
      webAnalytics: { enabled: true },
    }),
    sitemap() // Add the sitemap integration
  ] 
  // Removed vite config block
});