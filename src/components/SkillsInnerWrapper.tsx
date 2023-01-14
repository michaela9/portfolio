import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function SkillsInnerWrapper({ children }: Props) {
  return <div className="grid grid-cols-1 gap-2 md:gap-4 lg:grid-cols-2">{children}</div>;
}
