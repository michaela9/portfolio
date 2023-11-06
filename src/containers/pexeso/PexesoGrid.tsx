import clsxm from '@/utils/clsxm';

type Props = {
  grid: string[][];
  handleCardClick: (rowIndex: number, colIndex: number) => void;
  revealedGrid: boolean[][];
};

const PexesoGrid = ({ grid, handleCardClick, revealedGrid }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-4">
          {row.map((col, colIndex) => {
            const isRevealed = revealedGrid[rowIndex][colIndex];

            return (
              <button
                onClick={() => handleCardClick(rowIndex, colIndex)}
                disabled={isRevealed}
                className={clsxm('flex h-36 w-36 items-center justify-center hover:bg-indigo-50', {
                  'hover:bg-inherit': isRevealed,
                })}
                key={colIndex}
              >
                {isRevealed ? (
                  <img width={144} height={144} src={col} />
                ) : (
                  <img width={144} height={144} src="/images/pexeso/card-top.jpg" />
                )}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default PexesoGrid;
