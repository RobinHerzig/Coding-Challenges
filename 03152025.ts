// Third maximum number.

function thirdMax(nums: number[]): number {
  const set = new Set(nums.sort((a, b) => b - a)); // Convert to set to remove duplicates
  let index = set.size >= 3 ? 2 : 0;

  for (const elem of set) {
      if (index === 0) {
          return elem;
      }

      index--;
  }

  return -1;
};

console.log(thirdMax([3, 2, 1]), 1);
console.log(thirdMax([1, 2]), 2);
console.log(thirdMax([2, 2, 3, 1]), 1);
console.log(thirdMax([-2147483648, 1, 2]), -2147483648);
console.log(thirdMax([1, 2147483647, -2147483648]), -2147483648);
// https://leetcode.com/problems/third-maximum-number/

// nums: number[]. 1 <= nums.length <= 10^4. -2^31 <= nums[i] <= 2^31 - 1.
// Return the 3rd distinct largest number from nums. If no third number exists, return the 1st largest number.