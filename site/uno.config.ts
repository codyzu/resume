import {defineConfig} from 'unocss';
import {presetUno} from '@unocss/preset-uno';
import {presetIcons} from '@unocss/preset-icons';
import {presetTypography} from '@unocss/preset-typography';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  theme: {fontFamily: {sans: 'system-ui, sans-serif'}},
  preflights: [{getCSS: () => '*,::before,::after{box-sizing:border-box}body{margin:0}a:focus-visible{outline:2px solid white;outline-offset:4px}'}],
  safelist: ['text-white', 'flex', 'flex-row', 'items-center', 'gap-2', 'i-carbon-document-pdf', 'w-8', 'h-8'],
  cli: {
    entry: {
      patterns: ['*.html'],
      outFile: '../output/css/uno.css',
    },
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

  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
