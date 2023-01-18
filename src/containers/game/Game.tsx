import classnames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import Button from '../../components/Button';
import words from '../../data/wordList.json';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

export default function Game() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));
  const activeLetters = guessedLetters.filter((letter) => wordToGuess.includes(letter));

  console.log(wordToGuess);

  const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter));
  const isLoser = incorrectLetters.length >= 6;

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== 'enter') return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, []);

  return (
    <div className="flex max-w-[1000px] flex-col gap-8 md:mx-auto">
      <div className="grid grid-cols-1 items-start justify-start gap-10 md:items-end lg:grid-cols-2">
        <div className="flex flex-col gap-4 md:items-center">
          <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
          <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
        </div>
        <div className="flex flex-col gap-4">
          <div
            className={classnames('text-center text-2xl font-bold', {
              'text-my-green': isWinner,
              'text-red-500': isLoser,
            })}
          >
            <div className="mb-4">
              {isWinner && 'Winner!! Refresh if you want to try again.'}
              {isLoser && 'Nice try!! Refresh if you want to try again.'}
            </div>
            {isWinner || isLoser ? (
              <Button onClick={() => window.location.reload()}>Play again</Button>
            ) : null}
          </div>
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetters={activeLetters}
            inActiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </div>
  );
}
