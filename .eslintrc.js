import eslintConfigRecommended from 'eslint:recommended';
import pluginPrettierRecommended from 'plugin:prettier/recommended';

export default {
  extends: [eslintConfigRecommended, pluginPrettierRecommended],
  rules: {
    'prettier/prettier': ['error'],
    'no-console': 'warn',
    'eqeqeq': 'error',
  },
};
