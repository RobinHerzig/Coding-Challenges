// Rotting oranges. (Graph) (Breadth-first search)

function orangesRotting(grid: number[][]): number {
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // North, East, South, West.
  const queue: number[][] = [];
  let freshCount = 0;
  let cycles = 0;

  // Step 1: Iterate each cell of the grid.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // Step 2: If cell is rotten fruit, add to stack.
      const isRotten = grid[i][j] === 2;
      const isFresh = grid[i][j] === 1;

      if (isRotten) {
        queue.push([i, j]);
      } else if (isFresh) {
        freshCount++;
      }
    }
  }

  // Step 3: While the stack contains rotten fruit, call breadth-first search algorithm to spread into fresh fruit.
  while (queue.length && freshCount > 0) {
    const length = queue.length;

    for (let k = 0; k < length; k++) {
      const [i, j] = queue.shift()!;

      for (const [x, y] of directions) {
        const isCell = grid[i + x] && grid[i + x][j + y];
        const isFresh = isCell && grid[i + x][j + y] === 1;

        if (isFresh) {
          queue.push([i + x, j + y]);
          grid[i + x][j + y] = 2;
          freshCount--;
        }
      }
    }

    cycles++;
  }

  return freshCount === 0 ? cycles : -1;
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
