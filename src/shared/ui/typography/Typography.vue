<script lang="ts" setup>
import type { ThemeColor } from '@/shared/types/theme'
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import { cva } from 'class-variance-authority'

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

const typographyStyles = cva('text-[color:var(--color)]', {
  variants: {
    typography: {
      title1: 'text-4xl leading-none',
      title2: 'text-2xl leading-none',
      'issue-title': 'text-xl leading-none',
      title3: 'text-lg leading-none',
      large: 'text-base leading-7',
      normal: 'text-sm leading-6',
      small: 'text-[13px] leading-none',
      mini: 'text-xs leading-none',
      micro: 'text-[11px] leading-[110%]',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
    },
  },
  defaultVariants: {
    typography: 'normal',
    weight: 'regular',
  },
})

const props = withDefaults(
  defineProps<{
    typography: TypographyVariant
    weight?: 'regular' | 'medium'
    as?: keyof HTMLElementTagNameMap
    color?: ThemeColor
  }>(),
  {
    weight: 'regular',
    as: undefined,
    color: 'primary',
  },
)

const classes = computed(() => {
  return typographyStyles({
    typography: props.typography,
    weight: props.weight,
  })
})

const colorStyle = computed(() => ({
  '--color': `var(--${props.color})`,
}))
</script>

<template>
  <Primitive :as="as || 'p'" :class="classes" :style="colorStyle">
    <slot />
  </Primitive>
</template>
