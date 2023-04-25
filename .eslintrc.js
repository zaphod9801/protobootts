module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['**/*.json'],
      rules: {
        semi: ['off'],
        quotes: ['off'],
      },
      files: ['**/*.js', '**/*.ts'],
      rules: {
        semi: ['error', 'always'],
      }
    },
  ],
};
