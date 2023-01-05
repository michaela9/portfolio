import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section className="grid grid-cols-2 items-start gap-8">
      <div className="flex flex-col gap-4 py-20">
        <h2 className="font-montserrat text-5xl font-semibold leading-10 text-cyan-800 dark:text-white">
          Hi, I am
        </h2>
        <h2 className="font-montserrat text-5xl font-semibold leading-10 text-cyan-800 dark:text-white">
          Michaela Rudolfová
        </h2>
        <h3 className="text-xl font-bold">Frontend developer based in Prague</h3>
        <p className="leading-8">
          I graduated as an architect at CTU Prague, but few years later I have found my way to
          Frontend Development. I love to create, I love community of people around and I love learn
          more and more. Nowadays, my favorite technologies are React, Typescript, tailwind and
          graphQl.
        </p>
        <button className="flex h-28 w-28 origin-center items-center justify-center rounded-full bg-cyan-500 font-semibold uppercase text-white transition-transform duration-300 ease-in-out hover:rotate-45 dark:bg-cyan-700">
          Write me
        </button>
      </div>

      <img src="/images/profil01.png" alt="profil-photo" className="relative -top-20 w-full" />
    </section>
  );
}
