// Largest rectangle in histogram. (Monotonic stack)

function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [-1]; // Prepopulate with sentinel index "-1" as left boundary.
  let maxArea = 0;

  for (let i = 0; i <= heights.length; i++) {
    const currHeight = i === heights.length ? 0 : heights[i];

    while (stack.length > 1 && currHeight < heights[stack.at(-1)!]) {
      const j = stack.pop()!;
      const prevHeight = heights[j];
      const width = i - stack.at(-1)! - 1;

      maxArea = Math.max(maxArea, prevHeight * width);
    }

    stack.push(i);
  }

  return maxArea;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
console.log(largestRectangleArea([2, 4]), 4);
// https://leetcode.com/problems/largest-rectangle-in-histogram/

// heights: number[]. 1 <= heights.length <= 10^5. 0 <= heights[i] <= 10^4.
// Return the area of the largest rectangle in the histogram.
// - A rectangle can be made up of multiple bars.
