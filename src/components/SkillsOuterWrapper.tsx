import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function SkillsOuterWrapper({ children }: Props) {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-10">
      {children}
    </div>
  );
}
