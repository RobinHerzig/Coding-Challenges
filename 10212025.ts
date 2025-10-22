// Trapping rain water in elevation chart.

function trap(heights: number[]): number {
  const left = Array(heights.length);
  const right = Array(heights.length);
  let result = 0;

  // Step 1: Calculate max values from left.
  for (let i = 0; i < heights.length; i++) {
    const curr = heights[i];
    const prev = left[i - 1] || 0;

    left[i] = Math.max(prev, curr);
  }

  // Step 2: Calcultate max values from right.
  for (let i = heights.length - 1; i >= 0; i--) {
    const curr = heights[i];
    const prev = right[i + 1] || 0;

    right[i] = Math.max(prev, curr);
  }

  // Step 3: Subtract height from smaller of left/right to calculate water.
  for (let i = 0; i < heights.length; i++) {
    const leftVal = left[i];
    const rightVal = right[i];
    const height = heights[i];

    const water = Math.min(leftVal, rightVal) - height;
    result += water;
  }

  return result;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
console.log(trap([4, 2, 0, 3, 2, 5]), 9);
// https://leetcode.com/problems/trapping-rain-water/

// heights: number[]. 1 <= heights.length <= 2*10^4. 0 <= heights[i] <= 10^5.
// Return the amount of rain water collected in the dips of the elevation chart.
