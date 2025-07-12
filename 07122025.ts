// Max area of island. (Graph) (Breadth-first search)

function maxAreaOfIsland(grid: number[][]): number {
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // North, east, south, west
  let maxArea = 0;

  function bfs(i, j) {
    const queue = [[i, j]];
    let area = 1;

    while (queue.length) {
      const [i, j] = queue.shift();
      grid[i][j] = 0;

      for (const [x, y] of directions) {
        const isValidCell = grid[i + x] && grid[i + x][j + y];

        if (isValidCell) {
          queue.push([i + x, j + y]);
          grid[i + x][j + y] = 0;
          area++;
        }
      }
    }

    return area;
  }

  // Step 1: Find islands.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const isIsland = grid[i][j] === 1;

      if (isIsland) {
        // Step 2: Call recursive BFS function to calculate island size.
        maxArea = Math.max(maxArea, bfs(i, j));
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
