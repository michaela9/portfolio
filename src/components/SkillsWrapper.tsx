import React, { ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  icon: ReactElement<SVGElement>;
  heading: string;
};
export default function SkillsWrapper({ children, heading, icon }: Props) {
  return (
    <div className="">
      <div className="mb-3 flex items-center gap-2">
        {icon}
        <h3 className="text-2xl font-bold text-cyan-800 dark:text-cyan-500">{heading}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </div>
  );
}
