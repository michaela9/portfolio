import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function SkillItem({ children }: Props) {
  return (
    <p className="text-md rounded-lg bg-white px-3 py-1 leading-8 text-gray-800 dark:bg-gray-700 dark:text-white">
      {children}
    </p>
  );
}
