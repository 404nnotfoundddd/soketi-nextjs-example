/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  pluginSearchDirs: false,
  semi: true,
  singleQuote: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      options: {
        semi: false,
        singleQuote: true,
      },
    },
  ],
};

module.exports = config;
