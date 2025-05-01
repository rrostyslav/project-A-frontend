<script lang="ts" setup>
import type { CheckboxRootEmits, CheckboxRootProps } from 'reka-ui'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/shared/lib'
import { Check } from 'lucide-vue-next'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CheckboxRoot
    :class="
      cn(
        'peer border-input data-[state=checked]:bg-[#575BC7] hover:data-[state=checked]:border-[#575BC7] data-[state=checked]:text-white data-[state=checked]:border-[#4C4F6B] focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-3.5 shrink-0 rounded-[3px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
    data-slot="checkbox"
    v-bind="forwarded"
  >
    <CheckboxIndicator
      class="flex items-center justify-center text-current transition-none"
      data-slot="checkbox-indicator"
    >
      <slot>
        <Check class="w-3.5 h-2.5" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
