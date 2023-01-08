import { MoonIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useContext } from 'react';
import { BsLinkedin, BsFillMoonStarsFill, BsGithub } from 'react-icons/bs';
import CustomLink from './CustomLink';
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
          <Logo className="" />
        </Link>
        <ul className="flex items-center gap-10">
          <li>
            <CustomLink href="/" type="secondary">
              Home
            </CustomLink>
          </li>
          <li>
            <CustomLink href="/about" type="secondary">
              About
            </CustomLink>
          </li>
          <li>
            <CustomLink href="/contact" type="secondary">
              Contact
            </CustomLink>
          </li>
          <li>
            <CustomLink
              href="https://www.linkedin.com/in/michaela-rudolfov%C3%A1-673893185/"
              target="blank"
            >
              <BsLinkedin
                size={'1.5rem'}
                className="transition-transform duration-150 ease-in-out hover:scale-125"
              />
            </CustomLink>
          </li>
          <li>
            <CustomLink href="https://github.com/michaela9" target="blank">
              <BsGithub
                size={'1.7rem'}
                className="transition-transform duration-150 ease-in-out hover:scale-125"
              />
            </CustomLink>
          </li>
          <li>
            <button onClick={() => setDarkMode(!darkMode)}>
              <BsFillMoonStarsFill
                size={'1.5rem'}
                className="transition-transform duration-150 ease-in-out hover:scale-125"
              />
            </button>
          </li>
          <li>
            <CustomLink
              href="/images/resume.pdf"
              target="blank"
              type="primary"
              rel="noopener noreferrer"
              className="hover:scale-110"
            >
              Resume
            </CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
