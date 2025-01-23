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
        // Mono: ['Noto Sans Mono'],
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
