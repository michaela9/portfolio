import React from 'react';
import { GiPikeman, GiSwordwoman } from 'react-icons/gi';
import Heading3 from '../components/Heading3';
import SkillsWrapper from '../components/SkillsWrapper';
import SkillItem from './SkillItem';

interface Props {
  hardSkills: string[];
  softSkills: string[];
}
export default function Skills({ hardSkills, softSkills }: Props) {
  return (
    <section className="w-full py-8 md:py-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
        <SkillsWrapper>
          <div className="mb-3 flex items-center gap-2">
            <GiSwordwoman size={'3rem'} />
            <Heading3>Hard Skills</Heading3>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
            {hardSkills.map((item, i) => (
              <SkillItem key={i}>{item}</SkillItem>
            ))}
          </div>
        </SkillsWrapper>
        <SkillsWrapper>
          <div className="mb-3 flex items-center gap-2">
            <GiPikeman size={'3rem'} />
            <Heading3>Soft Skills</Heading3>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
            {softSkills.map((item, i) => (
              <SkillItem key={i}>{item}</SkillItem>
            ))}
          </div>
        </SkillsWrapper>
      </div>
    </section>
  );
}
