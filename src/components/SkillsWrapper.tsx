import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function SkillsWrapper({ children }: Props) {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-gray-50 p-10 dark:bg-gray-800">
      {children}
    </div>
  );
}
