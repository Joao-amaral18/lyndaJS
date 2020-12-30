module.exports = {
    parser: 'babel-eslint',
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
      jest: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
      ecmaFeatures: {
        impliedStrict: true,
        jsx: true,
      },
      sourceType: 'module',
    },
    plugins: ['react'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      indent: ["error", 2 {switchCase: 1}],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      semi: ["error", "aways"],
      "no-console":[
          "warn",
          {allow: ["clear", "info", "error", "dir", "trace"] }
      ]
     },
  };