/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Vite mode: 'development' | 'production' | 'test'
   * @see https://vitejs.dev/guide/env-and-mode.html#env-files
   */
  readonly MODE: 'development' | 'production' | 'test'

  /**
   * Node environment
   */
  readonly NODE_ENV: 'development' | 'production'

  /**
   * Base public path (falls back to '/')
   */
  readonly VITE_BASE_URL: string

  /**
   * Dev server port
   */
  readonly VITE_PORT: string

  /**
   * Dev server host
   */
  readonly VITE_HOST: string

  /**
   * Preview server port
   */
  readonly VITE_PREVIEW_PORT: string

  /**
   * Your backend API URL
   */
  readonly VITE_API_URL: string

  /**
   * Your API URL for Apollo
   */
  readonly VITE_APOLLO_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
