import React from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Skills from './Skills';
import { hardSkills, portfolioData, softSkills } from '../data';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl">
      <Hero />
      <Skills hardSkills={hardSkills} softSkills={softSkills} />
      <Portfolio portfolioData={portfolioData} />
    </div>
  );
}
