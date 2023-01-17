import Image from 'next/image';
import React from 'react';
import CustomLink from '../components/CustomLink';
import Description from '../components/Description';
import Heading1 from '../components/Heading1';
import Heading4 from '../components/Heading4';

export default function Hero() {
  return (
    <section className="relative grid grid-cols-1 items-start gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-3 py-8 md:gap-4 md:py-20">
        <div>
          <Heading1>
            Hi, I am <br />
            Michaela Rudolfová
          </Heading1>
          <Heading4>Frontend Developer based in Prague</Heading4>
        </div>
        <CustomLink
          href="/game"
          type="tertiary"
          className="absolute top-0 right-20 z-30 flex items-center justify-center bg-red-400 text-xs font-black"
        >
          Play a game
        </CustomLink>
        <img
          src="/images/profil_800x711.png"
          alt="profil-photo"
          className="relative w-full bg-slate-100 pt-4 dark:bg-slate-900 md:hidden"
        />
        <Description>
          I graduated as an architect from CTU Prague, but a few years later I found my way to
          Frontend Development. I take great pleasure in creating, learning and being part of an IT
          community.
        </Description>
        <Description>
          Since the beginning of my career change, I have been an active participant in the
          ReactGirls community.
        </Description>
        <Description>
          Currently, I am interested in exploring React, Typescript, Tailwind and GraphQL
          technologies, but I am open to learning new technologies. In the future I am not afraid of
          more full-stack and backend technologies.
        </Description>
        <CustomLink href="/contact" type="tertiary">
          Write me
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
