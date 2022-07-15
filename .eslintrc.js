module.exports = {
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: 'tsconfig.json',
  //   sourceType: 'module',
  //   tsconfigRootDir: __dirname,
  // },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'jest.config.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'max-len': ["error", { "code": 120 } ],
    'semi': ['error', 'always'],
    'object-curly-spacing': ["error", "always"],
    'quotes': ["error", "single"],
    'quote-props': ["error", "as-needed"],
    "comma-dangle": ["error", "always-multiline"],
    'padding-line-between-statements': [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "var", "let"], next: "*" },
      { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]}
    ],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    "indent": ["error", 2],
    "keyword-spacing": ["error", { "before": true }],
  },
};
