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
    <div className="flex gap-4 font-mono text-7xl font-bold uppercase">
      {wordToGuess.split('').map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter) || reveal;
        return (
          <span key={index} className="border-b-8 border-my-gray-text-dark ">
            <span
              className={classnames(
                isGuessed ? 'block' : 'hidden',
                guessedLetters.includes(letter) && reveal
                  ? 'text-red-500'
                  : 'text-my-gray-text-dark'
              )}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
