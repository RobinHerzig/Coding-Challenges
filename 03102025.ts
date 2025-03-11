// Count bits 0 - num.

function countBits(num: number): number[] {
  const result: number[] = [];

  for (let i = 0; i <= num; i++) {
    const binary: string = i.toString(2);
    const count: number = binary.split("").reduce((a, c) => a + Number(c), 0);
    result.push(count);
  }

  return result;
}

console.log(countBits(2), [0, 1, 1]); // 0, 1, 10
console.log(countBits(5), [0, 1, 1, 2, 1, 2]); // 0, 1, 10, 11, 100, 101
// https://leetcode.com/problems/counting-bits/

// num: number. 0 <= n <= 10^5.
// Return an array (number[]) containing a count of 1s in each number 0 through num.
