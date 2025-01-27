import {type ListItem} from '../components/list/ListItem.js';
import {type Version} from '../version.js';

const allConferences = {
  finosLondon: {
    header: 'FINOS Finance Forum London (2024)',
    text: 'Delivered insights on accessibility in open-source development by presenting “Design, Development, AI and Accessibility, Oh My.”',
  },
  stateOfOpenCon: {
    header: 'State of Open Con UK (2024)',
    text: 'Delivered a presentation on “Inclusive by Design: Revolutionizing Accessibility” attended by over 2,000 industry leaders and developers.',
  },
  nodeConf: {
    header: 'NodeConf EU (2022, 2023)',
    text: 'Presented about JavaScript technologies, delivered technical workshops and talks on Node.js and React Native, fostering community engagement, emceed, and hosted fireside chats.',
  },
  portoTechHub: {
    header: 'Porto Tech Hub (2023)',
    text: 'Presented “IPFS - The Practical Bits” breaking down the complexities of the distributed web3 file system.',
  },
  reactSummit: {
    header: 'React Summit (2022)',
    text: 'Presented “Full-stack JS Today: Fastify, GraphQL, and React” to 1,500+ attendees, highlighting modern JavaScript development.',
  },
  nodeConfWorkshops: {
    header: 'NodeConf EU (2022, 2023)',
    text: '“Your First Node.js Contribution” Workshop: Empowered attendees to make their initial contributions to Node.js, demystifying the process; “From Zero to React Native”: Provided hands-on guidance for transitioning to mobile app development with React Native.',
  },
  ghcOsd: {
    header: 'Grace Hopper Open Source Day (2023)',
    text: 'Panelist advocating for diversity and inclusion in OSS, emphasizing the importance of community-driven innovation.',
  },
  finosA11y: {
    header: 'FINOS Accessibility Day (2024)',
    text: 'Fireside chat on accessibility challenges in OSS, highlighting actionable strategies for improvement.',
  },
  firesideChange: {
    header: 'Tech for Meaningful Social Connection (2023)',
    text: 'Explored the intersection of technology and human interaction in a compelling fireside discussion.',
  },
  openJsCollab: {
    header: 'OpenJS Collaborators Summit (2023)',
    text: 'Delivered “Zen and the Art of Open Source,” focusing on balancing productivity with mental health in the open-source community.',
  },
  ghc: {
    header: 'Grace Hopper Open Source Day (2023)',
    text: 'Facilitated multiple OSS breakout rooms for FINOS and OpenJS Foundation projects.',
  },
  utahJs: {
    header: 'UtahJS (2023)',
    text: 'Presented “Decentralizing with QR Codes,” showcasing practical decentralized application implementations.',
  },
  osExperience: {
    header: 'Open Source Experience, France (2023)',
    text: 'Delivered “Modern Web APIs: Too Much of a Good Thing?” exploring API design best practices and pitfalls.',
  },
  devSum: {
    header: 'DevSum, Sweden (2023)',
    text: 'Talked about “Full-stack JavaScript Today,” addressing trends in Fastify, GraphQL, and React for scalable applications.',
  },
  devWeek: {
    header: 'DeveloperWeek (2023)',
    text: 'Presented “Design Tokens Systems and Component Journeys” virtually, breaking down the path from design systems to deployment.',
  },
};

const developmentConferences: Array<{header: string; items: ListItem[]}> = [
  {
    header: 'Presentations',
    items: [
      allConferences.finosLondon,
      allConferences.stateOfOpenCon,
      allConferences.nodeConf,
      allConferences.portoTechHub,
      allConferences.reactSummit,
    ],
  },
  {
    header: 'Workshops',
    items: [allConferences.nodeConfWorkshops],
  },
  {
    header: 'Panel Discussions and Fireside Chats',
    items: [
      allConferences.ghcOsd,
      allConferences.finosA11y,
      allConferences.firesideChange,
    ],
  },
  {
    header: 'Virtual Engagements',
    items: [allConferences.openJsCollab, allConferences.ghc],
  },
];

const devrelConferences: Array<{header: string; items: ListItem[]}> = [
  {
    header: 'Conferences',
    items: [
      allConferences.finosLondon,
      allConferences.stateOfOpenCon,
      allConferences.nodeConf,
      allConferences.utahJs,
      allConferences.osExperience,
      allConferences.devSum,
      allConferences.devWeek,
      allConferences.portoTechHub,
      allConferences.reactSummit,
    ],
  },
  {
    header: 'Workshops',
    items: [allConferences.nodeConfWorkshops],
  },
  {
    header: 'Panel Discussions and Fireside Chats',
    items: [
      allConferences.ghcOsd,
      allConferences.finosA11y,
      allConferences.firesideChange,
    ],
  },
  {
    header: 'Virtual Engagements',
    items: [allConferences.openJsCollab, allConferences.ghc],
  },
];

const hwCommunityConferences: Array<{header: string; items: ListItem[]}> = [
  {
    header: 'Conferences',
    items: [
      allConferences.finosLondon,
      allConferences.stateOfOpenCon,
      allConferences.nodeConf,
      allConferences.utahJs,
      allConferences.osExperience,
      allConferences.devWeek,
      allConferences.portoTechHub,
      allConferences.reactSummit,
    ],
  },
  {
    header: 'Workshops',
    items: [allConferences.nodeConfWorkshops],
  },
  {
    header: 'Panel Discussions and Fireside Chats',
    items: [
      allConferences.ghcOsd,
      allConferences.finosA11y,
      allConferences.firesideChange,
    ],
  },
  {
    header: 'Virtual Engagements',
    items: [allConferences.openJsCollab, allConferences.ghc],
  },
];

export const conferences: Record<
  Version,
  Array<{header: string; items: ListItem[]}>
> = {
  dev: developmentConferences,
  devrel: devrelConferences,
  hw: hwCommunityConferences,
};
