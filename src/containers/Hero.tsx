import Image from 'next/image';
import React from 'react';
import CustomLink from '../components/CustomLink';
import Description from '../components/Description';
import Heading1 from '../components/Heading1';
import Heading3 from '../components/Heading3';
import Heading4 from '../components/Heading4';

export default function Hero() {
  return (
    <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-3 py-8 md:gap-4 md:py-20">
        <Heading1>
          Hi, I am <br />
          Michaela Rudolfová
        </Heading1>
        <Heading4>Frontend developer based in Prague</Heading4>
        <img
          src="/images/profil_800x711.png"
          alt="profil-photo"
          className="relative w-full bg-slate-100 pt-4 dark:bg-slate-900 md:hidden"
        />
        <Description>
          I graduated as an architect at CTU Prague, but few years later I have found my way to
          Frontend Development. I love to create, I love community of people around and I love learn
          more and more.
        </Description>
        <Description>
          Nowadays, my favorite technologies are React, Typescript, tailwind and graphQl. I am open
          minded about technologies for the future and maybe want to try more fullstack or backend
          technologies either.
        </Description>
        <CustomLink href="/contact">
          <div className="flex h-28 w-28 origin-center items-center justify-center rounded-full bg-cyan-500 font-semibold uppercase text-white transition-transform duration-300 ease-in-out hover:rotate-45 dark:bg-cyan-700">
            Write me
          </div>
        </CustomLink>
      </div>

      <img
        src="/images/profil_800x711.png"
        alt="profil-photo"
        className="relative hidden w-full md:block"
      />
    </section>
  );
}
