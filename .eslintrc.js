module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  'extends': ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', 'prettier', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "@typescript-eslint/no-explicit-any": "off",
    "vue/script-setup-uses-vars": "warn"
  },
  ignorePatterns: ["src/components/vue3-neshan-map-openlayers.umd.js", "dist/**"]
};