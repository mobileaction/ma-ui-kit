const path = require('path');

module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.ts', '../src/**/*.stories.js'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        vueDocgenOptions: {
          alias: {
            '@': path.resolve(__dirname, '../'),
          },
        },
      },
    },
    // '@storybook/addon-storysource', // see https://github.com/storybookjs/storybook/issues/13362#issuecomment-779804329
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-postcss',
    '@storybook/addon-a11y',
    'storybook-design-token'
  ],
};
