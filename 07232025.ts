// Longest consecutive sequence in unsorted array.

function longestConsecutive(nums: number[]): number {
  // Step 1: Store nums in a set.
  const set = new Set(nums);
  let maxLength = 0;

  for (const num of set) {

    // Step 2: If num is first of a sequence, iterate forward and count sequence length.
    if (!set.has(num - 1)) {
      let currLength = 1;

      while (set.has(num + currLength)) {
        currLength++;
      }

      // Step 3: Update maxLength.
      maxLength = Math.max(maxLength, currLength);
    }
  }

  return maxLength;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]), 4); // [1, 2, 3, 4]
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9); // [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]), 4); // [1, 2, 3, 4]
console.log(longestConsecutive([]), 0);
// https://leetcode.com/problems/longest-consecutive-sequence/

// nums: number[]. 0 <= nums.length <= 10^5. -10^9 <= nums[i] <= 10^9. Unsorted.
// Return the length of the longest consecutive sequence. Complexity must be O(n).
