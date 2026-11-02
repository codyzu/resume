import process from 'node:process';
import {execFileSync} from 'node:child_process';

if (process.versions.node.split('.', 1)[0] !== '26') {
  throw new Error('Use Node 26 (see .nvmrc) before running setup.');
}

for (const command of ['python3', 'pdfinfo', 'pdftotext', 'pdftoppm']) {
  try {
    execFileSync(command, [command === 'python3' ? '--version' : '-v'], {
      stdio: 'pipe',
    });
  } catch {
    throw new Error(
      `Missing ${command}. Install Python 3 and Poppler; see README.md.`,
    );
  }
}

const pnpm = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
for (const arguments_ of [
  ['install', '--frozen-lockfile'],
  ['--dir', 'site', 'install', '--frozen-lockfile'],
]) {
  execFileSync(pnpm, arguments_, {
    stdio: 'inherit',
    env: {...process.env, CI: 'true'},
    shell: process.platform === 'win32',
  });
}
