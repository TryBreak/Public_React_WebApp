module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['react-app', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
  },
};
