export const hardSkills: string[] = [
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'REACT',
  'TYPESCRIPT',
  'NEXT',
  'GRAPHQL',
  'GIT',
  'TAILWIND',
  'FIGMA',
  'WEBFLOW',
  'STORYBOOK',
];

export const softSkills: string[] = [
  'Communication skills',
  'Creativity',
  'Reliability',
  'Responsibility',
  'Independence',
  'Desire to learn new skills',
  'Diligence',
  'Open mind',
];

export type PortfolioItemType = {
  title: string;
  index: string;
  alt: string;
  src: string;
  tech: string;
  description: string;
  href: string;
  reversed?: boolean;
};
export const portfolioData: PortfolioItemType[] = [
  {
    title: 'ZIX KOMIX',
    index: '01',
    alt: 'ZIX KOMIX project',
    src: '/images/laptop-01-reactgirls-hero.jpg',
    tech: 'DESIGN | DEVELOPMENT | WEBFLOW',
    description: '',
    href: 'https://www.zixkomix.com/',
    reversed: false,
  },
  {
    title: 'Vítr do plachet pro Eleonorku',
    index: '02',
    alt: 'Vítr do plachet pro Eleonorku',
    src: '/images/laptop-01-reactgirls-hero.jpg',
    tech: 'DESIGN | DEVELOPMENT | WEBFLOW',
    description: '',
    href: 'https://vitrdoplachetproeleonorku.cz/',
    reversed: true,
  },
  {
    title: 'REACTGIRLS',
    index: '03',
    alt: 'ReactGirls project',
    src: '/images/laptop-01-reactgirls-hero.jpg',
    tech: 'DESIGN | DEVELOPMENT | REACT',
    description: '',
    href: 'https://reactgirls.com/',
    reversed: false,
  },
  {
    title: 'Hornická města',
    index: '04',
    alt: 'Hornická města projekt',
    src: '/images/laptop-01-reactgirls-hero.jpg',
    tech: 'DESIGN | DEVELOPMENT ',
    description: '',
    href: 'https://hornickamesta.kutnahora.cz/',
    reversed: true,
  },
  {
    title: 'FITNUT',
    index: '05',
    alt: 'FITNUT AKADAMIE',
    src: '/images/laptop-01-reactgirls-hero.jpg',
    tech: 'DEVELOPMENT | REACT | TYPESCRIPT',
    description: '',
    href: 'https://fitnut.cz/',
    reversed: false,
  },
  {
    title: 'BRAINEE',
    index: '06',
    alt: 'BRAINEE AKADAMIE',
    src: '/images/laptop-01-reactgirls-hero.jpg',
    tech: 'DEVELOPMENT | REACT | TYPESCRIPT',
    description:
      'fko hdi hhiudh i iudh diug dkg dkig keg rfiuhe fh ldhuk fkhj dlih lfih dlih fildj lfih dil glid ilgh ldihg oiůdh glidh oigh ogih godih glidh ilhg li',
    href: 'https://brainee.cz/',
    reversed: true,
  },
];
