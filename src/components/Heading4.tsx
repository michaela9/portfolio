import classnames from 'classnames';
import type { ReactNode } from 'react';

type Props = React.HTMLAttributes<'h4'> & {
  children: ReactNode;
  className?: string;
};

export default function Heading4({ children, className }: Props) {
  return (
    <h4
      className={classnames(
        className,
        'font-montserrat text-xl font-bold text-my-gray-text-dark dark:text-white'
      )}
    >
      {children}
    </h4>
  );
}
