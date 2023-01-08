import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import CustomLink from './CustomLink';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-end border pb-10">
        <CustomLink href="">napiště mi</CustomLink>
        <div className="flex flex-col items-center gap-4 pt-20">
          <Link href="/">
            <Logo className="text-my-gray-text dark:text-white" />
          </Link>
          <p>Đ copyright Michaela Rudolfová 2022</p>
        </div>
        <ul className="flex items-center justify-end gap-10">
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
            <Link href="/">
              <BsGithub
                size={'1.7rem'}
                className="text-my-gray-text transition-transform duration-150 ease-in-out hover:scale-125 dark:text-my-gray-light"
              />
            </Link>
          </li>
          <li>
            <CustomLink href="#">Resume</CustomLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
