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
        'font-montserrat text-2xl font-bold text-cyan-800  dark:text-white md:text-4xl'
      )}
    >
      {children}
    </h3>
  );
}
