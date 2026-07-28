// @ts-check
import { defineConfig } from 'astro/config';
import { microfrontends } from '@vercel/microfrontends/experimental/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [microfrontends()],
  },
});
