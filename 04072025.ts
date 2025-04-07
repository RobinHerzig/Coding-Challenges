// Count balanced binary substrings.

function countBinarySubstrings(str: string): number {
  let ones = 0;
  let zeros = 0;
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    const prev = str[i - 1];

    if (curr === "0") {
      zeros = prev === "0" ? zeros + 1 : 1;

      if (ones > 0) {
        result++;
        ones--;
      }
    }

    if (curr === "1") {
      ones = prev === "1" ? ones + 1 : 1;

      if (zeros > 0) {
        result++;
        zeros--;
      }
    }
  }

  return result;
}

console.log(countBinarySubstrings("00110011"), 6); // "0011", "1100", "0011", "01", "10", "01"
console.log(countBinarySubstrings("10101"), 4); // "10", "01", "10", "01"
console.log(countBinarySubstrings("0011111"), 2);
console.log(countBinarySubstrings("0"), 0);
console.log(countBinarySubstrings("000001"), 1);
console.log(countBinarySubstrings("100000"), 1);
console.log(countBinarySubstrings("001000"), 2);
// https://leetcode.com/problems/count-binary-substrings/

// str: string. 1 <= str.length <= 10^5. s[i] is '0' or '1'.
// Return the number non-empty substrings that have an equal number of consecutive 0's and 1's.
