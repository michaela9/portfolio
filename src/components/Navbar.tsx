import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { navigation } from '../data';
import CustomLink from './CustomLink';
import Logo from './Logo';
import Social from './Social';

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ darkMode, setDarkMode }: Props) {
  const router = useRouter();
  const routerPathname = router.pathname;
  return (
    <nav className="relative z-20 hidden bg-gray-50 py-10 px-4 dark:bg-gray-800 dark:text-my-gray-light md:block">
      <div className="mx-auto flex max-w-7xl justify-between">
        <Link href="/">
          <Logo className="" />
        </Link>
        <div className="relative flex items-center gap-10">
          {navigation.map((item) => (
            <CustomLink
              key={item.id}
              href={item.href}
              type="secondary"
              comparison={item.href === routerPathname}
            >
              {item.title}
            </CustomLink>
          ))}
          <Social darkMode={darkMode} setDarkMode={setDarkMode} />
          <CustomLink
            href="/images/resume.pdf"
            target="blank"
            type="primary"
            rel="noopener noreferrer"
            className="inline-block hover:scale-105"
          >
            Resume
          </CustomLink>
        </div>
      </div>
    </nav>
  );
}
