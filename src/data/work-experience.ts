import {type WorkExperience} from '../components/list/WorkExperience.js';
import {type Version} from '../version.js';

export const developerExperience: WorkExperience[] = [
  {
    role: 'Developer Relations Community Lead',
    organization: 'Nearform',
    location: 'Remote',
    dateRange: '2024 - Present',
    experiences: [
      'Led open-source initiatives for Node.js and OpenJS projects, driving community engagement and recognition.',
      'Mentored engineers in JavaScript and React, enhancing technical depth and productivity.',
      'Guided employees in contributing to high-profile OSS projects like Node.js and Fastify.js.',
      'Streamlined content processes, boosting organizational contributions.',
    ],
  },
  {
    role: 'Staff Developer Relations Engineer',
    organization: 'Nearform',
    location: 'Remote',
    dateRange: '2022 - 2024',
    experiences: [
      'Facilitated Node.js contributions as an OpenJS Foundation member, fostering collaboration and innovation.',
      'Delivered technical workshops for clients, teams, and conferences, promoting best practices in JavaScript and Node.js.',
      'Maintained the FINOS a11y-theme-builder project, enhancing accessibility in financial platforms.',
      'Produced high-impact technical content, including conference talks and blogs, elevating Nearform’s thought leadership.',
    ],
  },
  {
    role: 'Senior Full-Stack Engineer',
    organization: 'Nearform',
    location: 'Remote',
    dateRange: '2019 - 2022',
    experiences: [
      'Developed a "Design System of Systems," unifying branding and improving delivery for a global telecom client.',
      'Reviewed architectures for cloud-based applications, optimizing performance and reliability.',
      'Built a serverless CMS with TypeScript and GraphQL, reducing deployment time.',
      'Engineered scalable React applications with cloud integrations, enhancing user experience.',
    ],
  },
  {
    role: 'University Instructor',
    organization: 'Institut Universitaire de Technology',
    location: 'Annecy, France',
    dateRange: '2018-Present',
    experiences: [
      'Educated ~150 students annually in full-stack web development using JavaScript and GCP, aligning courses with industry standards.',
      'Mentored students into industry roles, achieving a 90% placement rate within six months of graduation.',
      'Led enterprise simulations, teaching resource management and market strategy.',
    ],
  },
  {
    role: 'Lead Developer',
    organization: 'Hubware',
    location: 'Remote',
    dateRange: '2017-2018',
    experiences: [
      'Directed a distributed team to develop an AI-driven customer support solution, boosting productivity for enterprise clients.',
      'Architected scalable backend services and implemented best practices for cloud deployment.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    organization: 'Axway & Appcelerator',
    location: 'Annecy, France',
    dateRange: '2013-2017',
    experiences: [
      'Contributed to API builder for rapidly building APIs with a a scalable cloud service and developed CI/CD pipelines, enhancing developer productivity.',
      'Designed a performance metrics pipeline in Python and contributed to enterprise Java applications for API management.',
    ],
  },
  {
    role: 'Solution Developer',
    organization: 'BeauTec',
    location: 'Annecy, France',
    dateRange: '2011-2013',
    experiences: [
      'Delivered real-time dashboards and reporting systems, improving operational visibility for manufacturing and logistics clients.',
      'Developed scalable integration frameworks for enterprise systems.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    organization: 'Hamilton Company',
    location: 'Reno, Nevada, USA',
    dateRange: '2009-2011',
    experiences: [
      'Designed C++ firmware and Windows CE drivers for laboratory devices, ensuring ISO compliance.',
      'Developed APIs for robotic components and created secure firmware update protocols.',
    ],
  },
  {
    role: 'Firmware Engineer',
    organization: 'International Game Technology',
    location: 'Reno, Nevada, USA',
    dateRange: '2007-2008',
    experiences: [
      'Engineered C and assembly firmware for integrating USB devices into gaming machines.',
      'Built .NET-based test tools to validate firmware functionality.',
    ],
  },
];

const developerRelationsExperience = structuredClone(developerExperience);
developerRelationsExperience[0].experiences = [
  developerExperience[0].experiences[0],
  'Designed and executed a global event speaking program, resulting in significant increase in speaker representation from Nearform at international conferences.',
  'Championed OSS engagement, mentoring employees to contribute to high-profile projects like Node.js and Fastify.js, leading to recognition within the OpenJS Foundation.',
  'Lead technical content process revamping to foster content contributions throughout the organization.',
];

developerRelationsExperience[1].experiences = [
  ...developerExperience[1].experiences,
  'International conference speaking.',
  'Video content creation including a series of Fireside Chats with tech leaders.',
  'Performed pre-sales demos and lead generation at events.',
];

developerRelationsExperience[3].experiences = [
  'Developed and taught cutting edge Web Development course teaching 3rd year students how to develop full-stack web applications using JavaScript technologies and deployed to GCP. Ensured alignment with involving industry standards.',
  ...developerRelationsExperience[3].experiences,
];

const hwCommunityExperience = [
  {
    ...developerRelationsExperience[0],
    experiences: [
      ...developerRelationsExperience[0].experiences,
      'Participated in OSS steering committee and crafted internal policies and programs.',
      'Customized and automated workflows by integrating systems and creating business insight dashboards.',
      'Facilitated cross-functional collaboration between engineering, marketing, sales, and talent.',
    ],
  },
  {
    role: 'Open Source Ambassador, Maintainer, Community Builder',
    organization: 'FINOS / OpenJS Foundation',
    location: '',
    dateRange: '2019-Present',
    experiences: [
      'Led contributions to foundational projects like Node.js and a11y-theme-builder, driving accessibility and ecosystem innovation.',
      'Collaborated with community members to create specifications and technical documentation, fostering global adoption.',
      'Advocated for diversity and inclusion at events such as Grace Hopper Open Source Day, increasing diverse participation.',
      'Participated in and organized global events and fostered attendee engagement and interactions',
    ],
  },
  ...structuredClone(developerRelationsExperience.slice(1)),
];

hwCommunityExperience[2].experiences = [
  ...hwCommunityExperience[2].experiences,
  'Partnered with external stakeholders to align community event messaging with strategic goals.',
  'Managed social media campaigns and technical content to promote open-source projects, increasing online engagement.',
];

hwCommunityExperience[3].experiences = [
  ...hwCommunityExperience[3].experiences,
  'Developed and taught cutting edge Web Development course teaching 3rd year students how to develop full-stack web applications using JavaScript technologies and deployed to GCP. Ensured alignment with involving industry standards.',
];

hwCommunityExperience.at(-2)!.experiences = [
  'Developed firmware for robotic laboratory devices, integrating with low level memory mapped I/O devices.',
  'Developed drivers for Windows CE providing .NET APIs to low-level firmware and secure firmware updates.',
  'Architected C++ based firmware exposing high level APIs to control robotic components.',
];

export const workExperience: Record<Version, WorkExperience[]> = {
  dev: developerExperience,
  devrel: developerRelationsExperience,
  hw: hwCommunityExperience,
};
