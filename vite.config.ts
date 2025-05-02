import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tailwindcss from '@tailwindcss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    cacheDir: 'node_modules/.vite',
    plugins: [
      vue(),
      vueJsx(),
      tailwindcss(),

      mode === 'development' && vueDevTools(),

      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/app/icons')],
        symbolId: 'icon-[name]',
        customDomId: '__svg__icons__dom__',
      }),
    ].filter(Boolean),

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    server: {
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
      open: false,
    },

    preview: {
      port: Number(env.VITE_PREVIEW_PORT),
    },
  }
})
