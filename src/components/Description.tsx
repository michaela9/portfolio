import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function Description({ children }: Props) {
  return <p className="mb-4 font-light">{children}</p>;
}
