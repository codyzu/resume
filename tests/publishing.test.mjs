import process from 'node:process';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {mkdir, readFile, readdir, rm, writeFile} from 'node:fs/promises';
import {test} from 'node:test';
import {parseArguments} from '../lib/cli.js';
import {publicVersions, variants} from '../lib/variants.js';

test('new renderers stay private until explicitly allowlisted', () => {
  variants.private = {
    filename: 'private.pdf',
    label: 'Private',
    async render() {},
  };
  try {
    assert.ok(parseArguments([]).versions.includes('private'));
    assert.ok(!parseArguments(['--public']).versions.includes('private'));
    assert.throws(
      () => parseArguments(['--public', '--variant', 'private']),
      /not approved/v,
    );
  } finally {
    delete variants.private;
  }
});

test('public builds remove stale files and link only approved PDFs', async () => {
  // Public builds must not pick up files from the ordinary local output directory.
  await mkdir('output/pdf', {recursive: true});
  await writeFile('output/pdf/private-test.pdf', 'must not publish');
  await mkdir('output/site/downloads', {recursive: true});
  await writeFile('output/site/downloads/private.pdf', 'must not publish');
  try {
    execFileSync(process.execPath, ['lib/build-site.js']);
  } finally {
    await rm('output/pdf/private-test.pdf', {force: true});
  }

  const expected = publicVersions
    .map((version) => variants[version].filename)
    .toSorted((a, b) => a.localeCompare(b));
  const files = await readdir('output/site/downloads');
  assert.deepEqual(
    files.toSorted((a, b) => a.localeCompare(b)),
    expected,
  );
  const html = await readFile('output/site/index.html', 'utf8');
  const links = html
    .matchAll(/href="\.\/downloads\/(?<filename>[^"]+)"/gv)
    .map((match) => match.groups.filename)
    .toArray()
    .toSorted((a, b) => a.localeCompare(b));
  assert.deepEqual(links, expected);
  assert.ok(!html.includes('<!-- downloads -->'));
});
