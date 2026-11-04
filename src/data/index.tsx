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
  'WEB ACCESSIBILITY',
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
    title: 'Vyhořelí architekti',
    index: '01',
    alt: 'Vyhořelí architekti project',
    src: '/images/vyhoreli-architekti_1000x596.png',
    tech: 'DESIGN | DEVELOPMENT | STRIPE',
    description: (
      <>
        <Description>
          This was a really fun project! A website for selling “Burnt-Out Architects”, a humorous
          card game.
        </Description>
        <Description>
          The brief was to create a minimalist yet playful website that reflects the visual identity
          and graphics of the game. Payments are seamlessly handled through Stripe.
        </Description>
      </>
    ),
    href: 'https://www.vyhoreliarchitekti.cz/',
    reversed: false,
  },
  {
    title: 'KOMPONENT STUDIO',
    index: '02',
    alt: 'KOMPONENT STUDIO project',
    src: '/images/komponent_1000x567.png',
    tech: 'DESIGN | DEVELOPMENT | SANITY',
    description: (
      <>
        <Description>
          The website for the architecture studio was designed to support business growth, attract
          new clients, and provide a clear and intuitive CMS that allows the team to easily manage
          and add new projects.
        </Description>
      </>
    ),
    href: 'https://www.komponentstudio.cz/',
    reversed: true,
  },
  {
    title: 'ZIX KOMIX',
    index: '03',
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
    index: '04',
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
];

export const navigation: NavLink[] = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'About', href: '/about' },
  { id: 3, title: 'Contact', href: '/contact' },
];
