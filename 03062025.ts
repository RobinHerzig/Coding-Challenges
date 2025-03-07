// Return the Hamming weight of a number (count of set bits).

function hammingWeight(num: number): number {
  const binary = num.toString(2);

  let count = 0;

  for (const char of binary) {
    if (char === "1") {
      count++;
    }
  }

  return count;
}

console.log(hammingWeight(11), 3); // 1011
console.log(hammingWeight(128), 1); // 10000000
console.log(hammingWeight(2147483645), 30); // 1111111111111111111111111111101

// num: number. 1 <= n <= 2^31 - 1.
// Return the number of set bits (1) in its binary represention.

// https://leetcode.com/problems/number-of-1-bits/
