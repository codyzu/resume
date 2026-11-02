import {type CernVersion} from '../version.js';
import {type CvProfile} from './types.js';
import {type CareerId} from './career.js';

export const cernProfiles = {
  'cern-it': {
    reference: 'IT-CA-CET-2026-210-LD',
    title: 'Senior Software Engineer & Technical Leader',
    summary:
      'Nearly 20 years engineering complex systems, from embedded firmware to enterprise integration and distributed cloud applications. Combines C#/.NET and SQL integration, Node.js services and Kubernetes delivery with production troubleshooting, automation and observability. Led engineering teams, shaped architecture and mentored developers. Brings hands-on implementation and operational judgment to reliable services, backed by international engineering and open-source collaboration.',
    skills: [
      [
        'Enterprise integration',
        'C#, ASP.NET, ADO.NET; SQL Server, Oracle PL/SQL; SAP, OPC, OSIsoft PI. PostgreSQL schema design, SQL and migrations.',
      ],
      [
        'Delivery & operations',
        'Docker, Kubernetes application deployment, GCP, GitLab CI/CD, Playwright; production troubleshooting, Python performance tests, InfluxDB/Grafana, capacity planning.',
      ],
      [
        'Software & design',
        'Node.js, TypeScript, JavaScript, React, GraphQL; architecture reviews, Auth0 authentication, OpenFGA authorization, technical leadership and mentoring.',
      ],
    ],
    pages: [
      ['xen', 'nearform', 'hubware'],
      ['axway', 'beautec', 'hamilton', 'igt'],
    ] satisfies [CareerId[], CareerId[]],
  },
  'cern-control': {
    reference: 'TE-MPE-CB-2026-213-LD',
    title: 'Senior Software Engineer | Embedded Systems & Reliability',
    summary:
      'Nearly 20 years of software engineering spanning embedded systems, enterprise integration and cloud services. Developed ARM firmware, C/C++ hardware interfaces and Windows CE drivers for Hamilton laboratory equipment. Combines requirements, design and validation discipline with Java/OSGi, automated testing and production troubleshooting. Led engineering teams, shaped architecture and mentored developers; brings systems depth and engineering judgment across hardware, software and operations.',
    skills: [
      [
        'Systems & interfaces',
        'C/C++, ARM firmware, Windows CE drivers, boot-related code, C# interop; Java/OSGi. Hardware interfaces and firmware updates for laboratory devices.',
      ],
      [
        'Engineering discipline',
        'Requirements, design and validation documentation; ISO 9001 processes, automated testing, GitLab CI/CD, Python performance tests, observability and production troubleshooting.',
      ],
      [
        'Technical leadership',
        'Xen demo (2025): Raspberry Pi, Yocto, Zephyr, Python API. Node.js, TypeScript; team leadership, architecture reviews and mentoring.',
      ],
    ],
    pages: [
      ['xen', 'nearform', 'hubware'],
      ['axway', 'beautec', 'hamilton', 'igt'],
    ] satisfies [CareerId[], CareerId[]],
  },
} satisfies Record<CernVersion, CvProfile>;
