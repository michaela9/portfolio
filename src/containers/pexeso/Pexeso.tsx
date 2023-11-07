import { useState } from 'react';

import Win from './Win';
import PexesoGrid from './PexesoGrid';
import { createRandomPexesoGrid, gridAllFalse } from '@/utils/pexesoUtils';

type CellT = {
  row: number;
  col: number;
};

const Pexeso = () => {
  const [grid, setGrid] = useState<string[][]>(createRandomPexesoGrid() as string[][]);
  const [revealedGrid, setRevealedGrid] = useState(gridAllFalse(grid));
  const [previousClick, setPreviousClick] = useState<CellT | undefined>();
  const [isWinning, setIsWinning] = useState(false);

  const handleCardClick = (rowIndex: number, colIndex: number) => {
    if (revealedGrid[rowIndex][colIndex]) return;
    const clickedImage = grid[rowIndex][colIndex];
    const newRevealedGrid = [...revealedGrid];
    newRevealedGrid[rowIndex][colIndex] = true;
    setRevealedGrid(newRevealedGrid);

    if (previousClick) {
      const previousClickImage = grid[previousClick.row][previousClick.col];

      if (previousClickImage !== clickedImage) {
        setTimeout(() => {
          newRevealedGrid[rowIndex][colIndex] = false;
          newRevealedGrid[previousClick.row][previousClick.col] = false;
          setRevealedGrid([...newRevealedGrid]);
        }, 1000);
      } else {
        const hasWon = revealedGrid.flat().every((item) => item);
        if (hasWon) {
          setTimeout(() => {
            setIsWinning(true);
          });
        }
      }
      setPreviousClick(undefined);
    } else {
      setPreviousClick({ row: rowIndex, col: colIndex });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      <PexesoGrid grid={grid} revealedGrid={revealedGrid} handleCardClick={handleCardClick} />
      {isWinning && (
        <Win
          getRandomGrid={() => setGrid(createRandomPexesoGrid() as string[][])}
          resetRevealedGrid={() => setRevealedGrid(gridAllFalse(grid))}
          setIsWinning={setIsWinning}
        />
      )}
    </div>
  );
};

export default Pexeso;
