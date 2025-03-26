// Find a rectangle that fulfills the requirements.

function constructRectangle(area: number): number[] {
  const divisors: number[] = [];

  for (let i = 1; i <= area; i++) {
    if (area % i === 0) {
      divisors.push(i);
    }
  }

  if (divisors.length % 2 === 1) {
    const square: number = divisors.at(Math.floor(divisors.length / 2))!;
    return [square, square];
  }

  const l: number = divisors.at(Math.floor(divisors.length / 2))!;
  const w: number = divisors.at(Math.floor(divisors.length / 2) - 1)!;

  return [l, w];
}

console.log(constructRectangle(4), [2, 2]);
console.log(constructRectangle(37), [37, 1]);
console.log(constructRectangle(122122), [427, 286]);
// https://leetcode.com/problems/construct-the-rectangle/

// area: number. 1 <= area <= 10^7.
// Create a rectangle [L, W] that satisfies the criteria:
// - It must match the area given.
// - L >= W.
// - The difference between L and W should be as small as possible.
