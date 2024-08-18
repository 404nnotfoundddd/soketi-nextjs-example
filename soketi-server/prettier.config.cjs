const config = {
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
