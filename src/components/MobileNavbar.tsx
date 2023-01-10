import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { Dispatch, Fragment, SetStateAction } from 'react';
import { BsFillMoonStarsFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { navigation } from '../data';

import CustomLink from './CustomLink';
import Logo from './Logo';

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export default function MobileNavbar({ darkMode, setDarkMode }: Props) {
  return (
    <Menu as="nav" className="bg-pbi-dark-blue relative z-20 bg-gray-50 dark:bg-gray-800 md:hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-6 dark:text-gray-50">
          <Logo className="relative z-10 w-10" />
          <Menu.Button className="text-pbi-red inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </Menu.Button>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Menu.Items className="absolute inset-x-0 top-0 origin-top-right transform transition md:hidden">
          <div className="bg-pbi-dark-blue divide-y-2 divide-gray-50 ring-1 ring-black ring-opacity-5">
            <Menu.Item>
              <div className="text-pbi-red absolute right-0 top-0 z-50 inline-flex items-center justify-center py-5 px-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
              </div>
            </Menu.Item>
            <div className="relative">
              <ul className="relative flex h-screen flex-col items-center justify-center gap-8 bg-gray-50 py-16 uppercase dark:bg-gray-800">
                {navigation.map((item) => (
                  <Menu.Item key={item.id}>
                    <CustomLink href={item.href} type="secondary">
                      {item.title}
                    </CustomLink>
                  </Menu.Item>
                ))}
                <div className="flex items-center gap-10 py-6 dark:text-gray-50 md:py-0">
                  <Menu.Item>
                    <CustomLink
                      href="https://www.linkedin.com/in/michaela-rudolfov%C3%A1-673893185/"
                      target="blank"
                    >
                      <BsLinkedin
                        size={'1.7rem'}
                        className="transition-transform duration-150 ease-in-out hover:scale-125"
                      />
                    </CustomLink>
                  </Menu.Item>
                  <Menu.Item>
                    <CustomLink href="https://github.com/michaela9" target="blank">
                      <BsGithub
                        size={'1.7rem'}
                        className="transition-transform duration-150 ease-in-out hover:scale-125"
                      />
                    </CustomLink>
                  </Menu.Item>
                  <Menu.Item>
                    <button onClick={() => setDarkMode(!darkMode)}>
                      <BsFillMoonStarsFill
                        size={'1.5rem'}
                        className="transition-transform duration-150 ease-in-out hover:scale-125"
                      />
                    </button>
                  </Menu.Item>
                </div>
                <Menu.Item>
                  <CustomLink
                    href="/images/resume.pdf"
                    target="blank"
                    type="primary"
                    rel="noopener noreferrer"
                    className="inline-block hover:scale-105"
                  >
                    Resume
                  </CustomLink>
                </Menu.Item>
              </ul>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
