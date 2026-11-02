import {copyFile, mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import {packageDirectory} from './utils/package-dir.js';
import {publicVersions, variants} from './variants.js';

const source = join(packageDirectory, 'site');
const destination = join(packageDirectory, 'output/site');
// Rebuild an isolated publication directory; never copy arbitrary local PDFs.
await rm(destination, {recursive: true, force: true});
await mkdir(join(destination, 'downloads'), {recursive: true});
const links: string[] = [];
for (const version of publicVersions) {
  const variant = variants[version];
  // Render sequentially to limit peak PDF renderer memory.
  // eslint-disable-next-line no-await-in-loop
  await variant.render(join(destination, 'downloads', variant.filename));
  links.push(
    `<a class="text-white flex flex-row items-center gap-2" href="./downloads/${variant.filename}"><span aria-hidden="true" class="i-carbon-document-pdf w-8 h-8"></span>${variant.label} (PDF)</a>`,
  );
}

const template = await readFile(join(source, 'index.html'), 'utf8');
if (!template.includes('<!-- downloads -->'))
  throw new Error('Missing download-list placeholder');
await writeFile(
  join(destination, 'index.html'),
  template.replace('<!-- downloads -->', links.join('\n')),
);
await Promise.all([
  copyFile(
    join(packageDirectory, 'output/css/uno.css'),
    join(destination, 'uno.css'),
  ),
  copyFile(join(source, 'docs.svg'), join(destination, 'docs.svg')),
]);

await writeFile(join(destination, '.nojekyll'), '');
console.log(`Public site: ${destination}`);
