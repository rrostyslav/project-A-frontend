import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import pluginPlaywright from 'eslint-plugin-playwright'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import fsdConfig from '@feature-sliced/steiger-plugin'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  {
    files: ['**/*.{vue,ts,mts,tsx}'],
    ...pluginVue.configs['flat/essential'],
  },

  {
    files: ['**/*.{ts,mts,tsx,vue}'],
    ...fsdConfig.configs.recommended,
  },

  {
    files: ['**/*.{ts,mts,tsx,vue}'],
    ...vueTsConfigs.recommended,
  },

  {
    files: ['**/*.{ts,mts,tsx,vue}'],
    ...fsdConfig.configs.recommended,
  },

  {
    files: ['src/**/__tests__/*'],
    ...pluginVitest.configs.recommended,
  },

  {
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    ...pluginPlaywright.configs['flat/recommended'],
  },
  skipFormatting,
  ...compat.extends('@feature-sliced'),
)
