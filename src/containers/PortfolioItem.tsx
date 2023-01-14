import classnames from 'classnames';
import Image from 'next/image';
import React, { ReactElement } from 'react';
import CustomLink from '../components/CustomLink';
import Heading3 from '../components/Heading3';

type Props = {
  description: ReactElement;
  title: string;
  src: string;
  alt: string;
  tech: string;
  href: string;
  reversed?: boolean;
};

export default function PortfolioItem({
  description,
  title,
  src,
  alt,
  tech,
  href,
  reversed = false,
}: Props) {
  return (
    <div
      className={classnames('grid items-center gap-4 md:gap-10', {
        'grid-cols-1 md:grid-cols-[5fr,6fr]': reversed,
        'grid-cols-1 md:grid-cols-[6fr,5fr]': !reversed,
      })}
    >
      <CustomLink
        href={href}
        type="unstyled"
        target="blank"
        className={classnames('flex flex-col gap-3', {
          'md:order-2': reversed,
          'md:order-1': !reversed,
        })}
      >
        <div className="relative h-full w-full transition-all duration-200 ease-in-out hover:scale-105">
          <Image src={src} alt={alt} width={1200} height={850} />
        </div>
      </CustomLink>
      <div
        className={classnames('flex flex-col gap-4', {
          'md:order-1 md:items-end md:text-right': reversed,
          'md:order-2 md:items-start': !reversed,
        })}
      >
        <Heading3>{title}</Heading3>
        <p className="text-sm font-medium">{tech}</p>
        <div
          className={classnames({
            'md:text-right': reversed,
            '': !reversed,
          })}
        >
          {description}
        </div>
        <CustomLink href={href} target="blank" type="primary">
          Go to website
        </CustomLink>
      </div>
    </div>
  );
}
