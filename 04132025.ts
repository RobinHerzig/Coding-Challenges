// Shortest distance to a character.

function shortestToChar(str: string, char: string): number[] {
  let zeros: number[] = new Array(str.length).fill(-1);

  // Array of -1s and 0s. 0 indicates positions of char.
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      zeros[i] = 0;
    }
  }

  // Count distance from 0 forward and backward.
  let result = countDistanceToZero(zeros);
  result = countDistanceToZero(result.reverse()).reverse();
  return result;
}

function countDistanceToZero(nums: number[]): number[] {
  let distance = -1;

  for (let i = 0; i < nums.length; i++) {
    // When an element is 0, reset the distance and begin counting.
    if (nums[i] === 0) {
      distance = 1;
      continue;
    }

    // Once counting begins, replace -1 with current distance.
    if (distance !== -1) {
      nums[i] = nums[i] === -1 ? distance : Math.min(nums[i], distance); // Math.min to preserve min distance during 2nd function call (reversed).
      distance++;
    }
  }

  return nums;
}

console.log(shortestToChar("loveleetcode", "e"), [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]);
console.log(shortestToChar("aaab", "b"), [3, 2, 1, 0]);
// https://leetcode.com/problems/shortest-distance-to-a-character

// str: string. 1 <= str.length <= 10^4. Lowercase English letters.
// char: string. Length === 1. Lowercase English letters. Occurs at least once in str.
// Return an array of numbers that indicates the distance of the closest occurance of char at each index.
