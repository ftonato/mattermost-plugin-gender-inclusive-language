module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  parser: '@babel/eslint-parser',
  settings: {
    'import/extensions': ['.js'],
  },
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'import/extensions': ['error', 'never', {json: 'always'}],
    'arrow-parens': ['error', 'as-needed'],
    'consistent-return': ['off'],
  },
};
