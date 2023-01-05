import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CustomLink from '../components/CustomLink';

type Props = {
  index: string;
  description: string;
  title: string;
  src: string;
  alt: string;
  tech: string;
  href: string;
  reversed?: boolean;
};

export default function PortfolioItem({
  index,
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
      className={classnames('grid  items-center gap-10', {
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
        <div className="flex items-end justify-between">
          <h4 className="text-3xl font-bold">{index}</h4>
          <div className="flex flex-col items-end">
            <p className="text-xs">{tech}</p>
            <h4 className="text-3xl font-bold">{title}</h4>
          </div>
        </div>
        <div className="relative h-full w-full border">
          <Image src={src} alt={alt} width={1200} height={850} />
        </div>
      </div>
      <div
        className={classnames('flex flex-col gap-4', {
          'order-1 items-end text-right': reversed,
          'order-2 items-start': !reversed,
        })}
      >
        <p
          className={classnames('border', {
            'text-right': reversed,
            '': !reversed,
          })}
        >
          {description}
        </p>
        <CustomLink href={href}>Přejít na web</CustomLink>
      </div>
    </div>
  );
}
