import { chromeLauncher } from '@web/test-runner'
import { esbuildPlugin } from '@web/dev-server-esbuild'
import { fileURLToPath } from 'url'

export default {
  files: ['src/**/*.test.ts'],
  concurrency: 10,
  nodeResolve: true,
  watch: false,
  browsers: [chromeLauncher({
    launchOptions: {
      executablePath: process.env.CI === 'true' ? '/usr/bin/chromium-browser' : undefined,
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
    esbuildPlugin({
      ts: true,
      tsconfig: fileURLToPath(new URL('./tsconfig.json', import.meta.url)),
      target: 'auto'
    })
  ],
  browserLogs: true,
  filterBrowserLogs (log) {
    const baseArg = log.args[0]
    if (baseArg === undefined) return true

    if (baseArg.startsWith('Lit is in dev mode.')) return false

    return true
  }
}
