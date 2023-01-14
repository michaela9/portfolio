import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function SkillsHeadingWrapper({ children }: Props) {
  return <div className="mb-3 flex items-center gap-2">{children}</div>;
}
