type ProjectType = 'Fullstack Application' | 'Minecraft Plugin';

export type Project = {
  name: string;
  type: ProjectType;
  times: {
    started: Date;
    lastUpdated?: Date;
  };
  description: string;
  link?: string;
};

export const UserProjects: Project[] = [
  {
    name: 'meditate.app',
    description:
      'A modern meditation web app for you to meditate on your own terms. Track your progress and share your thoughts with others. Built with Next.JS and TailwindCSS ♥',
    times: {
      started: new Date(2022, 0, 25),
      lastUpdated: new Date(2022, 1, 2)
    },
    type: 'Fullstack Application'
  },
  {
    name: 'Rice Statistics',
    description:
      'Tracks Minecraft statistics with InfluxDB for timescale analytics as a Spigot plugin',
    times: {
      started: new Date(2022, 0, 6),
      lastUpdated: new Date(2022, 2, 22)
    },
    type: 'Minecraft Plugin'
  },
  {
    name: 'AugmentedSMP',
    description:
      'A Minecraft plugin suited towards SMP servers with configurable tweaks and changes.',
    times: {
      started: new Date(2021, 9, 10),
      lastUpdated: new Date(2021, 9, 23)
    },
    type: 'Minecraft Plugin'
  }
];

export const UserFeaturedProjects: FeaturedProject[] = [
  {
    name: 'meditate.app',
    description:
      'A modern meditation web app for you to meditate on your own terms. Track your progress and share your thoughts with others.',
    headerImage: '/images/meditate_app.png',
    tags: ['Fullstack', 'NextJS'],
    share: [
      {
        type: 'Preview',
        link: 'https://meditate-ashy.vercel.app/'
      },
      {
        type: 'GitHub',
        link: 'https://github.com/RiceCX/Meditate'
      }
    ]
  },
  {
    name: 'Rice Statistics',
    description:
      'Tracks Minecraft statistics with InfluxDB for timescale analytics as a Spigot plugin',
    headerImage: '/images/rice_stats.png',
    tags: ['Minecraft', 'DevOps'],
    share: [
      {
        type: 'GitHub',
        link: 'https://github.com/RiceCX/RiceStats'
      }
    ]
  },
  {
    name: 'AugmentedSMP',
    description:
      'A Minecraft plugin suited towards SMP servers with configurable tweaks and changes.',
    headerImage: '/images/test_project.png',
    tags: ['Minecraft'],
    share: [
      {
        type: 'GitHub',
        link: 'https://github.com/RiceCX/RiceStats'
      }
    ]
  },
  ,
  {
    name: 'Kanes Maid Bot',
    description:
      'A feature packed, social, moderation, and gaming Discord bot made in Rust 🦀.',
    headerImage: '/images/augmented_smp.png',
    tags: ['Rust', 'Discord', 'Bots'],
    share: [
      {
        type: 'GitHub',
        link: 'https://github.com/RiceCX/KanesMaidBot'
      }
    ]
  }
];
type ShareType = 'Video' | 'GitHub' | 'Preview' | 'Blog';

export type FeaturedProject = {
  name: string;
  headerImage: string;
  tags: Array<string>;
  description: string;
  share?: readonly [
    FeaturedProjectShare?,
    FeaturedProjectShare?,
    FeaturedProjectShare?
  ]; // limit ways to 3 max
};

type FeaturedProjectShare = {
  type: ShareType;
  link: string;
  newTab?: boolean;
};
