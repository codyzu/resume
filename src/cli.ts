import {resolve} from 'node:path';
import {packageDirectory} from './utils/package-dir.js';
import {isVersion, publicVersions, variants} from './variants.js';
import {type Version} from './version.js';

export function parseArguments(arguments_: string[]) {
  let versions: Version[] | undefined;
  let publicOnly = false;
  let outputDirectory = resolve(packageDirectory, 'output/pdf');
  let help = false;
  for (let index = 0; index < arguments_.length; index++) {
    const argument = arguments_[index];
    switch (argument) {
      case '--variant': {
        const value = arguments_[++index];
        if (!value || !isVersion(value)) {
          throw new Error(`Unknown or missing variant: ${value ?? ''}`);
        }

        versions ??= [];
        if (!versions.includes(value)) {
          versions.push(value);
        }

        break;
      }

      case '--out-dir': {
        const value = arguments_[++index];
        if (!value || value.startsWith('--')) {
          throw new Error('--out-dir requires a directory');
        }

        outputDirectory = resolve(value);
        break;
      }

      case '--public': {
        publicOnly = true;
        break;
      }

      case '--help': {
        help = true;
        break;
      }

      default: {
        throw new Error(`Unknown argument: ${argument}`);
      }
    }
  }

  versions ??= publicOnly
    ? [...publicVersions]
    : Object.keys(variants).filter((value) => isVersion(value));
  if (
    publicOnly &&
    versions.some((version) => !publicVersions.includes(version))
  ) {
    throw new Error('Selected variant is not approved for publication');
  }

  return {versions, outputDirectory, help};
}
