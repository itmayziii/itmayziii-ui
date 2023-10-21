import { chromeLauncher } from '@web/test-runner'
import { esbuildPlugin } from '@web/dev-server-esbuild'

export default {
  files: ['src/**/*.test.ts'],
  concurrency: 10,
  nodeResolve: true,
  watch: false,
  browsers: [chromeLauncher({
    launchOptions: {
      // executablePath: '/usr/bin/chromium-browser',
      args: [
        // https://developer.chrome.com/articles/new-headless/
        '--headless=new',
        // https://www.google.com/googlebooks/chrome/med_26.html
        '--no-sandbox',
        '--disable-gpu'
      ]
    }
  })],
  plugins: [
    esbuildPlugin({ ts: true })
  ]
}
