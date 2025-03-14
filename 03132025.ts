// Hamming distance between bits.

function hammingDistance(x: number, y: number): number {
  // Convert parameters to binary
  let xBinary = x.toString(2);
  let yBinary = y.toString(2);

  // Normalize lengths of binary
  const maxLength = Math.max(xBinary.length, yBinary.length);
  xBinary = xBinary.padStart(maxLength, "0");
  yBinary = yBinary.padStart(maxLength, "0");

  let distance = 0;

  for (let i = 0; i < maxLength; i++) {
    const xBit = xBinary[i];
    const yBit = yBinary[i];

    if (xBit !== yBit) {
      distance++;
    }
  }

  return distance;
}

console.log(hammingDistance(1, 4), 2); // [0, 0, 0, 1], [0, 1, 0, 0]
console.log(hammingDistance(3, 1), 1);
console.log(hammingDistance(100, 1), 4);
console.log(hammingDistance(1, 100), 4);
console.log(hammingDistance(9999, 0), 8);
// https://leetcode.com/problems/hamming-distance/

// x: number. 0 <= x <= 2^31 - 1.
// y: number. 0 <= y <= 2^31 - 1.
// Return the hamming distance between x and y.
// Hamming distance is the number of positions in which the bits are different.

// '10011100001111'
