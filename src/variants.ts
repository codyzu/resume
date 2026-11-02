import {renderCvDeveloper} from './CvDeveloper.js';
import {renderCvDeveloperRelations} from './CvDeveloperRelations.js';
import {renderCvHardwareCommunity} from './CvHardwareCommunity.js';
import {type Version} from './version.js';

export const variants = {
  dev: {
    label: 'Software engineering',
    filename: 'cv-cody-zuschlag-dev.pdf',
    render: renderCvDeveloper,
  },
  devrel: {
    label: 'Developer relations',
    filename: 'cv-cody-zuschlag-devrel.pdf',
    render: renderCvDeveloperRelations,
  },
  hw: {
    label: 'Hardware community',
    filename: 'cv-cody-zuschlag-community.pdf',
    render: renderCvHardwareCommunity,
  },
} satisfies Record<
  Version,
  {label: string; filename: string; render: (path: string) => Promise<unknown>}
>;

// Publication is opt-in: adding a renderer must never automatically publish it.
export const publicVersions: readonly Version[] = ['dev', 'devrel', 'hw'];

export function isVersion(value: string): value is Version {
  return Object.hasOwn(variants, value);
}
