import { cva } from 'class-variance-authority'

export { default as VKey } from './VKey.vue'

export const keyVariants = cva('flex items-center justify-center p-[2.5px] rounded-[3px]', {
  variants: {
    variant: {
      default: 'bg-[rgba(149,149,189,0.125)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
