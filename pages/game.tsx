import Head from 'next/head';
import Pexeso from '@/containers/pexeso/Pexeso';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Michaela Rudolfova portfolio</title>
        <meta name="description" content="Michaela Rudolfova frontend portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-gray-50 px-6 dark:bg-gray-800 dark:text-my-gray-light">
          <Pexeso />
        </div>
      </main>
    </>
  );
}
