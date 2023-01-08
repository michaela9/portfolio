import Head from 'next/head';
import { useContext, useState } from 'react';
import HomePage from '../src/containers/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Michaela Rudolfova portfolio</title>
        <meta name="description" content="Michaela Rudolfova frontend portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-gray-100 px-6 text-my-gray-text-dark dark:bg-gray-800 dark:text-my-gray-text-light">
          <HomePage />
        </div>
      </main>
    </>
  );
}
