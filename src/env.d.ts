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
     * Preview server port
     */
    readonly VITE_PREVIEW_PORT: string

    /**
     * Your backend API URL
     */
    readonly VITE_API_URL: string

    /**
     * Feature flag X
     */
    readonly VITE_FEATURE_X: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
