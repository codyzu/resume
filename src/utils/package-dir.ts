import {packageDirectorySync} from 'pkg-dir';

function getPackageDirectory(): string {
  const directory = packageDirectorySync({cwd: import.meta.dirname});
  if (!directory) {
    throw new Error('Could not find package directory');
  }

  return directory;
}

export const packageDirectory = getPackageDirectory();
