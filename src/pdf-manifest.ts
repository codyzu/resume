import {publicVersions, variants} from './variants.js';
import {type Version} from './version.js';

console.log(
  JSON.stringify(
    Object.entries(variants).map(([version, variant]) => ({
      version,
      filename: variant.filename,
      public: publicVersions.includes(version as Version),
    })),
  ),
);
