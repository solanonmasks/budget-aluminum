// Astro config. `output: 'static'` builds plain HTML files into /dist.
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // Change this to the real domain once the site is live (used for canonical / Open Graph URLs).
  site: 'https://budgetaluminium.com',
});
