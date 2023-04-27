module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb-typescript', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'warn',
  },
  overrides: [
    {
      files: ['**/*.json'],
      rules: {
        semi: ['off'],
        quotes: ['off'],
      },
    },
    {
      files: ['**/*.js', '**/*.ts'],
      rules: {
        semi: ['error', 'always'],
      }
    },
  ],
};
