module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    // Add or update import-related rules here
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    // Other existing rules
  },
  // Other existing configurations
};
