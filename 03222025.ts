// Is num a power of four?

function isPowerOfFour(num: number): boolean {
  if (num < 1) {
    return false;
  }

  if (num === 1) {
    return true;
  }

  let value = 4;
  let power = 0;

  while (value < num) {
    power++;
    value = 4 ** power;
  }

  return value === num;
}

console.log(isPowerOfFour(16), true);
console.log(isPowerOfFour(5), false);
console.log(isPowerOfFour(1), true);
console.log(isPowerOfFour(-16));
console.log(isPowerOfFour(-1));
// https://leetcode.com/problems/power-of-four/

// num: number. -2^31 <= n <= 2^31 - 1.
// Return whether num is a power of four (e.g. n === 4^x).
