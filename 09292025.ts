// Max area of island. (Graph) (Depth-first search)

function maxAreaOfIsland(grid: number[][]): number {
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  const stack: number[][] = [];
  let maxArea = 0;

  // Step 1: Visit each cell of the grid.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // Step 2: If island, use dfs to calculate size.
      const isIsland = grid[i][j] === 1;

      if (isIsland) {
        stack.push([i, j]);
        maxArea = Math.max(maxArea, dfs(1));
      }
    }
  }

  function dfs(currArea): number {
    if (!stack.length) {
      return currArea;
    }

    const [i, j] = stack.pop()!;
    grid[i][j] = 0;

    for (const [x, y] of directions) {
      const isValid = grid[i + x] && grid[i + x][j + y];
      const isIsland = isValid && grid[i + x][j + y] === 1;

      if (isIsland) {
        stack.push([i + x, j + y]);
        grid[i][j] = 0;
        currArea = dfs(currArea + 1);
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
