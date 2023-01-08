import Image from 'next/image';
import React from 'react';
import Heading2 from '../components/Heading2';
import type { PortfolioItemType } from '../data';
import PortfolioItem from './PortfolioItem';

interface Props {
  portfolioData: PortfolioItemType[];
}

export default function Portfolio({ portfolioData }: Props) {
  return (
    <section className="flex flex-col gap-4">
      <div className="border-b border-cyan-800 py-4">
        <Heading2>Personal portfolio</Heading2>
      </div>
      <div className="flex flex-col gap-6">
        {portfolioData.map((item) => (
          <PortfolioItem
            key={item.index}
            title={item.title}
            index={item.index}
            alt={item.alt}
            src={item.src}
            tech={item.tech}
            description={item.description}
            href={item.href}
            reversed={item.reversed}
          />
        ))}
      </div>
    </section>
  );
}
