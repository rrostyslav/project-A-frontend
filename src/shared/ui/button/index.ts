import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap',
    'rounded-[4px] transition-all',
    'disabled:opacity-60 disabled:pointer-events-none',
    'outline-none focus-visible:ring-2 focus-visible:ring-[#6C79FF]/50',
  ].join(' '),
  {
    variants: {
      variant: {
        // Hierarchy = Primary
        primary: [
          'bg-[#575BC7] border border-[#575BC7] text-white',
          'shadow-[0_1px_2px_rgba(0,0,0,0.09)]',
          'hover:bg-[#666BE2]',
        ].join(' '),

        // Hierarchy = Secondary
        secondary: [
          'bg-[#292A35] border border-[#393A4B] text-[#EEEFFC]',
          'shadow-[0_1px_1px_rgba(0,0,0,0.15)]',
          'hover:bg-[#2C2D42]',
        ].join(' '),

        // Hierarchy = Tertiary
        tertiary: [
          'bg-transparent border border-[#393A4B] text-[#D2D3E0]',
          'filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.09)]',
          'hover:border-[#3C3D53] hover:text-[#EEEFFC]',
        ].join(' '),

        // Hierarchy = Banner (text‐only)
        banner: [
          'bg-transparent text-[#575BC7]',
          'filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]',
          'hover:text-[#EEEFFC]',
        ].join(' '),
      },

      destructive: {
        true: '',
        false: '',
      },

      size: {
        lg: 'h-[48px] px-[14px] py-[13px] text-[15px] leading-[22px]',
        md: 'h-[32px] px-[14px] py-[8px]  text-[15px] leading-[22px]',
        sm: 'h-[28px] px-[14px] py-[6.5px] text-[13px] leading-[16px]',
        xs: 'h-[24px] px-[14px] py-[4.5px] text-[12px] leading-[15px]',

        icon: 'h-[34px] w-[34px] p-[8px]',
      },

      iconPosition: {
        leading: 'flex-row-reverse',
        none: '',
      },
    },

    compoundVariants: [
      {
        variant: 'primary',
        destructive: true,
        class: [
          'bg-[#EB5757] border border-[#EB5757] text-white',
          'hover:bg-[#FA6563]',
          'focus-visible:shadow-[0_0_12px_-1px_#EB5757]',
        ].join(' '),
      },
    ],

    defaultVariants: {
      variant: 'primary',
      destructive: false,
      size: 'md',
      iconPosition: 'none',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
