import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import CustomLink from './CustomLink';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-end pb-10">
        <button className="flex h-28 w-28 origin-center items-center justify-center rounded-full bg-cyan-500 font-semibold uppercase text-white transition-transform duration-300 ease-in-out hover:rotate-45 dark:bg-cyan-700">
          Write me
        </button>
        <div className="flex flex-col items-center gap-4 pt-20">
          <Link href="/">
            <Logo className="" />
          </Link>
          <p>© Michaela Rudolfová 2023</p>
        </div>
        <ul className="flex items-center justify-end gap-10">
          <li>
            <Link
              href="https://www.linkedin.com/in/michaela-rudolfov%C3%A1-673893185/"
              target="blank"
            >
              <BsLinkedin
                size={'1.5rem'}
                className="transition-transform duration-150 ease-in-out hover:scale-125"
              />
            </Link>
          </li>
          <li>
            <Link href="/">
              <BsGithub
                size={'1.7rem'}
                className="transition-transform duration-150 ease-in-out hover:scale-125"
              />
            </Link>
          </li>
          <li>
            <CustomLink
              href="/images/resume.pdf"
              target="blank"
              type="secondary"
              rel="noopener noreferrer"
            >
              Download Resume
            </CustomLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
