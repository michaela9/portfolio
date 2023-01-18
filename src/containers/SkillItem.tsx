import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function SkillItem({ children }: Props) {
  return (
    <p className="md:text-md rounded-lg bg-slate-100 px-3 py-1 text-sm font-semibold leading-8 text-gray-800 dark:bg-gray-700 dark:text-white">
      {children}
    </p>
  );
}
