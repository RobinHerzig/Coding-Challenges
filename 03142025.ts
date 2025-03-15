// Reverse a numbers bits and return the outcome.

function findComplement(num: number): number {
  const binary = num.toString(2);
  const reverse: string[] = [];

  for (const bit of binary) {
    reverse.push(bit === "1" ? "0" : "1");
  }

  return parseInt(reverse.join(""), 2);
}

console.log(findComplement(5), 2);
console.log(findComplement(1), 0);
// https://leetcode.com/problems/number-complement/

// num: number. 1 <= 2^31.
// Return the number after flipping its bits.
