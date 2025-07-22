// Product of array except self.

function productExceptSelf(nums: number[]): number[] {
  const result = new Array(nums.length).fill(0);
  const hasMultipleZeros = nums.indexOf(0) === nums.lastIndexOf(0) ? false : true; // If nums has multiple zeros, the result must be an array of zeros.

  if (hasMultipleZeros) {
    return result;
  }

  // Populate result array with one or fewer zeros.
  const total = nums.reduce((a, c) => a * (c || 1), 1); // Do not include zero in total product calculation.
  const hasZero = nums.indexOf(0) === -1 ? false : true; // However, track whether nums contains zero here.

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (hasZero) {
      result[i] = num !== 0 ? 0 : total;
    } else {
      const val = total / num;
      result[i] = val;
    }
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]); // Total product = 24.
console.log(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
console.log(productExceptSelf([-1, 1, 0, -3, 3, 0]), [0, 0, 9, 0, 0, 0]);
// https://leetcode.com/problems/product-of-array-except-self/

// nums: number[]. 2 <= nums.length <= 10^5. -30 <= nums[i] <= 30.
// Return number[] containing the product of all elements except the current index.
