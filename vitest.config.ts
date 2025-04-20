import {configDefaults, defineConfig} from 'vitest/config'
import {fileURLToPath} from 'node:url'
import {dirname, resolve} from 'node:path'
import {loadConfigFromFile} from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))
const viteConfigPath = resolve(__dirname, 'vite.config.mts')

export default defineConfig(async ({ mode }) => {
    const loaded = await loadConfigFromFile({ command: 'serve', mode }, viteConfigPath)
    const viteConfig = loaded?.config

    if (!viteConfig) {
        throw new Error(`Failed to load Vite config at ${viteConfigPath}`)
    }

    return {
        ...viteConfig,
        test: {
            environment: 'jsdom',
            globals: true,
            include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
            exclude: [...configDefaults.exclude, 'e2e/**'],
            root: resolve(__dirname),
            setupFiles: resolve(__dirname, 'src/setupTests.ts'),
            coverage: {
                reporter: ['text', 'lcov'],
                exclude: ['src/setupTests.ts', 'src/**/*.d.ts'],
            },
        },
    }
})