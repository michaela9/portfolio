import React from 'react';

const HEAD = (
  <div className="absolute top-10 -right-6 h-14 w-14 rounded-full border-[8px] border-my-gray-text-dark" />
);

const BODY = <div className="absolute top-24 right-0 h-24 w-2 bg-my-gray-text-dark" />;
const RIGHT_ARM = (
  <div className="absolute top-32 -right-20 h-2 w-20 origin-bottom-left -rotate-12 bg-my-gray-text-dark" />
);

const LEFT_ARM = (
  <div className="absolute top-32 right-2 h-2 w-20 origin-bottom-right rotate-12 bg-my-gray-text-dark" />
);

const RIGHT_LEG = (
  <div className="absolute -right-[72px] top-[184px] h-2 w-20 origin-bottom-left rotate-45 bg-my-gray-text-dark" />
);

const LEFT_LEG = (
  <div className="absolute right-0 top-[184px] h-2 w-20 origin-bottom-right -rotate-45 bg-my-gray-text-dark" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};
export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="absolute top-0 right-0 h-10 w-2 bg-my-gray-text-dark" />
      <div className="ml-[116px] h-2 w-48 bg-my-gray-text-dark" />
      <div className="ml-[116px] h-96 w-2 bg-my-gray-text-dark" />
      <div className="h-2 w-60 bg-my-gray-text-dark" />
    </div>
  );
}
