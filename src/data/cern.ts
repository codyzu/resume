import {type CernVersion} from '../version.js';
import {type CvProfile} from './types.js';
import {type CareerId} from './career.js';

export const cernProfiles = {
  'cern-it': {
    reference: 'IT-CA-CET-2026-210-LD',
    title: 'Software Engineer | Integration & Service Reliability',
    summary:
      'Software engineer and technical leader with engineering experience spanning firmware, enterprise integration and cloud applications since 2007. Hands-on work includes PostgreSQL, React/Node.js, Kubernetes application deployment, automation and observability. Combines hands-on delivery with technical leadership and international collaboration; developer-relations and community roles since 2022 include recent website engineering.',
    skills: [
      [
        'Applications & data',
        'TypeScript, JavaScript, Node.js, React, GraphQL; PostgreSQL schema design, SQL, migrations and integration.',
      ],
      [
        'Delivery & operations',
        'Docker, Kubernetes application deployment, GCP, GitLab CI/CD, Playwright; production troubleshooting, InfluxDB/Grafana.',
      ],
      [
        'Earlier foundations',
        'Substantial C#/.NET enterprise integration at BeauTec (2011-13); Java/OSGi at Axway (2013-17). Python performance tests, scripts and sensor APIs.',
      ],
    ],
    pages: [
      ['xen', 'nearform', 'hubware'],
      ['axway', 'beautec', 'hamilton', 'igt'],
    ] satisfies [CareerId[], CareerId[]],
  },
  'cern-control': {
    reference: 'TE-MPE-CB-2026-213-LD',
    title: 'Software Engineer | Hardware Interfaces & Testing',
    summary:
      'Software engineer and technical leader with earlier C/C++ firmware, drivers and hardware-interface development, followed by Java/OSGi and web application engineering. Brings requirements and validation documentation, automated testing, deployment troubleshooting and mentoring. Recent work includes an embedded Xen demonstration and website CI/testing, alongside a principal community-management role.',
    skills: [
      [
        'Systems foundations',
        'C/C++ ARM firmware, Windows CE drivers, C# interop (Hamilton, 2009-11); Java/OSGi (Axway, 2013-17). Substantial earlier roles; recent development centers on web applications and integration.',
      ],
      [
        'Recent technical work',
        'TypeScript/JavaScript, Astro, React, Node.js; Playwright and GitLab CI/CD. Xen demo integration using Yocto, Zephyr and a Python sensor API (2025).',
      ],
      [
        'Engineering practice',
        'Requirements, design and validation documentation; version control, CI, performance testing, observability, live application support and technical mentoring.',
      ],
    ],
    pages: [
      ['xen', 'nearform', 'hubware'],
      ['axway', 'beautec', 'hamilton', 'igt'],
    ] satisfies [CareerId[], CareerId[]],
  },
} satisfies Record<CernVersion, CvProfile>;
