import { MoonIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useContext } from 'react';
import { BsLinkedin, BsFillMoonStarsFill, BsGithub } from 'react-icons/bs';
import Logo from './Logo';

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ darkMode, setDarkMode }: Props) {
  return (
    <nav className="relative z-20 bg-gray-100 py-10 px-4 dark:bg-gray-800">
      <div className="mx-auto flex max-w-7xl justify-between">
        <Link href="/">
          <Logo className="text-my-gray-text dark:text-white" />
        </Link>
        <ul className="flex items-center gap-10">
          <li>
            <Link
              href="https://www.linkedin.com/in/michaela-rudolfov%C3%A1-673893185/"
              target="blank"
            >
              <BsLinkedin
                size={'1.5rem'}
                className="text-my-gray-text transition-transform duration-150 ease-in-out hover:scale-125 dark:text-my-gray-light"
              />
            </Link>
          </li>
          <li>
            <button onClick={() => setDarkMode(!darkMode)}>
              <BsGithub
                size={'1.7rem'}
                className="text-my-gray-text transition-transform duration-150 ease-in-out hover:scale-125 dark:text-my-gray-light"
              />
            </button>
          </li>
          <li>
            <button onClick={() => setDarkMode(!darkMode)}>
              <BsFillMoonStarsFill
                size={'1.5rem'}
                className="text-my-gray-text transition-transform duration-150 ease-in-out hover:scale-125 dark:text-my-gray-light"
              />
            </button>
          </li>
          <li>
            <Link href="#">
              <div className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-white transition-transform duration-150 ease-in-out hover:scale-110 dark:bg-cyan-700">
                Resume
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
