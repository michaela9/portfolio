import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
};
export default function CustomLink({ children, href, ...rest }: Props) {
  return (
    <Link
      href={href}
      className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-white transition-transform duration-150 ease-in-out hover:scale-110 dark:bg-cyan-700"
      {...rest}
    >
      {children}
    </Link>
  );
}
