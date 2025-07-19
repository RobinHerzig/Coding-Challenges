// Two sum.

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // num, index
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];
    const num2 = target - num1;

    if (map.has(num2)) {
      const j: number = map.get(num2) as number;
      return [i, j];
    }

    map.set(num1, i);
  }

  return result;
}

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);
// https://leetcode.com/problems/two-sum

// nums: number[]. 2 <= nums.length <= 10^4. -10^9 <= nums[i] <= 10^9.
// target: number. -10^9 <= target <= 10^9.
// Return the indicies of the two numbers that add to target.
