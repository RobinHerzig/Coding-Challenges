// Calculate the maximum product using three numbers from nums.

function maximumProduct(nums: number[]): number {
  if (nums.length === 3) {
      return nums[0] * nums[1] * nums[2];
  }

  nums.sort((a, b) => a - b);
  const val1 = nums.at(-3)! * nums.at(-2)! * nums.at(-1)!; // Product of last three values.
  const val2 = nums.at(0)! * nums.at(1)! * nums.at(-1)!; // Product of first two values and last value.

  return val1 > val2 ? val1 : val2;
}

console.log(maximumProduct([1, 2, 3]), 6);
console.log(maximumProduct([1, 2, 3, 4]), 24);
console.log(maximumProduct([-1, -2, -3]), -6);
console.log(maximumProduct([-1, -2, -3, -4]), -6);
console.log(maximumProduct([-1, -2, -3, -4, 0]), 0);
console.log(maximumProduct([-100, -2, 0, 1, 2]), 400);
console.log(maximumProduct([1, 2, 3, 4, 5, 6, 7]), 210);
// https://leetcode.com/problems/maximum-product-of-three-numbers/

// nums: number[]. 3 <= nums.length <= 10^4. -1000 <= nums[i] <= 1000.
// Return the maximum product of any three numbers from nums.
//  - Numbers may be in any order.
//  - 0 may exist in the array.
//  - Numbers may not be unique.
