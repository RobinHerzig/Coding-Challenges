// Happy number.

function isHappy(num: number): boolean {
  const prev = new Set<number>([num]);
  let curr = reduceHappy(num);

  while (curr > 1) {
    if (prev.has(curr)) {
      return false;
    }

    prev.add(curr);
    curr = reduceHappy(curr);
  }

  return true;
}

function reduceHappy(num: number): number {
  const arr = Array.from(String(num)).map(Number);
  return arr.reduce((a, c) => a + c ** 2, 0);
}

console.log(isHappy(19), true);
console.log(isHappy(2), false);
console.log(isHappy(1), true);
console.log(isHappy(7), true);
// https://leetcode.com/problems/happy-number/

// num: number. 1 <= num <= 2^31 - 1.
// Determine whether num is a happy number.
