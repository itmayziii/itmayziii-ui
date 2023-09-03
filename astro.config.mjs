import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import nodejsAdapter from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: nodejsAdapter({ mode: 'standalone' }),
  integrations: [tailwind()]
});
