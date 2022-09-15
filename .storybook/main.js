const path = require('path')
const toPath = (filePath) => path.join(process.cwd(), filePath);
const { mergeConfig } = require('vite')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config, { configType }) { // configType === DEVELOPMENT | PRODUCTION
    return mergeConfig(config, {
      resolve: {
        alias: { "@": toPath('src') },
      },
    });
  },
}