import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function Description({ children }: Props) {
  return <p className="mb-2 text-sm font-light md:mb-4 md:text-base">{children}</p>;
}
