import Image from 'next/image';
import React from 'react';
import type { PortfolioItemType } from '../data';
import PortfolioItem from './PortfolioItem';

interface Props {
  portfolioData: PortfolioItemType[];
}

export default function Portfolio({ portfolioData }: Props) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-5xl font-semibold text-cyan-800 dark:text-cyan-500">Portfolio</h2>
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
