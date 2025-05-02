import { cva, type VariantProps } from 'class-variance-authority'

export { default as StarButton } from './StarButton.vue'

export const starButtonVariants = cva(
  [
    'inline-flex items-start p-[7px] gap-[4px]',
    'rounded-[4px] w-[28px] h-[28px]',
    'transition-colors',
    'hover:bg-[#272832]',
  ].join(' '),
  {
    variants: {
      checked: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      checked: false,
    },
  },
)

export type StarButtonVariants = VariantProps<typeof starButtonVariants>
