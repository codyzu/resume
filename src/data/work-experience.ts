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

export const workExperience: Record<Version, WorkExperience[]> = {
  dev: [
    select('nearform-community', [
      'open-source-leadership',
      'mentoring',
      'contributor-support',
      'content-process',
    ]),
    select('nearform-devrel', [
      'node-contributions',
      'workshops',
      'accessibility',
      'technical-content',
    ]),
    select('nearform-engineering', [
      'design-system',
      'architecture-reviews',
      'cms',
      'react-applications',
    ]),
    select('teaching', ['web-teaching', 'mentoring', 'enterprise-simulations']),
    select('hubware', ['team-leadership', 'cloud-architecture']),
    select('axway', ['api-builder', 'performance-metrics']),
    select('beautec', ['dashboards', 'integration']),
    select('hamilton', ['firmware-and-drivers', 'robotics-api']),
    select('igt', ['usb-firmware', 'test-tools']),
  ],
  devrel: [
    select('nearform-community', [
      'open-source-leadership',
      'speaking-program',
      'community-recognition',
      'content-revamp',
    ]),
    select('nearform-devrel', [
      'node-contributions',
      'workshops',
      'accessibility',
      'technical-content',
      'speaking',
      'video',
      'pre-sales',
    ]),
    select('nearform-engineering', [
      'design-system',
      'architecture-reviews',
      'cms',
      'react-applications',
    ]),
    select('teaching', [
      'course-design',
      'web-teaching',
      'mentoring',
      'enterprise-simulations',
    ]),
    select('hubware', ['team-leadership', 'cloud-architecture']),
    select('axway', ['api-builder', 'performance-metrics']),
    select('beautec', ['dashboards', 'integration']),
    select('hamilton', ['firmware-and-drivers', 'robotics-api']),
    select('igt', ['usb-firmware', 'test-tools']),
  ],
  hw: [
    select('nearform-community', [
      'open-source-leadership',
      'speaking-program',
      'community-recognition',
      'content-revamp',
      'steering-and-policy',
      'workflow-automation',
      'cross-functional-collaboration',
    ]),
    select('open-source', [
      'ecosystem-contributions',
      'specifications',
      'inclusion',
      'events',
    ]),
    select('nearform-devrel', [
      'node-contributions',
      'workshops',
      'accessibility',
      'technical-content',
      'speaking',
      'video',
      'pre-sales',
      'event-partnerships',
      'social-media',
    ]),
    select('nearform-engineering', [
      'design-system',
      'architecture-reviews',
      'cms',
      'react-applications',
      'web-development-course',
    ]),
    select('teaching', [
      'course-design',
      'web-teaching',
      'mentoring',
      'enterprise-simulations',
    ]),
    select('hubware', ['team-leadership', 'cloud-architecture']),
    select('axway', ['api-builder', 'performance-metrics']),
    select('beautec', ['dashboards', 'integration']),
    select('hamilton', [
      'hardware-interfaces',
      'driver-interop',
      'firmware-architecture',
    ]),
    select('igt', ['usb-firmware', 'test-tools']),
  ],
};
