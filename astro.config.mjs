// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://wibby-web.github.io/business-landscape-sample/
  // Pages serves project sites from a subpath, so root-absolute URLs must carry
  // that prefix. `src/lib/url.ts` centralises this for links and assets.
  site: 'https://wibby-web.github.io',
  base: '/business-landscape-sample',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  // The whole site shares one small stylesheet, so inline it and remove the
  // only render-blocking request from the critical path.
  build: {
    inlineStylesheets: 'always'
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
