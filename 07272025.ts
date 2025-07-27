// Container with the most water. (Two-pointer)

function maxArea(heights: number[]): number {
  let result = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    // Step 1: Calcualate currArea and cache if larger than result.
    const currArea = Math.min(heights[left], heights[right]) * (right - left);
    result = Math.max(result, currArea);

    // Step 2: Move the pointer with the smaller height.
    heights[left] > heights[right] ? right-- : left++;
  }

  return result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
console.log(maxArea([1, 1]), 1);
console.log(maxArea([0, 0]), 0);
// https://leetcode.com/problems/container-with-most-water/

// heights: number[]. 2 <= heights.length <= 10^5. 0 <= heights[i] <= 10^4.
// Return the maximum amount of water that a container can store.
