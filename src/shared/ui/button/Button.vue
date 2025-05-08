<script lang="ts" setup>
import { type HTMLAttributes, toRefs } from 'vue'
import { cn } from '@/shared/lib'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { buttonVariants, type ButtonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  destructive?: boolean
  size?: ButtonVariants['size']
  iconPosition?: ButtonVariants['iconPosition']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'primary',
  destructive: false,
  size: 'md',
  iconPosition: 'none',
})

const { as, asChild, variant, destructive, size, iconPosition } = toRefs(props)
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, destructive, size, iconPosition }), props.class)"
    data-slot="button"
  >
    <slot />
  </Primitive>
</template>
