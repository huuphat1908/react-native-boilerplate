module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 'off',
    'object-curly-spacing': ['error', 'always'],
    semi: ['error', 'never'],
    '@typescript-eslint/no-unused-vars': 'off',
    'react-native/no-inline-styles': 'off',
  },
}
