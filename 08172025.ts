// Trapping rain water in elevation chart.

function trap(heights: number[]): number {
  const leftArr: number[] = [];
  const rightArr: number[] = [];
  const lowestHeights: number[] = [];
  let result = 0;

  // Step 1: Create array of lowest heights from left.
  for (let i = 0; i < heights.length; i++) {
    const curr = heights[i];
    const prev = leftArr[i - 1] || 0;

    leftArr[i] = Math.max(curr, prev);
  }

  // Step 2: Create array of lowest heights from right.
  for (let i = heights.length - 1; i >= 0; i--) {
    const curr = heights[i];
    const prev = rightArr[i + 1] || 0;

    rightArr[i] = Math.max(curr, prev);
  }

  // Step 3: Calculate water height per unit.
  for (let i = 0; i < heights.length; i++) {
    const left = leftArr[i];
    const right = rightArr[i];

    result += Math.min(left, right) - heights[i];
  }

  return result;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
console.log(trap([4, 2, 0, 3, 2, 5]), 9);
// https://leetcode.com/problems/trapping-rain-water/

// heights: number[]. 1 <= heights.length <= 2*10^4. 0 <= heights[i] <= 10^5.
// Return the amount of rain water collected in the dips of the elevation chart.
