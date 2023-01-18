import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function SkillsOuterWrapper({ children }: Props) {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-10 lg:gap-6 lg:p-4">
      {children}
    </div>
  );
}
