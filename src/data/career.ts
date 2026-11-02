import {type CareerEntry} from './types.js';

// Existing main-branch wording; provenance and current status still require review.
export const career = {
  'nearform-community': {
    role: 'Developer Relations Community Lead',
    organization: 'Nearform',
    location: 'Remote',
    dateRange: '2024 - Present',
    contributions: {
      'open-source-leadership':
        'Led open-source initiatives for Node.js and OpenJS projects, driving community engagement and recognition.',
      mentoring:
        'Mentored engineers in JavaScript and React, enhancing technical depth and productivity.',
      'contributor-support':
        'Guided employees in contributing to high-profile OSS projects like Node.js and Fastify.js.',
      'content-process':
        'Streamlined content processes, boosting organizational contributions.',
      'speaking-program':
        'Designed and executed a global event speaking program, resulting in significant increase in speaker representation from Nearform at international conferences.',
      'community-recognition':
        'Championed OSS engagement, mentoring employees to contribute to high-profile projects like Node.js and Fastify.js, leading to recognition within the OpenJS Foundation.',
      'content-revamp':
        'Lead technical content process revamping to foster content contributions throughout the organization.',
      'steering-and-policy':
        'Participated in OSS steering committee and crafted internal policies and programs.',
      'workflow-automation':
        'Customized and automated workflows by integrating systems and creating business insight dashboards.',
      'cross-functional-collaboration':
        'Facilitated cross-functional collaboration between engineering, marketing, sales, and talent.',
    },
  },
  'nearform-devrel': {
    role: 'Staff Developer Relations Engineer',
    organization: 'Nearform',
    location: 'Remote',
    dateRange: '2022 - 2024',
    contributions: {
      'node-contributions':
        'Facilitated Node.js contributions as an OpenJS Foundation member, fostering collaboration and innovation.',
      workshops:
        'Delivered technical workshops for clients, teams, and conferences, promoting best practices in JavaScript and Node.js.',
      accessibility:
        'Maintained the FINOS a11y-theme-builder project, enhancing accessibility in financial platforms.',
      'technical-content':
        'Produced high-impact technical content, including conference talks and blogs, elevating Nearform\u2019s thought leadership.',
      speaking: 'International conference speaking.',
      video:
        'Video content creation including a series of Fireside Chats with tech leaders.',
      'pre-sales': 'Performed pre-sales demos and lead generation at events.',
      'event-partnerships':
        'Partnered with external stakeholders to align community event messaging with strategic goals.',
      'social-media':
        'Managed social media campaigns and technical content to promote open-source projects, increasing online engagement.',
    },
  },
  'nearform-engineering': {
    role: 'Senior Full-Stack Engineer',
    organization: 'Nearform',
    location: 'Remote',
    dateRange: '2019 - 2022',
    contributions: {
      'design-system':
        'Developed a "Design System of Systems," unifying branding and improving delivery for a global telecom client.',
      'architecture-reviews':
        'Reviewed architectures for cloud-based applications, optimizing performance and reliability.',
      cms: 'Built a serverless CMS with TypeScript and GraphQL, reducing deployment time.',
      'react-applications':
        'Engineered scalable React applications with cloud integrations, enhancing user experience.',
      'web-development-course':
        'Developed and taught cutting edge Web Development course teaching 3rd year students how to develop full-stack web applications using JavaScript technologies and deployed to GCP. Ensured alignment with involving industry standards.',
    },
  },
  teaching: {
    role: 'University Instructor',
    organization: 'Institut Universitaire de Technology',
    location: 'Annecy, France',
    dateRange: '2018-Present',
    contributions: {
      'web-teaching':
        'Educated ~150 students annually in full-stack web development using JavaScript and GCP, aligning courses with industry standards.',
      mentoring:
        'Mentored students into industry roles, achieving a 90% placement rate within six months of graduation.',
      'enterprise-simulations':
        'Led enterprise simulations, teaching resource management and market strategy.',
      'course-design':
        'Developed and taught cutting edge Web Development course teaching 3rd year students how to develop full-stack web applications using JavaScript technologies and deployed to GCP. Ensured alignment with involving industry standards.',
    },
  },
  hubware: {
    role: 'Lead Developer',
    organization: 'Hubware',
    location: 'Remote',
    dateRange: '2017-2018',
    contributions: {
      'team-leadership':
        'Directed a distributed team to develop an AI-driven customer support solution, boosting productivity for enterprise clients.',
      'cloud-architecture':
        'Architected scalable backend services and implemented best practices for cloud deployment.',
    },
  },
  axway: {
    role: 'Senior Software Engineer',
    organization: 'Axway & Appcelerator',
    location: 'Annecy, France',
    dateRange: '2013-2017',
    contributions: {
      'api-builder':
        'Contributed to API builder for rapidly building APIs with a a scalable cloud service and developed CI/CD pipelines, enhancing developer productivity.',
      'performance-metrics':
        'Designed a performance metrics pipeline in Python and contributed to enterprise Java applications for API management.',
    },
  },
  beautec: {
    role: 'Solution Developer',
    organization: 'BeauTec',
    location: 'Annecy, France',
    dateRange: '2011-2013',
    contributions: {
      dashboards:
        'Delivered real-time dashboards and reporting systems, improving operational visibility for manufacturing and logistics clients.',
      integration:
        'Developed scalable integration frameworks for enterprise systems.',
    },
  },
  hamilton: {
    role: 'Senior Software Engineer',
    organization: 'Hamilton Company',
    location: 'Reno, Nevada, USA',
    dateRange: '2009-2011',
    contributions: {
      'firmware-and-drivers':
        'Designed C++ firmware and Windows CE drivers for laboratory devices, ensuring ISO compliance.',
      'robotics-api':
        'Developed APIs for robotic components and created secure firmware update protocols.',
      'hardware-interfaces':
        'Developed firmware for robotic laboratory devices, integrating with low level memory mapped I/O devices.',
      'driver-interop':
        'Developed drivers for Windows CE providing .NET APIs to low-level firmware and secure firmware updates.',
      'firmware-architecture':
        'Architected C++ based firmware exposing high level APIs to control robotic components.',
    },
  },
  igt: {
    role: 'Firmware Engineer',
    organization: 'International Game Technology',
    location: 'Reno, Nevada, USA',
    dateRange: '2007-2008',
    contributions: {
      'usb-firmware':
        'Engineered C and assembly firmware for integrating USB devices into gaming machines.',
      'test-tools':
        'Built .NET-based test tools to validate firmware functionality.',
    },
  },
  'open-source': {
    role: 'Open Source Ambassador, Maintainer, Community Builder',
    organization: 'FINOS / OpenJS Foundation',
    location: '',
    dateRange: '2019-Present',
    contributions: {
      'ecosystem-contributions':
        'Led contributions to foundational projects like Node.js and a11y-theme-builder, driving accessibility and ecosystem innovation.',
      specifications:
        'Collaborated with community members to create specifications and technical documentation, fostering global adoption.',
      inclusion:
        'Advocated for diversity and inclusion at events such as Grace Hopper Open Source Day, increasing diverse participation.',
      events:
        'Participated in and organized global events and fostered attendee engagement and interactions',
    },
  },
} satisfies Record<string, CareerEntry>;

export type CareerId = keyof typeof career;
