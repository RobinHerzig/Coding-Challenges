// Dutch national flag problem.

function sortColors(nums: number[]): void {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      const curr = nums[j];
      const next = nums[j + 1];

      if (curr > next) {
        [nums[j], nums[j + 1]] = [next, curr];
      }
    }
  }
}

console.log(sortColors([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2]);
console.log(sortColors([2, 0, 1]), [0, 1, 2]);
// https://leetcode.com/problems/sort-colors/

// nums: number[]. 1 <= nums.length <= 300. nums[i] is either 0, 1, or 2.
// Sort nums without using the built in sort() method.
// Solve using bubble sort.
