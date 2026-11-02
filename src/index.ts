import process from 'node:process';
import {mkdir} from 'node:fs/promises';
import {join} from 'node:path';
import {parseArguments} from './cli.js';
import {variants} from './variants.js';

const options = parseArguments(process.argv.slice(2));
if (options.help) {
  console.log(
    'Usage: pnpm render [--variant dev|devrel|hw] [--out-dir PATH] [--public]\nRepeat --variant to select multiple CVs. Default: all variants in output/pdf.',
  );
} else {
  await mkdir(options.outputDirectory, {recursive: true});
  for (const version of options.versions) {
    const variant = variants[version];
    const outputPath = join(options.outputDirectory, variant.filename);
    // Render sequentially to limit peak PDF renderer memory.
    // eslint-disable-next-line no-await-in-loop
    await variant.render(outputPath);
    console.log(`Rendered ${version}: ${outputPath}`);
  }
}
