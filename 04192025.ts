// Four sum.

function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  const twoSums = new Map<number, number[][]>();
  const result = new Set<string>();

  // Calculate all twoSum permutations.
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const val1 = nums[i];
      const val2 = nums[j];
      const sum = val1 + val2;

      twoSums.set(sum, (twoSums.get(sum) || []).concat([[i, j]]));
    }
  }

  // Calculate the twoSums that add to target.
  for (const [sum, indexes1] of twoSums) {
    const difference = target - sum;

    if (twoSums.has(difference)) {
      const indexes2 = twoSums.get(difference)!;

      // Visit each index combination in indexes1 and indexes2.
      for (let i = 0; i < indexes1.length; i++) {
        for (let j = 0; j < indexes2.length; j++) {
          const [index1, index2] = indexes1[i];
          const [index3, index4] = indexes2[j];
          const indexSet = new Set([index1, index2, index3, index4]);

          // Check size to ensure all unique indexes.
          if (indexSet.size < 4) {
            continue;
          }

          // Store indexes as sorted strings to avoid duplicate results.
          const fourSum = [nums[index1], nums[index2], nums[index3], nums[index4]].sort((a, b) => a - b).join(",");
          result.add(fourSum);
        }
      }
    }

    // Remove sum to avoid revisiting as "difference".
    twoSums.delete(sum);
  }

  // Convert set into number[][].
  return Array.from(result).map((str) => str.split(",").map(Number));
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0), [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]);
console.log(fourSum([2, 2, 2, 2, 2], 8), [[2, 2, 2, 2]]);
console.log(fourSum([1000000000, 1000000000, 1000000000, 1000000000], -294967296), []);
// https://leetcode.com/problems/4sum/

// nums: number[]. 1 <= nums.length <= 200. -10^9 <= nums[i] <= 10^9.
// target: number. -10^9 <= target <= 10^9.
// Return an array of all the unique quadruplets that add to the target.
