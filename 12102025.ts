// Rotting oranges. (Graph) (Breadth-first search)

function orangesRotting(grid: number[][]): number {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let cycles = -1;
  let fruit = 0;
  const queue: number[][] = [];

  // Step 1: Visit each cell.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const isFruit = grid[i][j] === 1;
      const isRotten = grid[i][j] === 2;

      if (isFruit) {
        fruit++;
      }

      if (isRotten) {
        queue.push([i, j]);
      }
    }
  }

  // Step 2: If no fresh fruit, answer is always 0.
  if (fruit === 0) {
    return 0;
  }

  // Step 3: Breadth-first search algorithm to explore graph.
  while (queue.length) {
    const length = queue.length;
    cycles++;

    for (let k = 0; k < length; k++) {
      const [i, j] = queue.shift();

      for (const [x, y] of directions) {
        const isValid = grid[i + x] && grid[i + x][j + y];
        const isFruit = isValid && grid[i + x][j + y] === 1;

        if (isFruit) {
          grid[i + x][j + y] = 2;
          fruit--;
          queue.push([i + x, j + y]);
        }
      }
    }
  }

  return fruit === 0 ? cycles : -1;
}

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]),
  4
);
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
  -1
);
console.log(orangesRotting([[0, 2]]), 0);
// https://leetcode.com/problems/rotting-oranges

// Grid: number[][]. 1 <= grid.length <= 10. 1 <= grid[0].length <= 10. grid[i][j] is 0, 1, or 2.
// Return the number of cycles for all fruit to become rotten.
// - 0 represents empty cell.
// - 1 represents fresh orange.
// - 2 represents rotten orange.
// - Each cycle, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
