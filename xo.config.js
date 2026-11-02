import xoReact from 'eslint-config-xo-react';

export default [
  {ignores: ['lib/**', 'output/**', 'site/**', '**/*.md', '**/*.json']},
  {space: true, prettier: true},
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    rules: {
      // Keep the CLI's public property names and switch-based option parser.
      'unicorn/consistent-boolean-name': 'off',
      'unicorn/no-break-in-nested-loop': 'off',
      '@typescript-eslint/switch-exhaustiveness-check': [
        'error',
        {considerDefaultExhaustiveForUnions: true},
      ],
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {allowNullableString: true},
      ],
    },
  },
  ...xoReact({space: true, prettier: true}),
  {
    files: ['**/*.tsx'],
    rules: {
      'unicorn/filename-case': [
        'error',
        {case: 'pascalCase', checkDirectories: false},
      ],
    },
  },
  {
    files: ['src/utils/style.ts'],
    rules: {
      // The renderer needs fonts registered before any CV is rendered.
      'unicorn/no-top-level-side-effects': 'off',
    },
  },
  {
    files: ['tests/*.test.mjs'],
    rules: {
      // Each loop asserts the same contract for a fixed set of CLI inputs.
      'node-test/no-conditional-assertion': 'off',
    },
  },
];
