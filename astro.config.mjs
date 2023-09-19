import {defineConfig} from 'astro/config'
import tailwind from '@astrojs/tailwind'
import nodejsAdapter from '@astrojs/node'
import {loadEnv} from 'vite'

const env = loadEnv(import.meta.env.MODE, process.cwd(), '')

// https://astro.build/config
export default defineConfig({
  site: env.SITE,
  output: 'server',
  adapter: nodejsAdapter({
    mode: 'standalone'
  }),
  integrations: [tailwind()]
})

