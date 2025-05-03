import type { Preview } from '@storybook/vue3';
import '../src/app/styles/main.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    decorators: [
      () => ({
        template: `
          <div style="width: 100vw; height: 100vh;">
            <story />
          </div>
        `
      })
    ]
  },
};

export default preview;
