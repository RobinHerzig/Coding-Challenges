// Max area of island. (Graph) (Breadth-first search)

function maxAreaOfIsland(grid: number[][]): number {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let maxArea = 0;

  // Step 1: Visit each cell.
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const cell = grid[i][j];
      const isIsland = cell === 1;

      // Step 2: If cell is island, pass into bfs().
      if (isIsland) {
        maxArea = Math.max(maxArea, bfs(i, j));
      }
    }
  }

  // Step 3: BFS algorithm.
  function bfs(i: number, j: number): number {
    const queue: number[][] = [[i, j]];
    let currArea = 1;
    grid[i][j] = 0;

    while (queue.length) {
      const length = queue.length;

      for (let k = 0; k < length; k++) {
        const [i, j] = queue.shift();

        for (const [x, y] of directions) {
          const isIsland = grid[i + x] && grid[i + x][j + y];

          if (isIsland) {
            queue.push([i + x, j + y]);
            currArea++;
            grid[i + x][j + y] = 0;
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
