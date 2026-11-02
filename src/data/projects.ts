import {type List} from '../components/list/List.js';

export const projects: List[] = [
  {
    header: 'Full-Stack Application Development',
    items: [
      {
        text: 'Technical lead assignment on an Azure executive recruitment platform (2024): integrated OpenFGA authorization alongside Auth0 authentication during development.',
      },
      {
        text: 'Contributed React components, tooling and PostgreSQL migrations to Orion, a Gatsby/Hasura CMS used by EFQM.',
      },
      {
        text: 'Delivered performance and architecture audits of Node.js/TypeScript applications, identifying bottlenecks and recommending changes.',
      },
    ],
  },
  {
    header: 'Open Source Contributions',
    items: [
      {
        header: 'Node.js Contributor Support',
        text: 'Contributed documentation. Triaged issues to find issues suitable for first time contributors. Conducted workshops to onboard contributors to Node.js. Served on the OpenJS Cross Project Council.',
      },
      {
        header: 'GraphQL API Implementation',
        text: 'Designed and deployed GraphQL APIs for enterprise-scale applications. Integrated with React front-end for real-time data updates.',
      },
      {
        header: 'React-Based Design System',
        text: 'Created modular, reusable components for a cross-platform, cross-channel design system.',
      },
    ],
  },
];
