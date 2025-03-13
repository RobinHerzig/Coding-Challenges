// Return the single number from an array.

function singleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      return nums[left] ?? nums[right];
    }

    left += 2;
    right += 2;
  }

  return nums.at(-1)!;
}

console.log(singleNumber([2, 2, 1]), 1);
console.log(singleNumber([4, 1, 2, 1, 2]), 4);
console.log(singleNumber([1]), 1);
// https://leetcode.com/problems/single-number/description/

// nums: number[]. 1 <= nums.length <= 3 * 10^4. -3 * 10^4 <= nums[i] <= 3 * 10^4. Each element appears twice except one, which appears once.
// Return the element that only appears once. Use linar runetime and constant space.
