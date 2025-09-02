// Max area of island. (Graph) (Depth-first search)

function maxAreaOfIsland(grid: number[][]): number {
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let maxArea = 0;

  // Step 1: Iterate each cell of the matrix.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // Step 2: If cell is island, add to stack.
      const isIsland = grid[i][j] === 1;

      if (isIsland) {
        maxArea = Math.max(maxArea, DFS(i, j));
      }
    }
  }

  // DFS algorithm.
  function DFS(i: number, j: number): number {
    if (!grid[i][j]) {
      return 0;
    }

    let currArea = 1;
    grid[i][j] = 0;

    for (const [x, y] of directions) {
      const isValid = grid[i + x] && grid[i + x][j + y];
      const isIsland = isValid && grid[i + x][j + y] === 1;

      if (isIsland) {
        currArea = currArea + DFS(i + x, j + y);
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
