import { Dispatch, SetStateAction } from 'react';

type Props = {
  getRandomGrid: () => void;
  resetRevealedGrid: () => void;
  setIsWinning: Dispatch<SetStateAction<boolean>>;
};

const Win = ({ getRandomGrid, resetRevealedGrid, setIsWinning }: Props) => {
  return (
    <div className="space-y-4">
      <p>You have won!!!</p>
      <button
        className="rounded-md border border-indigo-700 bg-indigo-50 px-4 py-2 text-indigo-700 hover:bg-indigo-100"
        onClick={() => {
          getRandomGrid();
          resetRevealedGrid();
          setIsWinning(false);
        }}
      >
        Play again
      </button>
    </div>
  );
};

export default Win;
