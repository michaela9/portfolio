import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  index: string;
  description: string;
  title: string;
  src: string;
  alt: string;
  tech: string;
  href: string;
};

export default function PortfolioItem({ index, description, title, src, alt, tech, href }: Props) {
  return (
    <div className="flex items-center gap-10">
      <div className="flex flex-col gap-3">
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
      <div>
        <p className="w-1/2">{description}</p>
        <Link href={href}>Přejít na web</Link>
      </div>
    </div>
  );
}
