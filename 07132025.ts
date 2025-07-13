// Rotting oranges. (Graph) (Breadth-first search)

function orangesRotting(grid: number[][]): number {
  const queue: number[][] = [];
  let fresh = 0;
  let iterations = 0;

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      // Step 1: Count fresh fruits.
      if (grid[x][y] === 1) {
        fresh++;
      }

      // Step 2: Push coordinates of rotten fruit in queue.
      if (grid[x][y] === 2) {
        queue.push([x, y]);
      }
    }
  }

  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

  while (fresh > 0 && queue.length > 0) {
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const [x, y] = queue.shift();

      // Step 3: Check 4-directionally adjacent cells for fresh fruit.
      for (const [xDir, yDir] of directions) {
        const xCurr = x + xDir;
        const yCurr = y + yDir;

        const isValidX = xCurr >= 0 && xCurr < grid.length;
        const isValidY = yCurr >= 0 && yCurr < grid[0].length;

        if (!isValidX || !isValidY) {
          continue;
        }

        // Step 4: If cell is valid and contains fresh fruit, make it rotten.
        const isFresh = grid[xCurr][yCurr] === 1;

        if (isFresh) {
          grid[xCurr][yCurr] = 2;
          queue.push([xCurr, yCurr]);
          fresh--;
        }
      }
    }

    iterations++;
  }

  return fresh === 0 ? iterations : -1;
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
