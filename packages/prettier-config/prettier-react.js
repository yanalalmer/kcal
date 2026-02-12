const baseConfig = require('./prettier-base');

/**  @type {import('prettier').Config} */
module.exports = {
  ...baseConfig,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  plugins: [...baseConfig.plugins, 'prettier-plugin-tailwindcss'],
};
