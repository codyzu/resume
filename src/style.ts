import {join} from 'node:path';
import {Font} from '@react-pdf/renderer';
import {createTw} from 'react-pdf-tailwind';
import {packageDirectorySync} from 'pkg-dir';

const packageDirectory = packageDirectorySync();

if (!packageDirectory) {
  throw new Error('Could not find package directory');
}

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
      colors: {
        custom: '#bada55',
      },
    },
  },
});
