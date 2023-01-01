module.exports = {
  root: true,
  extends: ['@plasticine-yang/eslint-config-typescript'],
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'import/no-unresolved': 'off',
  },
}
