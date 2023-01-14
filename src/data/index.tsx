import { ReactElement } from 'react';
import Description from '../components/Description';

export type PortfolioItemType = {
  title: string;
  index: string;
  alt: string;
  src: string;
  tech: string;
  description: ReactElement;
  href: string;
  reversed?: boolean;
};

type NavLink = {
  id: number;
  title: string | ReactElement;
  href: string;
};

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
  'Open-mindedness',
];

export const portfolioData: PortfolioItemType[] = [
  {
    title: 'ZIX KOMIX',
    index: '01',
    alt: 'ZIX KOMIX project',
    src: '/images/zixkomix_1100x700.png',
    tech: 'DESIGN | DEVELOPMENT | WEBFLOW',
    description: (
      <>
        <Description>
          I developed a website to support a unique product, the first disc golf guide in the Czech
          Republic.
        </Description>
        <Description>
          The main motif of the website includes illustrations from the book combined with suitable
          colors and enjoyable background animations. I developed the website using Figma and
          Webflow.
        </Description>
      </>
    ),
    href: 'https://www.zixkomix.com/',
    reversed: false,
  },
  {
    title: 'Vítr do plachet pro Eleonorku',
    index: '02',
    alt: 'Vítr do plachet pro Eleonorku',
    src: '/images/eleonorka_1100.jpg',
    tech: 'DESIGN | DEVELOPMENT | WEBFLOW',
    description: (
      <Description>
        I created a volunteer project to support Eleonorka, a little girl diagnosed with Spinal
        Muscular Atrophy (SMA) disease. I built the project using Figma and Webflow, with a content
        management system for blog posts.
      </Description>
    ),
    href: 'https://vitrdoplachetproeleonorku.cz/',
    reversed: true,
  },
  {
    title: 'REACTGIRLS',
    index: '03',
    alt: 'ReactGirls project',
    src: '/images/mobile-reactgirls.png',
    tech: 'DESIGN | DEVELOPMENT | REACT',
    description: (
      <>
        <Description>
          I developed my first website as part of a mentoring program with ReactGirls. Under the
          guidance of my mentor, I created the project in Figma and React over the course of 3
          months.
        </Description>
        <Description>
          Besides learning how to code and design I learned how to use Git and GitHub and how to
          find the right information in the official docs.
        </Description>
      </>
    ),
    href: 'https://reactgirls.com/',
    reversed: false,
  },
  {
    title: 'Hornická města',
    index: '04',
    alt: 'Hornická města projekt',
    src: '/images/hornicka-mesta.jpg',
    tech: 'DESIGN | DEVELOPMENT ',
    description: (
      <Description>
        I developed a project for the City of Kutná Hora for the Autumn Mining Cities event, which
        included an application form.
      </Description>
    ),
    href: 'https://hornickamesta.kutnahora.cz/',
    reversed: true,
  },
  {
    title: 'Diploma project in architecture',
    index: '05',
    alt: 'Diploma project in architecture',
    src: '/images/diplomka-rez.jpg',
    tech: 'AUTOCAD | RHINO | PHOTOSHOP | INDESIGN',
    description: (
      <>
        <Description>
          For my diploma project at the Faculty of Architecture of the CTU, I prepared a study on
          the rehabilitation of the Radimský Mill in Kolín.
        </Description>
        <Description>
          My goal was to restore the area for a new creative purpose such as a new coworking space
          with shared and separate workplaces and gallery. I designed additional features, such as
          residential and accommodation spaces and the surrounding public space.
        </Description>
      </>
    ),
    href: 'https://docplayer.cz/46566903-Konverze-arealu-radimskeho-mlyna-v-koline-diplomova-prace.html',
    reversed: false,
  },
];

export const navigation: NavLink[] = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'About', href: '/about' },
  { id: 3, title: 'Contact', href: '/contact' },
];
