// Perfect number.

function checkPerfectNumber(num: number): boolean {
  let divisorSum: number = 0;

  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) {
      divisorSum += i;
    }
  }

  const isPerfectNumber = divisorSum === num;
  return isPerfectNumber;
}

console.log(checkPerfectNumber(28), true); // 1 + 2 + 4 + 7 + 14 = 24
console.log(checkPerfectNumber(7), false);
// https://leetcode.com/problems/perfect-number/

// num: number. 1 <= num <= 10^8.
// Return whether num is a perfect number (a positive integer that is equal to the sum of its positive divisors, excluding the number itself).
