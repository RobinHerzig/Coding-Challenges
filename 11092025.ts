// Max area of island. (Graph) (Depth-first search)

function maxAreaOfIsland(grid: number[][]): number {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let maxArea = 0;

  // Step 1: Visit each cell.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // Step 2: Push island cells to stack.
      const isIsland = grid[i][j] === 1;

      if (isIsland) {
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
  }

  // Step 3: DFS algorithm.
  function dfs(i: number, j: number): number {
    const isIsland = grid[i] && grid[i][j];

    // Base case
    if (!isIsland) {
      return 0;
    }

    // Recursive case
    let area = 1;
    grid[i][j] = 0;

    for (const [x, y] of directions) {
      area += dfs(i + x, j + y);
    }

    return area;
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
