import React from 'react';
import { GiPikeman, GiSwordwoman } from 'react-icons/gi';
import SkillsWrapper from '../components/SkillsWrapper';
import SkillItem from './SkillItem';

interface Props {
  hardSkills: string[];
  softSkills: string[];
}
export default function Skills({ hardSkills, softSkills }: Props) {
  return (
    <section className="w-full py-20">
      <div className="grid grid-cols-2 gap-10">
        <SkillsWrapper icon={<GiSwordwoman size={'3rem'} />} heading="Hard Skills">
          {hardSkills.map((item, i) => (
            <SkillItem key={i}>{item}</SkillItem>
          ))}
        </SkillsWrapper>
        <SkillsWrapper icon={<GiPikeman size={'3rem'} />} heading="Soft Skills">
          {softSkills.map((item, i) => (
            <SkillItem key={i}>{item}</SkillItem>
          ))}
        </SkillsWrapper>
      </div>
    </section>
  );
}
