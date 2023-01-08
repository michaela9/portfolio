import classnames from 'classnames';
import type { ReactNode } from 'react';

type Props = React.HTMLAttributes<'h2'> & {
  children: ReactNode;
  className?: string;
};

export default function Heading2({ children, className }: Props) {
  return (
    <h2
      className={classnames(
        className,
        'font-montserrat text-5xl font-bold leading-10 text-cyan-800 dark:text-cyan-500'
      )}
    >
      {children}
    </h2>
  );
}
