import {defineConfig} from 'unocss';
import {presetUno} from '@unocss/preset-uno';
import {presetIcons} from '@unocss/preset-icons';
import {presetTypography} from '@unocss/preset-typography';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';
import {presetWebFonts} from '@unocss/preset-web-fonts';

export default defineConfig({
  cli: {
    entry: {
      patterns: ['*.html'],
      outFile: 'uno.css',
    }, // CliEntryItem | CliEntryItem[]
  },
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetWebFonts({
      // Prefer bunny provider, but it seems to be broken with 2 theme overrides (only loads the first)
      provider: 'google',
      fonts: {
        mono: ['Noto Sans Mono'],
        sans: [
          {
            name: 'Nunito',
            weights: ['400', '600', '800'],
          },
        ],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: {
    panel:
      'bg-gray-8 rounded gap-2 p-2 bg-gradient-to-b bg-gradient-stops-[black,rgb(31_41_55_/_0)_3.5rem,rgb(31_41_55_/_0)_4rem_100%]',
    section: 'gap-2',
    button:
      'px-2 py-1 bg-gray-7 rounded gap-2 flex flex-row items-center justify-center border-1 border-white text-sm focus:bg-blue-8 active:bg-black focus:outline-none',
    'icon-button': 'w-4 h-4',
  },
});

type CliEntryItem = {
  /**
   * Glob patterns to match files
   */
  patterns: string[];
  /**
   * The output filename for the generated UnoCSS file
   */
  outFile: string;
};
