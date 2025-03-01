// Reverse a 32-bit integer.

function reverse(num: number): number {
  const reverse = String(Math.abs(num)).split("").reverse().join("");
  const int32Bit = "2147483647";

  // Verify that the string can be converted into a 32-bit number.
  if (reverse.length === int32Bit.length) {
    for (let i = 0; i < reverse.length; i++) {
      const reverseDigit = reverse[i];
      const int32BitDigit = int32Bit[i];

      if (reverseDigit < int32BitDigit) {
        break; // Reverse is less than 32-bits.
      } else if (reverseDigit > int32BitDigit) {
        return 0; // Reverse is greater than 32-bits.
      }
    }
  }

  return Number(reverse) * Math.sign(num);
}
console.log(reverse(123), 321);
console.log(reverse(-123), -321);
console.log(reverse(120), 21);

// num: number. -2^31 <= x <= 2^31 - 1. 32-bit integer.
// Reverse the number. If the result is outside the bounds of a 32-bit integer, return 0. Keep the sign and drop leading 0s.

// https://leetcode.com/problems/reverse-integer/
