// Write an algorithm that traverses through an array pyramid from top to bottom and returns the largest sum of elements.

function longestSlideDown(pyramid) {
  const pyramidSum = [];
  pyramid.forEach((elem, index) => {
    pyramidSum.push(
      elem.map((elem) => {
        return index === pyramid.length - 1 ? elem : 0;
      })
    );
  });
  for (let i = pyramidSum.length - 2; i >= 0; i--) {
    for (let j = 0; j < pyramidSum[i].length; j++) {
      pyramidSum[i][j] =
        pyramid[i][j] +
        Math.max(pyramidSum[i + 1][j], pyramidSum[i + 1][j + 1]);
    }
  }
  return pyramidSum[0][0];
}

console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]), 23);

console.log(
  longestSlideDown([
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
  ]),
  1074
);

// A pyramid represented by an array of arrays. The length of each array increments by 1 to create a pyramid.
// Return a number indicating the largest sum of elements.
