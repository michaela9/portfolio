import Button from '@/components/Button';
import Description from '@/components/Description';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  getRandomGrid: () => void;
  resetRevealedGrid: () => void;
  setIsWinning: Dispatch<SetStateAction<boolean>>;
};

const Win = ({ getRandomGrid, resetRevealedGrid, setIsWinning }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-lg font-bold md:text-3xl">You have won!!!</p>
      <Button
        onClick={() => {
          getRandomGrid();
          resetRevealedGrid();
          setIsWinning(false);
        }}
      >
        Play again
      </Button>
    </div>
  );
};

export default Win;
