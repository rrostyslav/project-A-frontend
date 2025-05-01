<script lang="ts" setup>
import { cn } from '@/shared/lib'
import {
  SwitchRoot,
  type SwitchRootEmits,
  type SwitchRootProps,
  SwitchThumb,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<SwitchRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SwitchRoot
    :class="
      cn(
        'peer inline-flex h-5 w-7.5 shrink-0 items-center rounded-full border border-transparent transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-[#5758C7] data-[state=unchecked]:bg-[#393A48]',
        props.class,
      )
    "
    data-slot="switch"
    v-bind="forwarded"
  >
    <SwitchThumb
      :class="
        cn(
          'pointer-events-none block h-4 w-4 rounded-full transition-transform',
          'data-[state=checked]:translate-x-2.5 data-[state=unchecked]:translate-x-0.5',
          'data-[state=checked]:bg-white data-[state=unchecked]:bg-[#151621]',
        )
      "
      data-slot="switch-thumb"
    >
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>
