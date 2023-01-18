import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import CustomLink from './CustomLink';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="px-4 dark:bg-gray-800 dark:text-my-gray-light">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-3 pb-4 md:grid-cols-3 md:gap-0 md:pb-10 lg:gap-6">
        <CustomLink href="/contact" type="tertiary">
          Write me
        </CustomLink>
        <div className="flex flex-col items-center gap-4 pt-2 md:pt-20">
          <Link href="/">
            <Logo className="" />
          </Link>
          <p className="hidden md:block">© Michaela Rudolfová 2023</p>
        </div>
        <ul className="flex items-center justify-center gap-4 md:justify-end md:gap-10">
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
            <Link href="https://github.com/michaela9" target="blank">
              <BsGithub
                size={'1.7rem'}
                className="transition-transform duration-150 ease-in-out hover:scale-125"
              />
            </Link>
          </li>
          <li>
            <CustomLink
              href="/images/cv_rudolfova_2023.pdf"
              target="blank"
              type="secondary"
              rel="noopener noreferrer"
            >
              Download Resume
            </CustomLink>
          </li>
        </ul>
        <p className="text-center text-xs md:hidden">© Michaela Rudolfová 2023</p>
      </div>
    </footer>
  );
}
