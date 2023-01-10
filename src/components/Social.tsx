import React, { Dispatch, SetStateAction } from 'react';
import { BsFillMoonStarsFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import CustomLink from './CustomLink';

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export default function Social({ setDarkMode, darkMode }: Props) {
  return (
    <div className="flex items-center gap-10 py-6 md:py-0">
      <li>
        <CustomLink
          href="https://www.linkedin.com/in/michaela-rudolfov%C3%A1-673893185/"
          target="blank"
        >
          <BsLinkedin
            size={'1.7rem'}
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
    </div>
  );
}
