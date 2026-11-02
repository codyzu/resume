import {type PublicVersion} from '../version.js';

type SkillSection = {category: string; items: string[]};

export const skills: Record<PublicVersion, SkillSection[]> = {
  dev: [
    {
      category: 'Applications & data',
      items: [
        'TypeScript, JavaScript, Node.js, React, Fastify, GraphQL; PostgreSQL schema design, SQL and migrations.',
      ],
    },
    {
      category: 'Recent web work',
      items: [
        'Astro, UnoCSS, GitLab CI/CD; Playwright content, visual regression and accessibility checks.',
      ],
    },
    {
      category: 'Cloud & delivery',
      items: [
        'Docker, Kubernetes application deployment, GCP and AWS; production troubleshooting, InfluxDB/Grafana.',
      ],
    },
    {
      category: 'Earlier foundations',
      items: [
        'C#/.NET enterprise integration (2011-13); Java/OSGi (2013-17); C/C++ firmware (2007-11). Python tests, scripts and sensor APIs.',
      ],
    },
  ],
  devrel: [
    {
      category: 'Community',
      items: [
        'Open-source participation, stakeholder engagement, event strategy, technical content, conference speaking and workshops.',
      ],
    },
    {
      category: 'Leadership',
      items: [
        'Speaking programs, cross-functional coordination, mentoring, budgets and community operations.',
      ],
    },
    {
      category: 'Hands-on technical',
      items: [
        'JavaScript/TypeScript, React, Node.js, GraphQL, PostgreSQL; Astro/UnoCSS, GitLab CI/CD and Playwright.',
      ],
    },
    {
      category: 'Earlier engineering',
      items: [
        'Earlier Java/OSGi, C#/.NET and C/C++ firmware; recent work centers on web development and integration.',
      ],
    },
  ],
  hw: [
    {
      category: 'Community',
      items: [
        'Stakeholder engagement, events, technical content, speaking programs, budgets, mentoring and open-source participation.',
      ],
    },
    {
      category: 'Recent technical work',
      items: [
        'Xen demo integration: Yocto, Zephyr and Python sensor API. Website: Astro/UnoCSS, GitLab CI/CD, Playwright.',
      ],
    },
    {
      category: 'Earlier systems work',
      items: [
        'C/C++ ARM firmware, Windows CE drivers and C# interop (2009-11); Java/OSGi (2013-17). Distinct from recent web work.',
      ],
    },
    {
      category: 'Applications',
      items: ['JavaScript/TypeScript, Node.js, React, GraphQL and PostgreSQL.'],
    },
  ],
};

export const hwCommunitySkills = skills.hw;
