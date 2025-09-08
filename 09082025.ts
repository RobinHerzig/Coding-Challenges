// Trapping rain water in elevation chart.

function trap(heights: number[]): number {
  let result = 0;
  let left = Array(heights.length).fill(0);
  let right = Array(heights.length).fill(0);

  // Populate left array.
  for (let i = 0; i < left.length; i++) {
    const curr = heights[i];
    const max = left[i - 1] || 0;

    left[i] = Math.max(curr, max);
  }

  // Populate right array.
  for (let i = right.length - 1; i >= 0; i--) {
    const curr = heights[i];
    const max = right[i + 1] || 0;

    right[i] = Math.max(curr, max);
  }

  // Calculate max water using minimum wall height.
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i];
    const leftHeight = left[i];
    const rightHeight = right[i];

    result += Math.min(leftHeight, rightHeight) - height;
  }

  return result;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
console.log(trap([4, 2, 0, 3, 2, 5]), 9);
// https://leetcode.com/problems/trapping-rain-water/

// heights: number[]. 1 <= heights.length <= 2*10^4. 0 <= heights[i] <= 10^5.
// Return the amount of rain water collected in the dips of the elevation chart.
