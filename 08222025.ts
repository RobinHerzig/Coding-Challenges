// Rotting oranges. (Graph) (Breadth-first search)

function orangesRotting(grid: number[][]): number {
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const queue: [number, number][] = [];
  let freshFruit = 0;
  let result = -1;

  // Step 1: Visit each cell.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // Step 2: Identify rotten fruit cells.
      const isFresh = grid[i][j] === 1;
      const isRotten = grid[i][j] === 2;

      if (isFresh) {
        freshFruit++;
      } else if (isRotten) {
        queue.push([i, j]);
      }
    }
  }

  if (freshFruit === 0) {
    return 0;
  }

  // Breadth-first search algorithm.
  while (queue.length) {
    const length = queue.length;
    result++;
    console.log(queue, result);

    for (let k = 0; k < length; k++) {
      const [i, j] = queue.shift()!;

      for (const [x, y] of directions) {
        const isValid = grid[i + x] && grid[i + x][j + y];
        const isFresh = isValid && grid[i + x][j + y] === 1;

        if (isFresh) {
          queue.push([i + x, j + y]);
          grid[i + x][j + y] = 2;
          freshFruit--;
        }
      }
    }
  }

  return freshFruit === 0 ? result : -1;
}

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]), 4);
console.log(orangesRotting([[2, 1, 1], [0, 1, 1], [1, 0, 1]]), -1);
console.log(orangesRotting([[0, 2]]), 0);
// https://leetcode.com/problems/rotting-oranges

// Grid: number[][]. 1 <= grid.length <= 10. 1 <= grid[0].length <= 10. grid[i][j] is 0, 1, or 2.
// Return the number of cycles for all fruit to become rotten.
// - 0 represents empty cell.
// - 1 represents fresh orange.
// - 2 represents rotten orange.
// - Each cycle, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
