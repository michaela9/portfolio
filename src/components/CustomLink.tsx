import classnames from 'classnames';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  type?: 'unstyled' | 'primary';
  cllassName?: string;
};

export default function CustomLink({
  children,
  href,
  className,
  type = 'unstyled',
  ...rest
}: Props) {
  return (
    <Link
      href={href}
      className={classnames(className, {
        '': type === 'unstyled',
        'rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-white transition-transform duration-150 ease-in-out hover:scale-110 dark:bg-cyan-700':
          type === 'primary',
      })}
      {...rest}
    >
      {children}
    </Link>
  );
}
