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
      className={classnames('grid items-center gap-10', {
        'grid-cols-[5fr,7fr]': reversed,
        'grid-cols-[7fr,5fr]': !reversed,
      })}
    >
      <div
        className={classnames('flex flex-col gap-3', {
          'order-2': reversed,
          'order-1': !reversed,
        })}
      >
        <CustomLink href={href} type="unstyled" target="blank">
          <div className="relative h-full w-full transition-all duration-200 ease-in-out hover:scale-105">
            <Image src={src} alt={alt} width={1200} height={850} />
          </div>
        </CustomLink>
      </div>
      <div
        className={classnames('flex flex-col gap-4', {
          'order-1 items-end text-right': reversed,
          'order-2 items-start': !reversed,
        })}
      >
        <Heading3>{title}</Heading3>
        <p className="text-sm font-medium">{tech}</p>
        <p
          className={classnames({
            'text-right': reversed,
            '': !reversed,
          })}
        >
          {description}
        </p>
        <CustomLink href={href} target="blank" type="primary">
          Přejít na web
        </CustomLink>
      </div>
    </div>
  );
}
