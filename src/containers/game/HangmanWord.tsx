import classnames from 'classnames';
import React from 'react';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="flex gap-2 self-center font-mono text-3xl font-bold uppercase md:gap-4 md:text-5xl">
      {wordToGuess.split('').map((letter, index) => (
        <div className="border-b-8 border-my-gray-text-dark" key={index}>
          <div
            className={classnames(
              !guessedLetters.includes(letter) && reveal
                ? 'text-red-500'
                : 'text-black dark:text-white',
              guessedLetters.includes(letter) || reveal ? 'visible' : 'invisible'
            )}
          >
            {letter}
          </div>
        </div>
      ))}
    </div>
  );
}
