// Max area of island. (Graph) (Breadth-first search)

function maxAreaOfIsland(grid: number[][]): number {
  let maxArea = 0;

  // Step 1: Iterate each cell of the grid.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // Step 2: Explore current cell, if island.
      const isIsland = grid[i][j] === 1;

      if (isIsland) {
        maxArea = Math.max(maxArea, bfs(i, j));
      }
    }
  }

  // Step 3: Breadth-first search algorithm.
  function bfs(i: number, j: number): number {
    const directions = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ];
    const queue: number[][] = [[i, j]];
    let currArea = 1;
    grid[i][j] = 0;

    while (queue.length) {
      const length = queue.length;

      for (let k = 0; k < length; k++) {
        const [i, j] = queue.shift();

        for (const [x, y] of directions) {
          const isValid = grid[i + x] && grid[i + x][j + y];
          const isIsland = isValid && grid[i + x][j + y] === 1;

          if (isIsland) {
            queue.push([i + x, j + y]);
            grid[i + x][j + y] = 0;
            currArea++;
          }
        }
      }
    }

    return currArea;
  }

  return maxArea;
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
