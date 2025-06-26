import type { StorybookConfig } from '@storybook/experimental-nextjs-vite'
import { mergeConfig } from 'vite'
import postcssConfig from '../postcss.vite.config.mjs'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {},
  },

  staticDirs: ['../public'],
  async viteFinal(config, options) {
    return mergeConfig(config, {
      css: {
        postcss: postcssConfig,
      },
    })
  },
}
export default config
