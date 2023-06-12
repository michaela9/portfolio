import Image from 'next/image';
import React from 'react';
import AboutGridWrapper from '../components/AboutGridWrapper';
import CustomLink from '../components/CustomLink';
import Description from '../components/Description';
import Heading1 from '../components/Heading1';

export default function About() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-6 py-10 md:gap-10">
      <Heading1>About</Heading1>
      <div className="flex flex-col gap-10 md:gap-20">
        <AboutGridWrapper>
          <Image
            src="/images/react-academy.jpg"
            alt="Michaela Rudolfová photo"
            width={1200}
            height={850}
          />
          <div className="flex flex-col gap-2">
            <Description>
              Hello, my name is Michaela Rudolfová and I have been a Frontend Developer for the past
              two years. My initial path of study was in architecture, which I completed at the
              Czech Technical University in Prague. However,
            </Description>
            <Description>
              I found myself becoming increasingly unsatisfied and frustrated, so I chose to make a
              change.
            </Description>
          </div>
        </AboutGridWrapper>
        <AboutGridWrapper>
          <div className="order-2 flex flex-col gap-2 md:order-1 md:text-right">
            <Description>
              I have been actively involved in the{' '}
              <CustomLink href="https://reactgirls.com/" target="blank" type="secondary">
                ReactGirls
              </CustomLink>{' '}
              community since I began my new career path . I started by participating in a mentoring
              program, resulting in the new ReactGirls website, written in React and designed in
              Figma.
            </Description>
            <Description>
              In addition to regularly participating in meetups, this year I was a lecturer at React
              academy and I helped as a coach with the HTML, CSS and Javascipt Academy. I gave a
              lecture on the topic of &quot;Work on Travels&quot; at one of the meetups.
            </Description>
            <CustomLink
              href="https://www.youtube.com/watch?v=3WyvP10ZWmQ"
              target="blank"
              type="secondary"
              className="text-sm md:text-base"
            >
              Work on Travels lecture
            </CustomLink>
            <CustomLink
              href="https://reactgirls.medium.com/pr%C3%A1ce-react-v%C3%BDvoj%C3%A1%C5%99ky-z-dod%C3%A1vky-po-mentoringu-jsem-za%C4%8Dala-nom%C3%A1dit-a7bb70a82446"
              type="secondary"
              target="blank"
              className="text-sm md:text-base"
            >
              From an Architect to a Frontend Developer
            </CustomLink>
          </div>
          <div className="relative order-1 md:order-2">
            <Image
              src="/images/academy.jpg"
              alt="Michaela Rudolfová photo"
              width={1200}
              height={850}
            />
          </div>
        </AboutGridWrapper>
        <AboutGridWrapper>
          <Image
            src="/images/vanlife.jpg"
            alt="Michaela Rudolfová photo"
            width={1200}
            height={850}
          />
          <div className="flex flex-col gap-2">
            <Description>
              For the past few years, I&apos;ve had the opportunity to pursue both my personal and
              professional aspirations. My partner and I had the privilege of almost one year of
              travelling with a van we renovated ourselves. During this time, I also worked
              part-time as a Frontend Developer.
            </Description>
            <Description>
              I&apos;ve worked on projects for Fitnut, Brainee academy and Onergetice.eu. Since
              January 2022, I&apos;ve been working for VS Point on larger projects using
              technologies such as React, Typescript, Tailwind and GraphQL.
            </Description>
          </div>
        </AboutGridWrapper>
        <Description>
          I am seeking an opportunity to join a dynamic team as a Frontend Developer and create
          innovative, user-friendly web applications. I would like to contribute with my enthusiasm,
          creativity and problem-solving skills to the team and I am eager to acquire new knowledge
          and skills.
        </Description>
      </div>
    </section>
  );
}
