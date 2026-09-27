import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../app/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: '@storybook/react-vite',
  core: {
    disableTelemetry: true,
  },
}

export default config
