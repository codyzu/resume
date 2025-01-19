import {join} from 'node:path';
import {Font} from '@react-pdf/renderer';
import {createTw} from 'react-pdf-tailwind';
import {packageDirectory} from './package-dir.js';

Font.register({
  family: 'Roboto',
  fonts: [
    {src: join(packageDirectory, 'fonts', 'roboto-mono-regular.ttf')},
    {
      src: join(packageDirectory, 'fonts', 'roboto-mono-bold.ttf'),
      fontWeight: 'bold',
    },
  ],
});
Font.register({
  family: 'Roboto Semicondensed',
  fonts: [
    {src: join(packageDirectory, 'fonts', 'roboto-semicondensed-regular.ttf')},
    {
      src: join(packageDirectory, 'fonts', 'roboto-semicondensed-bold.ttf'),
      fontWeight: 'bold',
    },
  ],
});
Font.register({
  family: 'Lato',
  fonts: [
    {src: join(packageDirectory, 'fonts', 'lato-regular.ttf')},
    {
      src: join(packageDirectory, 'fonts', 'lato-regular-italic.ttf'),
      fontStyle: 'italic',
    },
    {src: join(packageDirectory, 'fonts', 'lato-bold.ttf'), fontWeight: 'bold'},
    {
      src: join(packageDirectory, 'fonts', 'lato-black.ttf'),
      fontWeight: 'heavy',
    },
    {
      src: join(packageDirectory, 'fonts', 'lato-bold-italic.ttf'),
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  ],
});
Font.register({
  family: 'Fira Sans',
  fonts: [
    {src: join(packageDirectory, 'fonts', 'fira-sans-regular.ttf')},
    {
      src: join(packageDirectory, 'fonts', 'fira-sans-bold.ttf'),
      fontWeight: 'bold',
    },
  ],
});
Font.register({
  family: 'Fira Code',
  fonts: [
    {src: join(packageDirectory, 'fonts', 'fira-code-regular.ttf')},
    {
      src: join(packageDirectory, 'fonts', 'fira-code-bold.ttf'),
      fontWeight: 'bold',
    },
  ],
});

export const style = createTw({
  theme: {
    fontFamily: {
      sans: ['Lato'],
      mono: ['Fira Code'],
      roboto: ['Roboto Semicondensed'],
      fira: ['Fira Sans'],
    },
    extend: {
      fontSize: {
        /* eslint-disable @typescript-eslint/naming-convention */
        base: ['0.70834rem', {lineHeight: '1.25'}],
        lg: ['0.75rem', {lineHeight: '1.25'}],
        xl: ['0.875rem', {lineHeight: '1.25'}],
        '2xl': ['1.5rem', {lineHeight: '1.25'}],
        '3xl': ['3rem', {lineHeight: '1.25'}],
        /* eslint-enable @typescript-eslint/naming-convention */
      },
    },
  },
});
