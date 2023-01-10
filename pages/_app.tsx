import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../src/components/Navbar';
import { useState } from 'react';
import Footer from '../src/components/Footer';
import MobileNavbar from '../src/components/MobileNavbar';

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <MobileNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
