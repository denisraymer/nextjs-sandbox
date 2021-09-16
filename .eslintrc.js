module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      { allowExpressions: true },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false,
          object: false,
          Object: {
            message: 'Use object instead',
            fixWith: 'object',
          },
          any: false,
        },
      },
    ],
    'spaced-comment': ['error', 'always'],
    'no-irregular-whitespace': ['off'],
    'no-case-declarations': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
  },
};
