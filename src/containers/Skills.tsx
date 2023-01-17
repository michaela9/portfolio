import React from 'react';
import { GiPikeman, GiSwordwoman } from 'react-icons/gi';
import Heading3 from '../components/Heading3';
import SkillsHeadingWrapper from '../components/SkillsHeadingWrapper';
import SkillsInnerWrapper from '../components/SkillsInnerWrapper';
import SkillsOuterWrapper from '../components/SkillsOuterWrapper';
import SkillsWrapper from '../components/SkillsOuterWrapper';
import SkillItem from './SkillItem';

interface Props {
  hardSkills: string[];
  softSkills: string[];
}

export default function Skills({ hardSkills, softSkills }: Props) {
  return (
    <section className="grid w-full grid-cols-1 gap-4 py-8 md:grid-cols-2 md:gap-10 md:py-20">
      <SkillsOuterWrapper>
        <SkillsHeadingWrapper>
          <GiSwordwoman size={'3rem'} />
          <Heading3>Hard Skills</Heading3>
        </SkillsHeadingWrapper>
        <SkillsInnerWrapper>
          {hardSkills.map((item, i) => (
            <SkillItem key={i}>{item}</SkillItem>
          ))}
        </SkillsInnerWrapper>
      </SkillsOuterWrapper>
      <SkillsWrapper>
        <SkillsHeadingWrapper>
          <GiPikeman size={'3rem'} />
          <Heading3>Soft Skills</Heading3>
        </SkillsHeadingWrapper>
        <SkillsInnerWrapper>
          {softSkills.map((item, i) => (
            <SkillItem key={i}>{item}</SkillItem>
          ))}
        </SkillsInnerWrapper>
      </SkillsWrapper>
    </section>
  );
}
