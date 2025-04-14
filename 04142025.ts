// Maximum score of a good subarray.

function maximumScore(nums: number[], k: number): number {
  if (nums.length === 1) {
    return nums[0];
  }

  let i = k;
  let j = k;
  let maxScore = 0;
  let minElem = nums[k];

  while (i > 0 || j < nums.length - 1) {
    const left = i > 0 ? nums[i - 1] : -1;
    const right = j < nums.length - 1 ? nums[j + 1] : -1;

    if (left > right) {
      i--;
    } else {
      j++;
    }

    minElem = Math.min(minElem, nums[i], nums[j]);
    maxScore = Math.max(maxScore, minElem * (j - i + 1));
  }

  return maxScore;
}

console.log(maximumScore([1, 4, 3, 7, 4, 5], 3), 15);
console.log(maximumScore([5, 5, 4, 5, 4, 1, 1, 1], 0), 20);

// nums: number[]. 1 <= nums.length <= 10^5. 1 <= nums[i] <= 2 * 10^4.
// k: number. 0 <= k < nums.length.
// Return the maximum score of a good subarray.
// - A good subarray is one in which index k is i <= k <= j.
// - A score of a subarray is defined as "Math.min(...subarray) * (j - i + 1)".
// - j and i are the leftmost and rightmost indices respectively.
