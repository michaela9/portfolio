import classnames from 'classnames';
import type { ReactNode } from 'react';

type Props = React.HTMLAttributes<'h1'> & {
  children: ReactNode;
  className?: string;
};

export default function Heading1({ children, className }: Props) {
  return (
    <h1
      className={classnames(
        className,
        'font-montserrat text-5xl font-semibold leading-10 text-cyan-800 dark:text-white'
      )}
    >
      {children}
    </h1>
  );
}