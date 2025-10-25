// Max area of island. (Graph) (Breadth-first search)

function maxAreaOfIsland(grid: number[][]): number {
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let result = 0;

  // Step 1: Visit each cell.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // Step 2: If cell is an island, add to queue.
      const isIsland = grid[i][j] === 1;

      if (isIsland) {
        result = Math.max(result, bfs([i, j]));
      }
    }
  }

  // BFS algorithm.
  function bfs([i, j]) {
    const queue = [[i, j]];
    let result = 1;
    grid[i][j] = 0;

    while (queue.length) {
      const length = queue.length;

      for (let i = 0; i <= length; i++) {
        const [i, j] = queue.shift();

        for (const [x, y] of directions) {
          const isCell = grid[i + x] && grid[i + x][j + y];
          const isIsland = isCell && grid[i + x][j + y] === 1;

          if (isIsland) {
            queue.push([i + x, j + y]);
            grid[i + x][j + y] = 0;
            result += 1;
          }
        }
      }
    }

    return result;
  }
}

console.log(
  maxAreaOfIsland([
    [0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 0, 1],
    [0, 1, 0, 0, 1],
  ]),
  6
);
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]), 0);
// https://leetcode.com/problems/max-area-of-island/

// grid: number[][]. 1 <= grid.length <= 50. 1 <= grid[i].length <= 50. Grid[i][j] is 0 or 1.
// Return the size of the largest island, or 0.
