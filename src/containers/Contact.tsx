import Image from 'next/image';
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import CustomLink from '../components/CustomLink';
import Description from '../components/Description';
import Heading1 from '../components/Heading1';
import Heading4 from '../components/Heading4';

export default function Contact() {
  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col gap-10 py-10">
        <Heading1>Contact</Heading1>
        <div className="l">
          <div className="flex items-center gap-10">
            <img
              src="/images/ja-01.jpg"
              alt="Michaela Rudolfová photo"
              className="h-full w-1/2 object-cover"
            />
            <div className="flex flex-col gap-3">
              <Heading4>Contact me.</Heading4>
              <Description>
                Dont worry to contact me on email, phone or linkedIn. I am looking forward. You can
                also download my resume.
              </Description>
              <Description>michaela.rudolfova@seznam.cz</Description>
              <Description>+420 728 442 119</Description>
              <div className="flex items-center justify-between gap-2">
                <CustomLink
                  href="https://www.linkedin.com/in/michaela-rudolfov%C3%A1-673893185/"
                  target="blank"
                >
                  <BsLinkedin
                    size={'1.5rem'}
                    className="transition-transform duration-150 ease-in-out hover:scale-125"
                  />
                </CustomLink>
                <CustomLink
                  href="/images/resume.pdf"
                  target="blank"
                  type="secondary"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
