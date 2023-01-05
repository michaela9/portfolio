import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function SkillItem({ children }: Props) {
  return (
    <p className="text-md rounded-lg bg-gray-100 px-3 py-1 font-semibold leading-8 text-gray-800 dark:bg-gray-700 dark:text-white">
      {children}
    </p>
  );
}
