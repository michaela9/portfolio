import { ReactElement } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Description from '../components/Description';

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
  description: ReactElement;
  href: string;
  reversed?: boolean;
};
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
          Projekt vytvořený na podporu krásného produktu a to první discgolfové příručky v Čechách.
        </Description>
        <Description>
          Na webu jsou použity ilustrace z knihy a celé je to doplněné podporující grafikou. Web byl
          navržen ve Figmě a vytvořen pomocí Webflow.
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
        Dobrovolnický projekt vytvořený na podporu malé Eleonorky diagnostikované onemocněním SMA.
        Projekt byl vytvořen pomocí nástroje Webflow.
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
          Projekt vznikl během mé účasti na mentoringovém programu komunity ReactGirls.
        </Description>
        <Description>
          Pod vedení mentora jsem samostatně zpracovala projekt od návrhu designu ve Figmě po
          development v Reactu.
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
        Projekt zpracovaný pro město Kutná Hora k podzimní akci Hornická města včetně přihlašovacího
        formuláře.
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
          Jako diplomní projekt na Fakultě architektury ČVUT jsem zpracovávala studii na téma
          Konverze Radimského mlýnu v Kolíně.
        </Description>
        <Description>
          Cílem bylo rehabilitovat oblast pro novou kreativní funkci. Hlavním oživením objektu byla
          navržena coworkingová funkce společných a samostatných pracovišť. Součástí areálu byla
          navržena galerie, obytná a ubytovací funkce.
        </Description>
      </>
    ),
    href: 'https://docplayer.cz/46566903-Konverze-arealu-radimskeho-mlyna-v-koline-diplomova-prace.html',
    reversed: false,
  },
];

type NavLink = {
  id: number;
  title: string | ReactElement;
  href: string;
};
export const navigation: NavLink[] = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'About', href: '/about' },
  { id: 3, title: 'Contact', href: '/contact' },
  // {
  //   id: 4,
  //   title: (
  //     <BsLinkedin
  //       size={'1.5rem'}
  //       className="transition-transform duration-150 ease-in-out hover:scale-125"
  //     />
  //   ),
  //   href: 'https://www.linkedin.com/in/michaela-rudolfov%C3%A1-673893185/',
  //   targetB: true,
  // },
  // {
  //   id: 5,
  //   title: (
  //     <BsGithub
  //       size={'1.7rem'}
  //       className="transition-transform duration-150 ease-in-out hover:scale-125"
  //     />
  //   ),
  //   href: 'https://github.com/michaela9',
  //   targetB: true,
  // },
];
