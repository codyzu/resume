import {List} from './list/List.js';
import {type ListItem} from './list/ListItem.js';

export const conferences: Record<string, ListItem[]> = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Presentations: [
    {
      header: 'FINOS Finance Forum London (2024)',
      text: 'Delivered insights on accessibility in open-source development by presenting “Design, Development, AI and Accessibility, Oh My.”',
    },
    {
      header: 'State of Open Con UK (2024)',
      text: 'Delivered a presentation on “Inclusive by Design: Revolutionizing Accessibility” attended by over 2,000 industry leaders and developers.',
    },
    {
      header: 'NodeConf EU (2022, 2023)',
      text: 'Presented about JavaScript technologies, delivered technical workshops and talks on Node.js and React Native, fostering community engagement, emceed, and hosted fireside chats.',
    },
    {
      header: 'UtahJS (2023)',
      text: 'Presented “Decentralizing with QR Codes,” showcasing practical decentralized application implementations.',
    },
    {
      header: 'Open Source Experience, France (2023)',
      text: 'Delivered “Modern Web APIs: Too Much of a Good Thing?” exploring API design best practices and pitfalls.',
    },
    {
      header: 'DevSum, Sweden (2023)',
      text: 'Talked about “Full-stack JavaScript Today,” addressing trends in Fastify, GraphQL, and React for scalable applications.',
    },
    {
      header: 'DeveloperWeek (2023)',
      text: 'Presented “Design Tokens Systems and Component Journeys” virtually, breaking down the path from design systems to deployment.',
    },
    {
      header: 'Porto Tech Hub (2023)',
      text: 'Presented “IPFS – The Practical Bits” breaking down the complexities of the distributed web3 file system.',
    },
    {
      header: 'React Summit (2022)',
      text: 'Presented “Full-stack JS Today: Fastify, GraphQL, and React” to 1,500+ attendees, highlighting modern JavaScript development.',
    },
  ],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Workshops: [
    {
      header: 'NodeConf EU (2022, 2023)',
      text: '"Your First Node.js Contribution" Workshop: Empowered attendees to make their initial contributions to Node.js, demystifying the process; "From Zero to React Native": Provided hands-on guidance for transitioning to mobile app development with React Native.',
    },
  ],
  'Panel Discussions and Fireside Chats': [
    {
      header: 'Grace Hopper Open Source Day (2023)',
      text: 'Panelist advocating for diversity and inclusion in OSS, emphasizing the importance of community-driven innovation.',
    },
    {
      header: 'FINOS Accessibility Day (2024)',
      text: 'Fireside chat on accessibility challenges in OSS, highlighting actionable strategies for improvement.',
    },
    {
      header: 'Tech for Meaningful Social Connection (2023)',
      text: 'Explored the intersection of technology and human interaction in a compelling fireside discussion.',
    },
  ],
  'Virtual Engagements': [
    {
      header: 'OpenJS Collaborators Summit (2023)',
      text: 'Delivered “Zen and the Art of Open Source,” focusing on balancing productivity with mental health in the open-source community.',
    },
    {
      header: 'Grace Hopper Open Source Day (2023)',
      text: 'Facilitated multiple OSS breakout rooms for FINOS and OpenJS Foundation projects.',
    },
  ],
};
