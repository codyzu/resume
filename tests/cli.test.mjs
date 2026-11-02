import process from 'node:process';
import assert from 'node:assert/strict';
import {execFileSync, spawnSync} from 'node:child_process';
import {mkdtemp, readdir, rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {test} from 'node:test';
import {parseArguments} from '../lib/cli.js';

test('CLI rejects unknown variants, options and missing values', () => {
  for (const arguments_ of [
    ['--variant', 'private'],
    ['--variant'],
    ['--out-dir'],
    ['--out-dir', '--public'],
    ['--typo'],
  ]) {
    assert.throws(() => parseArguments(arguments_));
  }
});

test('CLI accepts repeated selection and deduplicates it', () => {
  assert.deepEqual(
    parseArguments(['--variant', 'hw', '--variant', 'dev', '--variant', 'hw'])
      .versions,
    ['hw', 'dev'],
  );
});

test('rendering from a different working directory writes only the selected variant', async () => {
  const directory = await mkdtemp(path.join(tmpdir(), 'cv-cli-'));
  try {
    const destination = path.join(directory, 'pdfs');
    execFileSync(
      process.execPath,
      [
        path.resolve('lib/index.js'),
        '--variant',
        'dev',
        '--out-dir',
        destination,
      ],
      {cwd: directory},
    );
    assert.deepEqual(await readdir(destination), ['cv-cody-zuschlag-dev.pdf']);
    const result = spawnSync(
      process.execPath,
      [path.resolve('lib/index.js'), '--variant', 'unknown'],
      {cwd: directory},
    );
    assert.notEqual(result.status, 0);
    const defaults = execFileSync(
      process.execPath,
      [
        '--input-type=module',
        '-e',
        `import {parseArguments} from ${JSON.stringify(new URL('../lib/cli.js', import.meta.url).href)}; console.log(parseArguments([]).outputDirectory);`,
      ],
      {cwd: directory, encoding: 'utf8'},
    );
    assert.equal(defaults.trim(), path.resolve('output/pdf'));
  } finally {
    await rm(directory, {recursive: true, force: true});
  }
});
