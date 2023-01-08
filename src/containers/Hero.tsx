import Image from 'next/image';
import React from 'react';
import Description from '../components/Description';
import Heading1 from '../components/Heading1';
import Heading3 from '../components/Heading3';
import Heading4 from '../components/Heading4';

export default function Hero() {
  return (
    <section className="grid grid-cols-2 items-start gap-8">
      <div className="flex flex-col gap-4 py-20">
        <Heading1>Hi, I am</Heading1>
        <Heading1>Michaela Rudolfová</Heading1>
        <Heading4>Frontend developer based in Prague</Heading4>
        <Description>
          I graduated as an architect at CTU Prague, but few years later I have found my way to
          Frontend Development. I love to create, I love community of people around and I love learn
          more and more.
        </Description>
        <Description>
          Nowadays, my favorite technologies are React, Typescript, tailwind and graphQl.
        </Description>
        <button className="flex h-28 w-28 origin-center items-center justify-center rounded-full bg-cyan-500 font-semibold uppercase text-white transition-transform duration-300 ease-in-out hover:rotate-45 dark:bg-cyan-700">
          Write me
        </button>
      </div>

      <img src="/images/profil_800x711.png" alt="profil-photo" className="relative w-full" />
    </section>
  );
}
