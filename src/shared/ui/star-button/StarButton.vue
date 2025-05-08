<script lang="ts" setup>
import { defineModel } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/shared/lib'
import { starButtonVariants } from '.'
import { SpriteIcon } from '../icon'

const checked = defineModel<boolean>('checked', { default: false })
const props = withDefaults(defineProps<PrimitiveProps & { class?: string }>(), { as: 'button' })

const emit = defineEmits<{
  (e: 'click', ev: MouseEvent): void
}>()

function onClick(ev: MouseEvent) {
  checked.value = !checked.value
  emit('click', ev)
}
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    :class="cn(starButtonVariants({ checked }), props.class)"
    @click="onClick"
  >
    <SpriteIcon
      :name="checked ? 'star-filled' : 'star-outline'"
      :style="{ color: checked ? '#F2C94C' : '#4C4F6B' }"
      class="w-[14px] h-[14px]"
    />
  </Primitive>
</template>
