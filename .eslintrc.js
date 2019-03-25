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
    //必须使用\n换行
    'linebreak-style': ['error', 'unix'],
    //使用 .prettierrc 美化代码
    'prettier/prettier': 'error',
    //使用单引号
    quotes: ['error', 'single'],
    //必须使用括号包裹箭头函数的参数
    'arrow-parens': ['error', 'always'],
    //强制 generator 函数
    'generator-star-spacing': ['error', { before: false, after: true }],
    'no-debugger': 'error',
    //函数空格的问题
    'space-before-function-paren': 'error',
    //分号
    semi: ['error', 'always'],
    'semi-spacing': ['error', { before: true, after: true }],
    'semi-style': ['error', 'last'],
    //console
    'no-console': ['error', { allow: ['warn', 'error'] }],
    //禁用常量表达式
    'no-constant-condition': 'error',
    //禁止出现重复的键
    'no-dupe-keys': 'error',
    //禁止导入重复模块
    'no-duplicate-imports': 'error',
    //jsx中使用单引号
    'jsx-quotes': ['error', 'prefer-double'],
    //构造函数首字母大写
    'new-cap': ['error', { newIsCap: true }],
    //括号内空格
    'space-in-parens': ['error', 'always'],
    //对象属性排序
    'sort-keys': 'error',
  },
};
