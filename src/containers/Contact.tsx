import Image from 'next/image';
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import CustomLink from '../components/CustomLink';
import Description from '../components/Description';
import Heading1 from '../components/Heading1';
import Heading4 from '../components/Heading4';

export default function Contact() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-6 py-10 md:gap-10">
      <Heading1>Contact</Heading1>
      <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
        <img
          src="/images/profile-contact.jpg"
          alt="Michaela Rudolfová photo"
          className="h-full object-cover md:w-1/2"
        />
        <div className="flex flex-col gap-4">
          <Heading4>Contact me.</Heading4>
          <div>
            <Description>
              Don&apos;t hesitate to contact me via email, phone or LinkedIn. I am looking forward
              to hearing from you. You can also download my resume from my website.
            </Description>
            <Description>Thank you for visiting my website!</Description>
          </div>
          <div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
