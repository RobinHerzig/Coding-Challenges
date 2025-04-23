// Sort array by sign.

function rearrangeArray(nums: number[]): number[] {
  const result: number[] = [];
  let pos = 0;
  let neg = 0;

  while (result.length < nums.length) {
    while (nums[pos] < 0) {
      pos++;
    }

    while (nums[neg] > 0) {
      neg++;
    }

    result.push(nums[pos], nums[neg]);
    pos++;
    neg++;
  }

  return result;
}

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]), [3, -2, 1, -5, 2, -4]);
console.log(rearrangeArray([-1, 1]), [1, -1]);
// https://leetcode.com/problems/rearrange-array-elements-by-sign

// nums: number[]. 2 <= nums.length <= 2*10^5. Length is even. 1 <= |nums[i]| <= 10^5. Contains equal count of positive and negative integers.
// Return the array after sorting it:
// - Consecutive pairs should have opposite signs.
// - Integers with the same sign should preserve their order.
// - The sorted array begins with a positive integer.
