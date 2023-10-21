import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import { loadEnv } from 'vite'
import lit from '@astrojs/lit'
const env = loadEnv(process.env.APP_ENV, process.cwd(), '')

// https://astro.build/config
export default defineConfig({
  site: env.PUBLIC_SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  integrations: [tailwind(), lit()]
})
