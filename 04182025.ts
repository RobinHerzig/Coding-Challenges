// K strongest values in an array.

function getStrongest(nums: number[], k: number): number[] {
  // Sort nums and cache the middle value.
  const middle = nums.sort((a, b) => a - b)[Math.floor((nums.length - 1) / 2)];

  // Sort nums by strength. If strengths are equal, sort by the value.
  nums.sort((a, b) => {
    const strengthA = Math.abs(a - middle);
    const strengthB = Math.abs(b - middle);

    return strengthA === strengthB ? b - a : strengthB - strengthA;
  });

  return nums.slice(0, k);
}

// https://leetcode.com/problems/the-k-strongest-values-in-an-array

// nums: number[]. 1 <= nums.length <= 10^5. -10^5 <= nums[i] <= 10^5.
// k: number. 1 <= k <= nums.length.
// Return a list of the strongest k values in the array, in any order.
// - arr[i] is stronger than arr[j] if: Math.abs(arr[i] - arr[((arr.length - 1) / 2)]) > Math.abs(arr[j] - arr[((n - 1) / 2)])
