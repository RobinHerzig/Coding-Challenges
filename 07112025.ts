// Max area of island. (Graph) (Depth-first search)

function maxAreaOfIsland(grid: number[][]): number {
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // North, east, south, west
  let maxArea = 0;

  function dfs(i, j) {
    const isValidCell = grid[i] && grid[i][j];

    // Base case.
    if (!isValidCell) {
      return 0;
    }

    grid[i][j] = 0;
    let area = 1;

    for (const [x, y] of directions) {
      area += dfs(i + x, j + y);
    }

    return area;
  }

  // Step 1: Find islands.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const isIsland = grid[i][j] === 1;

      if (isIsland) {
        // Step 2: Call recursive DFS function to calculate island size.
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
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
