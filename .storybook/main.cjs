module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [],
  framework: "@storybook/react",
  core: { builder: "@storybook/builder-vite" },
  features: { storyStoreV7: true },
  viteFinal: config => ({...config, base: ''})
}