import React, { ReactNode } from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};
export default function Button({ children, ...rest }: Props) {
  return (
    <button
      className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-white transition-transform duration-150 ease-in-out hover:scale-110 dark:bg-cyan-700"
      {...rest}
    >
      {children}
    </button>
  );
}
