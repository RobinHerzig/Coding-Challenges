// Reverse bits.

function reverseBits(num: number): number {
  const bits = num.toString(2);
  const bitsReverse = bits.split("").reverse().join("").padEnd(32, "0");

  return parseInt(bitsReverse, 2);
}

console.log(reverseBits(43261596), 964176192);
console.log(reverseBits(4294967293), 3221225471);

// num: number. A number with a binary length of 32 bits.
// Reverse the bits and return the result as a number.

// https://leetcode.com/problems/reverse-bits/
