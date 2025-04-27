<script lang="ts" setup>
defineProps({
  name: { type: String, required: true },
  prefix: { type: String, default: 'icon' },
  width: { type: [String, Number], default: '1em' },
  height: { type: [String, Number], default: '1em' },
  color: { type: String, default: 'currentColor' },
  ariaLabel: { type: String, default: undefined },
})
</script>

<template>
  <svg
    :aria-hidden="!ariaLabel"
    :aria-label="ariaLabel || undefined"
    :fill="color"
    :height="height"
    :width="width"
    role="img"
    v-bind="$attrs"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use :href="`#${prefix}-${name}`" />
  </svg>
</template>
