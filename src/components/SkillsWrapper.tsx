import React, { ReactElement, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  icon: ReactElement<SVGElement>;
  heading: string;
};
export default function SkillsWrapper({ children, heading, icon }: Props) {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white p-10 dark:bg-gray-800">
      <div className="mb-3 flex items-center gap-2">
        {icon}
        <h2 className="text-5xl font-semibold text-cyan-800 dark:text-cyan-500">{heading}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </div>
  );
}
