// @ts-check

/**
 * @type {import('prettier').Config}
 **/
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  plugins: [require('prettier-plugin-tailwindcss')],
  printWidth: 100,
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};
