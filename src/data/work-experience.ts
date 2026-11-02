import {type Version} from '../version.js';
import {career, type CareerId} from './career.js';
import {type WorkExperience} from './types.js';

function select<Id extends CareerId>(
  id: Id,
  contributions: Array<keyof (typeof career)[Id]['contributions']>,
): WorkExperience {
  const job = career[id];
  return {
    id,
    role: job.role,
    organization: job.organization,
    location: job.location,
    dateRange: job.dateRange,
    experiences: contributions.map((key) => {
      const text = (job.contributions as Record<string, string>)[String(key)];
      if (!text) throw new Error(`Unknown contribution ${id}/${String(key)}`);
      return text;
    }),
  };
}

export const supportingExperience = {
  teaching: select('teaching', ['teaching-overview']),
  openSource: select('open-source', ['selected-service']),
  service: select('open-source', ['technical-speaking', 'selected-service']),
};

const cernIt = [
  select('xen', ['website-delivery', 'ci-testing', 'community']),
  select('nearform', [
    'role-progression',
    'authorization-leadership',
    'cms-engineering',
    'architecture-reviews',
    'engineering-mentorship',
  ]),
  select('hubware', [
    'engineering-leadership',
    'production-support',
    'distributed-services',
  ]),
  select('axway', ['java-osgi', 'performance-metrics', 'api-builder']),
  select('beautec', ['integration', 'interfaces']),
  select('hamilton', ['firmware-and-drivers', 'driver-interop']),
  select('igt', ['usb-firmware']),
];
const cernControl = [
  select('xen', [
    'embedded-demo',
    'ci-testing',
    'website-delivery',
    'community',
  ]),
  select('nearform', [
    'role-progression',
    'authorization-leadership',
    'architecture-reviews',
    'engineering-mentorship',
  ]),
  select('hubware', ['engineering-leadership', 'production-support']),
  select('axway', ['java-osgi', 'performance-metrics', 'api-builder']),
  select('beautec', ['integration', 'interfaces']),
  select('hamilton', [
    'firmware-and-drivers',
    'driver-interop',
    'requirements-validation',
  ]),
  select('igt', ['usb-firmware']),
];

export const workExperience: Record<Version, WorkExperience[]> = {
  'cern-it': cernIt,
  'cern-control': cernControl,
  dev: [
    select('xen', ['community', 'website', 'ci-testing']),
    select('nearform', [
      'progression',
      'cms',
      'authorization',
      'architecture-reviews',
      'design-system',
    ]),
    select('hubware', [
      'team-leadership',
      'production-support',
      'cloud-architecture',
    ]),
    select('axway', ['java-osgi', 'performance-metrics', 'api-builder']),
    select('beautec', ['integration', 'interfaces']),
    select('hamilton', ['firmware-and-drivers', 'driver-interop']),
    select('igt', ['usb-firmware']),
  ],
  devrel: [
    select('xen', ['community', 'website', 'ci-testing']),
    select('nearform', [
      'progression',
      'speaking-program',
      'content-revamp',
      'workshops',
      'design-system',
    ]),
    select('hubware', ['team-leadership']),
    select('axway', ['performance-metrics']),
    select('beautec', ['integration']),
    select('hamilton', ['firmware-and-drivers']),
    select('igt', ['usb-firmware']),
  ],
  hw: [
    select('xen', ['community', 'embedded-demo', 'website', 'ci-testing']),
    select('nearform', [
      'progression',
      'speaking-program',
      'cross-functional-collaboration',
      'workflow-automation',
      'accessibility',
    ]),
    select('hubware', ['team-leadership']),
    select('axway', ['java-osgi']),
    select('beautec', ['interfaces']),
    select('hamilton', ['firmware-and-drivers', 'driver-interop']),
    select('igt', ['usb-firmware']),
  ],
};
