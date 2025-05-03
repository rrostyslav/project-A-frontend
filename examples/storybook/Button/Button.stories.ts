import Button from './Button.vue';

interface ButtonArgs {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  label?: string;
}

export default {
  title: 'Shared/UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Button variant (primary/secondary/outline)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size (small/medium/large)',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Primary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary variant button with medium size',
      },
    },
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    size: 'medium',
    label: 'Secondary Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary variant button with medium size',
      },
    },
  },
};

export const Outline = {
  args: {
    variant: 'outline',
    size: 'medium',
    label: 'Outline Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline variant button with medium size',
      },
    },
  },
};

export const Small = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Small Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button with small size',
      },
    },
  },
};

export const Large = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Large Button',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button with large size',
      },
    },
  },
};

export const WithSlot = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
  render: (args: ButtonArgs) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args">Custom Slot Content</Button>',
  }),
  parameters: {
    docs: {
      description: {
        story: 'Button with custom slot content',
      },
    },
  },
};
