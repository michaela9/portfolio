export function getImagePath(imageNumber: number) {
  return `/images/pexeso/turecko-${imageNumber}.jpg`;
}

export function shuffleArray(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

export function createRandomPexesoGrid() {
  const uniqueImages = Array.from({ length: 8 }, (_, index) => getImagePath(index + 1));
  const shuffledImages = shuffleArray([...uniqueImages, ...uniqueImages]);

  const splicedGrid = Array.from({ length: 4 }, () => shuffledImages.splice(0, 4));

  return shuffleArray(splicedGrid);
}

export function gridAllFalse(grid: string[][]) {
  return new Array(grid.length).fill('').map(() => new Array(grid[0].length).fill(false));
}
