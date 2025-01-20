import {type Version} from '../version.js';

const developerSkills: Array<{category: string; items: string[]}> = [
  {
    category: 'Programming Languages',
    items: ['JavaScript & TypeScript', 'Python', 'Java', 'C#', 'C++'],
  },
  {
    category: 'Frameworks',
    items: ['Node.js', 'React', 'React Native', 'Fastify'],
  },
  {
    category: 'Cloud Platforms',
    items: ['Google Cloud', 'Firebase', 'AWS', 'Azure'],
  },
  {
    category: 'DevOps & CI/CD',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'CircleCI'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Firebase Firestore'],
  },
  {
    category: 'Languages',
    items: ['English (native)', 'French (fluent)'],
  },
];

const devrelSkills: Array<{category: string; items: string[]}> = [
  {
    category: 'Community',
    items: [
      'Open Source Strategy',
      'Community Building',
      'Fostering OSS Participation',
      'Technical Content Development',
      'Event Strategy',
      'Conference Speaking',
      'Workshops',
      'Panel Moderation',
      'Audience Engagement',
      'Technical Blogs',
      'Short-form Video Content',
      'Teaching',
    ],
  },
  {
    category: 'Technical',
    items: [
      'JavaScript (Node.js, React, React Native)',
      'GraphQL APIs',
      'Modern Web Standards',
      'Google Cloud Platform + AWS',
      'Firebase',
    ],
  },
  {
    category: 'Leadership',
    items: [
      'Team Management',
      'Mentoring',
      'Agile, Cross-Functional Architecture',
    ],
  },
  {
    category: 'Languages',
    items: ['English (native)', 'French (fluent)'],
  },
];

export const skills: Record<
  Version,
  Array<{category: string; items: string[]}>
> = {
  dev: developerSkills,
  devrel: devrelSkills,
  hw: [],
};
