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
        'font-montserrat text-3xl font-bold leading-relaxed text-cyan-800 dark:text-my-gray-light md:text-5xl md:font-semibold'
      )}
    >
      {children}
    </h1>
  );
}
