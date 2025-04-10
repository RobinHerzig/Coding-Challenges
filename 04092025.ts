// Minimum average of largest and smallest elements.

function minimumAverage(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let minAverage: number = nums.at(-1)!;

  while (left < right) {
    const min = nums[left];
    const max = nums[right];
    const average = (min + max) / 2;

    minAverage = Math.min(minAverage, average);
    left++;
    right--;
  }

  return minAverage;
}

console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]), 5.5);
console.log(minimumAverage([1, 9, 8, 3, 10, 5]), 5.5);
console.log(minimumAverage([1, 2, 3, 7, 8, 9]), 5.0);
// https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements

// nums: number[]. 2 <= nums.length <= 50. Length is always even. 1 <= nums[i] <= 50.
// Return the minimum average between the largest and smallest elements.
