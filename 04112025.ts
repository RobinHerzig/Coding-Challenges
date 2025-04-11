// Flip an image (horizontally and invert).

function flipAndInvertImage(image: number[][]): number[][] {
  for (const binary of image) {
    let left = 0;
    let right = binary.length - 1;

    while (left < right) {
      // Flip horizontally
      [binary[left], binary[right]] = [binary[right], binary[left]];

      // Invert bits
      binary[left] = binary[left] === 0 ? 1 : 0;
      binary[right] = binary[right] === 0 ? 1 : 0;

      left++;
      right--;
    }

    // Flip middle bit, for when binary length is odd
    if (left === right) {
      binary[left] = binary[left] === 0 ? 1 : 0;
    }
  }

  return image;
}

// https://leetcode.com/problems/flipping-an-image

// image: number[][]. 1 <= image.length <= 20. 1 <= image[i].length <= 20. image[i][j] === 0 or 1.
// Flip the image horizontally, and then invert each individual bit.
