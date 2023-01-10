import Image from 'next/image';
import React from 'react';
import CustomLink from '../components/CustomLink';
import Description from '../components/Description';
import Heading1 from '../components/Heading1';

export default function About() {
  return (
    <>
      <div className="mx-auto flex max-w-3xl flex-col gap-6 py-10 md:gap-10">
        <Heading1>About</Heading1>
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div className="relative">
              <Image
                src="/images/ja-05.jpg"
                alt="Michaela Rudolfová photo"
                width={1200}
                height={850}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Description>
                Hi, My name is Michaela Rudolfová and I have been working as a{' '}
                <span className="font-bold">Frontend developer </span>
                last 2 years. It was not my first choice. I graduated as an{' '}
                <span className="font-bold">Architect </span> at Czech Technical University in
                Prague.
              </Description>
              <Description>
                Instead of being satisfied with the work done, problems with sleep and feelings of
                frustration started to appear and{' '}
                <span className="font-bold">I decided to change it.</span>
              </Description>
            </div>
          </div>
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div className="order-2 flex flex-col gap-2 md:order-1 md:text-right">
              <Description>
                <CustomLink href="https://reactgirls.com/" target="blank" type="secondary">
                  ReactGirls
                </CustomLink>{' '}
                community, specifically their mentoring program, helped me a lot in my journey. I
                created my first project designed in Figma and written in React.
              </Description>
              <Description>
                In addition to regularly participating in meetups, this year I helped with the
                Javascript and React coaching of the autumn academy. At one of the meetups, I also
                gave a lecture on the topic of Work on travels.
              </Description>
              <CustomLink
                href="https://www.youtube.com/watch?v=3WyvP10ZWmQ&t=1263s"
                target="blank"
                type="secondary"
                className="text-sm md:text-base"
              >
                Work on travels lecture
              </CustomLink>
              <CustomLink
                href="https://reactgirls.medium.com/pr%C3%A1ce-react-v%C3%BDvoj%C3%A1%C5%99ky-z-dod%C3%A1vky-po-mentoringu-jsem-za%C4%8Dala-nom%C3%A1dit-a7bb70a82446"
                type="secondary"
                target="blank"
                className="text-sm md:text-base"
              >
                From an architect to frontend developer
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
          </div>
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div className="relative">
              <Image
                src="/images/vanlife.jpg"
                alt="Michaela Rudolfová photo"
                width={1200}
                height={850}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Description>
                I soon started to fulfill my dreams, both professional and personal. For almost a
                year, my boyfriend and I traveled in a camper van that we rebuilt ourselves, and I
                worked part-time as a Frondend developer.
              </Description>
              <Description>
                I was working on projects fitnut.com, brainee.com and onergetice.eu during their
                redesign. Since January 2022, I have been working with the company VS point on
                larger project using technologies such as typescript, tailwind and graphql.
              </Description>
              <Description>
                Now, I would like to continue this fun, fast-paced journey as a front-end developer,
                become part of a pleasant team and learn a lot of new things.
              </Description>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
