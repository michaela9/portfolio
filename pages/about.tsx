import Head from 'next/head';
import About from '../src/containers/About';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Michaela Rudolfova portfolio</title>
        <meta name="description" content="Michaela Rudolfova frontend portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-gray-50 px-4 dark:bg-gray-800 dark:text-my-gray-light md:px-6">
          <About />
        </div>
      </main>
    </>
  );
}
