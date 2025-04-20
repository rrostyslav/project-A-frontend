import {defineConfig, loadEnv} from "vite"
import solidPlugin from "vite-plugin-solid"
import {TanStackRouterVite} from "@tanstack/router-plugin/vite"
import {dirname, resolve} from "node:path"
import {fileURLToPath} from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig(({ mode, command }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  const defineEnv = {
    ...Object.fromEntries(
        Object.entries(env)
            .filter(([key]) => key.startsWith("VITE_"))
            .map(([key, val]) => [`import.meta.env.${key}`, JSON.stringify(val)])
    ),
    'import.meta.env.MODE': JSON.stringify(mode),
    'import.meta.env.NODE_ENV': JSON.stringify(
        mode === 'production' ? 'production' : 'development'
    ),
  }

  return {
    root,
    base: env.VITE_BASE_URL || '/',
    publicDir: 'public',
    envDir: resolve(root, 'env'),
    envPrefix: ['VITE_'],
    cacheDir: '.vite_cache',
    logLevel: 'warn',

    plugins: [
      solidPlugin({
        dev: command !== 'build',
        hot: command === 'serve',
        solid: {
          generate: 'dom',
          hydratable: true,
          delegateEvents: true,
          wrapConditionals: true,
          contextToCustomElements: true,
          builtIns: [
            'For','Show','Switch','Match','Suspense','SuspenseList','Portal','Index','Dynamic','ErrorBoundary'
          ]
        }
      }),
      TanStackRouterVite({ target: 'solid' }),
    ],

    resolve: {
      alias: { '@': resolve(__dirname, 'src') },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
      preserveSymlinks: false,
    },

    define: defineEnv,

    optimizeDeps: {
      include: ['solid-js', 'solid-js/web', 'solid-js/store'],
      exclude: ['@tanstack/solid-router'],
      esbuildOptions: { target: 'esnext' }
    },

    // server: {
    //   port: Number(env.VITE_PORT) || 3000,
    //   strictPort: true,
    //   open: true,
    //   fs: { allow: [resolve(root, 'public')] },
    //   proxy: {
    //     '/api': {
    //       target: env.VITE_API_URL,
    //       changeOrigin: true,
    //       secure: false,
    //       rewrite: path => path.replace(/^\/api/, '')
    //     }
    //   }
    // },

    preview: {
      port: Number(env.VITE_PREVIEW_PORT) || 4173,
      strict: true
    },

    build: {
      target: 'esnext',
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: mode !== 'production',
      minify: 'esbuild',
      brotliSize: false,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('solid-js')) return 'solid-vendor'
              if (id.includes('@tanstack/solid-router')) return 'router-vendor'
              return 'vendor'
            }
          }
        }
      }
    },
  }
})
