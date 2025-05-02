<script lang="ts" setup>
import { defineProps } from 'vue'
import { cn } from '@/shared/lib'
import { keyVariants } from '.'

const props = withDefaults(
  defineProps<{
    variant?: 'default'
    class?: string
  }>(),
  { variant: 'default' },
)
</script>

<template>
  <span :class="cn(keyVariants({ variant: props.variant }), props.class)">
    <slot />
  </span>
</template>
