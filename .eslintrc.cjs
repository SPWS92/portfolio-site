module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "indent": ["error", 2],
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // `react` first, then packages starting with a character
          ['^react$', '^[a-z]', '^@'],
          // Packages starting with `@generated` or `@msa`
          ['^@content', '^@e2e', '^@generated', '^@msa'],
          // Imports starting with `./` and `../`
          ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\.(?!/?$)', '^\\./(?=.*/)(?!/?$)', '^\\./?$'],
          // Style imports
          ['^.+\\.s?css$', '^.+\\.styles'],
          // Side effect imports - 'import "./setup"'
          ['^\\u0000'],
        ],
      },
    ],
  },
}
