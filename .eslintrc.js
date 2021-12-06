module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 12
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:node/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }]
  }
};
