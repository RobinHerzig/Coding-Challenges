// Trapping rain water in elevation chart.

function trap(heights: number[]): number {
  const left: number[] = [];
  const right: number[] = [];
  let result = 0;

  // Step 1: Store largest value from left.
  for (let i = 0; i < heights.length; i++) {
    const curr = heights[i];
    const prev = left[i - 1] || 0;

    left[i] = Math.max(curr, prev);
  }

  // Step 2: Store largest value from right.
  for (let i = heights.length - 1; i >= 0; i--) {
    const curr = heights[i];
    const prev = right[i + 1] || 0;

    right[i] = Math.max(curr, prev);
  }

  // Step 3: Use smaller value from left/right to calculate water height.
  for (let i = 0; i < heights.length; i++) {
    const leftHeight = left[i];
    const rightHeight = right[i];
    const curr = heights[i];

    result += Math.min(leftHeight, rightHeight) - curr;
  }

  return result;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
console.log(trap([4, 2, 0, 3, 2, 5]), 9);
// https://leetcode.com/problems/trapping-rain-water/

// heights: number[]. 1 <= heights.length <= 2*10^4. 0 <= heights[i] <= 10^5.
// Return the amount of rain water collected in the dips of the elevation chart.
