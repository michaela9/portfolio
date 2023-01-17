import classnames from 'classnames';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  type?: 'unstyled' | 'primary' | 'secondary' | 'tertiary';
  cllassName?: string;
  comparison?: boolean;
};

export default function CustomLink({
  children,
  href,
  className,
  type = 'unstyled',
  comparison,
  ...rest
}: Props) {
  return (
    <Link
      href={href}
      className={classnames(className, {
        '': type === 'unstyled',
        'rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-white transition-transform duration-150 ease-in-out hover:scale-110 dark:bg-cyan-700':
          type === 'primary',
        'font-medium text-cyan-500 underline-offset-4 hover:underline dark:text-cyan-400':
          type === 'secondary',
        'flex h-28 w-28 origin-center items-center justify-center rounded-full bg-cyan-500 font-semibold uppercase text-white transition-transform duration-300 ease-in-out hover:rotate-45 dark:bg-cyan-700':
          type === 'tertiary',
        underline: comparison,
      })}
      {...rest}
    >
      {children}
    </Link>
  );
}
