// Find indexes with index and value difference I.

function findIndices(nums: number[], indexDifference: number, valueDifference: number): number[] {
  if (indexDifference > nums.length) {
    return [-1, -1];
  }

  for (let i = 0; i < nums.length - indexDifference; i++) {
    for (let j = i + indexDifference; j < nums.length; j++) {
      const left = nums[i];
      const right = nums[j];

      if (Math.abs(left - right) >= valueDifference) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

console.log(findIndices([5, 1, 4, 1], 2, 4), [0, 3]);
console.log(findIndices([2, 1], 0, 0), [0, 0]);
console.log(findIndices([1, 2, 3], 2, 4), [-1, -1]);

// nums: number[]. 1 <= nums.length <= 100. 0 <= nums[i] <= 50.
// indexDifference: number. 0 <= indexDifference <= 100.
// valueDifference: number. 0 <= valueDifference <= 50
// Return any index pair, or [-1, -1] if no answer exists, where:
// - Math.abs(i - j) >= indexDifference.
// - Math.abs(nums[i] - nums[j]) >= valueDifference.
