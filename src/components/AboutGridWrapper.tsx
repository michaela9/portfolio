import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function AboutGridWrapper({ children }: Props) {
  return <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">{children} </div>;
}
