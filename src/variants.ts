import {renderCvCernIt, renderCvCernControl} from './CvCern.js';
import {renderCvDeveloper} from './CvDeveloper.js';
import {renderCvDeveloperRelations} from './CvDeveloperRelations.js';
import {renderCvHardwareCommunity} from './CvHardwareCommunity.js';
import {type Version} from './version.js';

export const variants = {
  'cern-it': {
    label: 'CERN collaboration services - IT-CA-CET-2026-210-LD',
    filename: 'cv-cody-zuschlag-it-ca-cet-2026-210-ld.pdf',
    render: renderCvCernIt,
  },
  'cern-control': {
    label: 'CERN control software - TE-MPE-CB-2026-213-LD',
    filename: 'cv-cody-zuschlag-te-mpe-cb-2026-213-ld.pdf',
    render: renderCvCernControl,
  },
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
