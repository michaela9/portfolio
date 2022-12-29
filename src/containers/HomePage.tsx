import React from 'react';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [theme, setTheme] = useState('');

  //   const userTheme = localStorage.getItem('theme');
  //   const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <div className="flex h-screen items-center justify-center bg-indigo-100 text-red-500 dark:bg-black">
      <button onClick={handleTheme} className="rounded-3xl bg-green-200 p-4 dark:bg-red-100">
        AHOJ!!!
      </button>
    </div>
  );
}
