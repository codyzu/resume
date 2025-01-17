import {packageDirectorySync} from 'pkg-dir';

function getPackageDirectory(): string {
  const directory = packageDirectorySync();
  if (!directory) {
    throw new Error('Could not find package directory');
  }

  return directory;
}

export const packageDirectory = getPackageDirectory();
