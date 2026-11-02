import {type CareerEntry} from './types.js';

const nearformEngineering = {
  cms: 'Orion CMS for EFQM: React/Gatsby components, tooling, Hasura/GraphQL integration, PostgreSQL schema design, SQL, migrations and development setup.',
  'design-system':
    'Contributed to a 70+ page TELUS design-system specification, multi-brand design-token build tooling, documentation and internal adoption presentations.',
  'architecture-reviews':
    'Audited large Node.js/TypeScript codebases for performance bottlenecks and architectural complexity; delivered findings and recommendations.',
};

const nearformCommunity = {
  'speaking-program':
    'Designed and ran an international conference speaking program for Nearform engineers.',
  'content-revamp':
    'Reworked technical content processes to support contributions across teams.',
  'workflow-automation':
    'Integrated systems and automated workflows, including business insight dashboards.',
  'cross-functional-collaboration':
    'Coordinated engineering, marketing, sales and talent stakeholders.',
};

const nearformDevrel = {
  workshops:
    'Delivered JavaScript, Node.js and React Native workshops for engineers and conference participants.',
  accessibility:
    'Contributed fixes to FINOS a11y-theme-builder, joined project meetings and presented it at conferences.',
  'technical-content':
    'Created technical talks, articles and demonstrations for international developer audiences.',
  'event-partnerships':
    'Worked with external stakeholders on community events.',
  'social-media':
    'Created social and technical content promoting open-source projects.',
};

// Shared career facts confirmed by the applicant; see docs/applications/cern.md.
export const career = {
  xen: {
    role: 'Community Manager',
    organization: 'Xen Project',
    dateRange: 'Feb 2025 - Present',
    location: 'Remote',
    contributions: {
      community:
        'Manage stakeholder engagement, meetings, budgets and conferences for the international Xen Project community.',
      website:
        'Migrated the website from Hugo/Sass to Astro/UnoCSS, maintaining deployment continuity; Hugo removed, visual redesign ongoing.',
      'ci-testing':
        'Substantially reworked existing GitLab CI/CD; added Playwright content, ARIA snapshot, visual regression and accessibility checks.',
      'embedded-demo':
        'Extended a Xen Troops Raspberry Pi demo in 2025 with a dashboard, sensor-reading domain and Python web API; integrated Yocto/Zephyr components and troubleshot the system.',
    },
  },
  nearform: {
    role: 'Software Engineering & Developer Relations',
    organization: 'Nearform',
    dateRange: 'Dec 2019 - Dec 2024',
    location: 'Remote',
    contributions: {
      ...nearformCommunity,
      ...nearformDevrel,
      ...nearformEngineering,
      progression:
        'Senior Software Engineer (2019-22); Developer Relations Engineer, then Staff (2022-24); Community Lead (May-Dec 2024). Technical lead assignment in 2024.',
      authorization:
        'Technical lead assignment, ghSMART (2024): supervised authorization proof of concept and personally integrated OpenFGA permissions alongside Auth0 authentication in an Azure application still in development.',
      mentoring:
        'Delivered workshops, mentored engineers and supported open-source participation during subsequent developer-relations and community roles.',
    },
  },
  hubware: {
    role: 'Lead Developer',
    organization: 'Hubware',
    dateRange: 'Mar 2017 - Nov 2019',
    location: 'Remote',
    contributions: {
      'team-leadership':
        'Technical lead in a five-developer team; built Node.js services in Docker and deployed applications on Google Kubernetes Engine.',
      'production-support':
        'Troubleshot restarting pods and slow database requests; supported live applications, including urgent after-hours issues, and helped establish CI for blue/green testing.',
      'cloud-architecture':
        'Built with managed PostgreSQL, Cloud Functions, Pub/Sub and Firestore; deployed applications on GKE.',
    },
  },
  axway: {
    role: 'Senior Software Engineer II',
    organization: 'Axway / Appcelerator',
    dateRange: 'Jun 2013 - Feb 2017',
    location: 'Annecy, France',
    contributions: {
      'java-osgi':
        'Contributed to Java/OSGi software in a 40+ developer project using Scrum of Scrums; later worked on Appcelerator following its acquisition.',
      'performance-metrics':
        'Wrote Python performance tests and VM test-setup scripts, built InfluxDB/Grafana dashboards and contributed a capacity-planning guide.',
      'api-builder':
        'Worked on deployment automation and Node.js/Docker applications; introduced PostgreSQL on a large Node.js project using Kubernetes.',
    },
  },
  beautec: {
    role: 'Solution Developer',
    organization: 'BeauTec (m:pro subsidiary)',
    dateRange: 'Mar 2011 - Jan 2013',
    location: 'Annecy, France',
    contributions: {
      integration:
        'Developed modular enterprise integrations in C#, ASP.NET and ADO.NET, using SQL Server and Oracle PL/SQL business logic.',
      interfaces:
        'Integrated SAP, OPC, SciForma and OSIsoft PI; contributed CI, source-control and process improvements as part of the m:pro team.',
      dashboards:
        'Developed real-time dashboards and reporting for manufacturing and logistics systems.',
    },
  },
  hamilton: {
    role: 'Senior Firmware Engineer',
    organization: 'Hamilton Company',
    dateRange: 'Jan 2009 - Mar 2011',
    location: 'Reno, Nevada, USA',
    contributions: {
      'firmware-and-drivers':
        'Developed C/C++ ARM firmware, hardware interfaces and Windows CE drivers on a vendor-supplied BSP for laboratory devices.',
      'driver-interop':
        'Exposed low-level operations to C# through interop/marshalling; implemented connected-device firmware updates and boot-related code.',
      'quality-process':
        'Contributed requirements, design and validation documentation; ensured own work followed ISO 9001 processes.',
      'robotics-api':
        'Implemented C# APIs for low-level device operations and firmware updates for connected devices.',
      'hardware-interfaces':
        'Developed C++ ARM firmware and memory-mapped hardware interfaces for robotic laboratory devices.',
      'firmware-architecture':
        'Developed firmware exposing APIs to control robotic components.',
    },
  },
  igt: {
    role: 'Firmware Engineer',
    organization: 'International Game Technology / IGT',
    dateRange: 'Jul 2007 - Dec 2008',
    location: 'Reno, Nevada, USA',
    contributions: {
      'usb-firmware':
        'Developed C/assembly firmware for USB peripherals, C++ networking/game-related code, C#/.NET test tools and technical documentation.',
      'test-tools':
        'Built C#/.NET test tools and technical documentation for firmware validation.',
    },
  },
  'nearform-community': {
    role: 'Developer Relations Community Lead',
    organization: 'Nearform',
    location: 'Remote',
    dateRange: 'May - Dec 2024',
    contributions: {
      ...nearformCommunity,
      'open-source-leadership':
        'Supported Node.js and OpenJS participation, mentoring engineers and coordinating open-source initiatives.',
      mentoring:
        'Mentored engineers in JavaScript and React and supported technical knowledge sharing.',
      'contributor-support':
        'Guided colleagues contributing to Node.js and Fastify projects.',
      'content-process':
        'Coordinated technical content contributions across the organization.',
      'community-recognition':
        'Supported employee participation in OpenJS and other open-source communities.',
      'steering-and-policy':
        'Participated in the open-source steering committee and contributed internal policies and programs.',
    },
  },
  'nearform-devrel': {
    role: 'Developer Relations Engineer / Staff',
    organization: 'Nearform',
    location: 'Remote',
    dateRange: 'Jan 2022 - Apr 2024',
    contributions: {
      ...nearformDevrel,
      'node-contributions':
        'Contributed Node.js documentation and issue triage; served on the OpenJS Cross Project Council.',
      speaking: 'Spoke at international developer conferences.',
      video:
        'Produced video content, including fireside chats with technical leaders.',
      'pre-sales':
        'Delivered technical demonstrations and supported pre-sales at events.',
    },
  },
  'nearform-engineering': {
    role: 'Senior Software Engineer',
    organization: 'Nearform',
    location: 'Remote',
    dateRange: 'Dec 2019 - Jan 2022',
    contributions: {
      ...nearformEngineering,
      'react-applications':
        'Built React components and application tooling for client and open-source projects.',
      'web-development-course':
        'Developed practical web-development teaching with JavaScript, databases and cloud deployment.',
    },
  },
  teaching: {
    role: 'University Instructor',
    organization: 'IUT Annecy / Tétras',
    location: 'Annecy, France',
    dateRange: '2018-19 academic year - Present',
    contributions: {
      'teaching-overview':
        'Teach career development, enterprise simulations and practical web development across approximately 125-130 students annually. Tétras teaching includes PostgreSQL, CI and virtualization.',
      'web-teaching':
        'Teach at IUT Annecy and Tétras, reaching approximately 125-130 students annually across career development, enterprise simulations and practical web courses.',
      mentoring:
        'Mentor students in career development, technical projects and preparation for industry.',
      'enterprise-simulations':
        'Run enterprise simulations covering resource management and business decisions.',
      'course-design':
        'Design practical web-development teaching at Tétras, including PostgreSQL, CI and virtualization.',
    },
  },
  'open-source': {
    role: 'Open Source Contributor & Community Builder',
    organization: 'FINOS / OpenJS Foundation',
    location: 'Remote',
    dateRange: 'Selected service',
    contributions: {
      'technical-speaking':
        'React Summit (2022): PostgreSQL, Node.js and React, at a conference with 1,500+ attendees. NodeConf EU (2022-23): Node.js contributor and React Native workshops.',
      'selected-service':
        'Open-source service includes Node.js documentation and issue triage, past OpenJS Cross Project Council service, and fixes and presentations for FINOS a11y-theme-builder.',
      'ecosystem-contributions':
        'Contributed Node.js documentation and issue triage, and small fixes to FINOS a11y-theme-builder.',
      specifications:
        'Contributed technical documentation and shared engineering practices with open-source communities.',
      inclusion:
        'Participated in Grace Hopper Open Source Day and accessibility events.',
      events:
        'Organized events and supported international community collaboration.',
    },
  },
} satisfies Record<string, CareerEntry>;

export type CareerId = keyof typeof career;
