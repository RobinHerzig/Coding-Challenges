// Trapping rain water in elevation chart.

function trap(heights: number[]): number {
  const leftMax: number[] = [];
  const rightMax: number[] = [];
  const minMax: number[] = [];
  let result = 0;

  // Step 1: Calculate running maximum height value from the left.
  for (let i = 0; i < heights.length; i++) {
    const curr = heights[i];
    const prev = leftMax[i - 1] || 0;

    leftMax[i] = Math.max(curr, prev);
  }

  // Step 2: Calculate running maximum height value from the right.
  for (let i = heights.length - 1; i >= 0; i--) {
    const curr = heights[i];
    const prev = rightMax[i + 1] || 0;

    rightMax[i] = Math.max(curr, prev);
  }

  // Step 3: Cache the minimum value between the left and right maximum height.
  // This represents the max possible height of the water in this column, before it'd spill over.
  for (let i = 0; i < heights.length; i++) {
    const leftMaxVal = leftMax[i];
    const rightMaxVal = rightMax[i];

    minMax[i] = Math.min(leftMaxVal, rightMaxVal);
  }

  // Step 4: Find the difference between the potential water height and the block height underneath for each column.
  for (let i = 0; i < heights.length; i++) {
    const waterHeight = minMax[i];
    const blockHeight = heights[i];

    result += waterHeight - blockHeight;
  }

  return result;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
console.log(trap([4, 2, 0, 3, 2, 5]), 9);
// https://leetcode.com/problems/trapping-rain-water/

// heights: number[]. 1 <= heights.length <= 2*10^4. 0 <= heights[i] <= 10^5.
// Return the amount of rain water collected in the dips of the elevation chart.
