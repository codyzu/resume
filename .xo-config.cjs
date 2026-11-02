module.exports = {
  space: true,
  prettier: true,
  extends: ['xo-react', 'plugin:react/jsx-runtime'],
  ignores: ['lib/**', 'output/**', 'site/**'],
  overrides: [{
    files: '**/*.tsx',
    rules: {
      'unicorn/filename-case': ['error', {case: 'pascalCase'}],
      'n/file-extension-in-import': 'off',
      'import/extensions': 'off',
    },
  }],
};
