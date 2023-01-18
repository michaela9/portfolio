import classnames from 'classnames';
import React from 'react';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

type KeyboardProps = {
  activeLetters: string[];
  inActiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

export default function Keyboard({
  activeLetters,
  inActiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(35px,1fr))] gap-2 pb-10 md:grid-cols-[repeat(auto-fit,minmax(50px,1fr))] md:gap-3">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inActiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={classnames(
              'aspect-square w-full border-4 border-my-gray-text-dark bg-gray-200 p-1 text-xl font-bold uppercase dark:bg-gray-700 md:p-2 md:text-4xl',
              {
                'cursor-pointer hover:bg-cyan-200 focus:bg-cyan-200 active:bg-gray-400': isActive,
                'opacity-30': isInActive,
              }
            )}
            disabled={isActive || isInActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
