import classnames from 'classnames';
import type { ReactNode } from 'react';

type Props = React.HTMLAttributes<'h3'> & {
  children: ReactNode;
  className?: string;
};

export default function Heading3({ children, className }: Props) {
  return (
    <h3
      className={classnames(
        className,
        'font-montserrat text-4xl font-bold leading-10  text-cyan-800 dark:text-white'
      )}
    >
      {children}
    </h3>
  );
}
