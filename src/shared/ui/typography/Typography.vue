<script setup lang="ts">
import type { ThemeColor } from '@/shared/types/theme'
import { Primitive } from 'reka-ui'
import { computed } from 'vue'

type TypographyVariant =
  | 'title1'
  | 'title2'
  | 'issue-title'
  | 'title3'
  | 'large'
  | 'normal'
  | 'small'
  | 'mini'
  | 'micro'

const props = defineProps<{
  typography: TypographyVariant
  weight?: 'regular' | 'medium'
  as?: keyof HTMLElementTagNameMap
  color?: ThemeColor
}>()

const typographyClasses = computed(() => {
  const sizeMap: Record<TypographyVariant, string> = {
    title1: 'text-4xl leading-none',
    title2: 'text-2xl leading-none',
    'issue-title': 'text-xl leading-none',
    title3: 'text-lg leading-none',
    large: 'text-base leading-7',
    normal: 'text-sm leading-6',
    small: 'text-[13px] leading-none',
    mini: 'text-xs leading-none',
    micro: 'text-[11px] leading-[110%]',
  }

  const fontWeight = props.weight === 'medium' ? 'font-medium' : 'font-normal'
  const baseClasses = sizeMap[props.typography] || ''

  return `${fontWeight} ${baseClasses} text-[color:var(--color)]`
})

const color = computed(() => ({
  '--color': `var(--${props.color || 'primary'})`,
}))
</script>

<template>
  <Primitive :as="as || 'p'" :class="typographyClasses" :style="color">
    <slot />
  </Primitive>
</template>
