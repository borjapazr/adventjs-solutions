module.exports = {
  env: {
    node: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  globals: {
    createTestCase: 'readonly'
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:node/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'no-process-exit': 'off',
    'no-restricted-syntax': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/prefer-default-export': 'off',
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    'no-bitwise': 'off'
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'],
      env: {
        jest: true,
        'jest/globals': true
      },
      extends: ['plugin:jest/recommended', 'plugin:jest/style']
    }
  ]
};
