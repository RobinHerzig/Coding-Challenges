// Reorganize a string into a zigzag pattern.

function convert(str: string, numRows: number): string {
  const zigzag: string[][] = [];
  let column: string[] = new Array(numRows).fill("");
  let charHeight = numRows;

  // Populate each columna and push into zigzag.
  for (let i = 0; i < str.length; i++) {
    // Reset charHeight when it reaches 1.
    if (charHeight <= 1) {
      charHeight = numRows;
    }

    if (charHeight === numRows) {
      let height = 0;

      // Fully populate column.
      while (height < numRows && i < str.length) {
        const char = str[i];
        column[height] = char;
        i++;
        height++;
      }

      i--;

      zigzag.push(column);
      column = new Array(numRows).fill("");
    } else {
      // Populate single element.
      const char = str[i];
      const index = charHeight - 1;
      column[index] = char;
      zigzag.push(column);
      column = new Array(numRows).fill("");
    }

    charHeight--;
  }

  // Iterate zigzag and generate the new string.
  const result: string[] = [];
  let depth = 0;

  while (depth <= numRows) {
    for (const arr of zigzag) {
      const char = arr[depth];

      if (char !== undefined) {
        result.push(char);
      }
    }

    depth++;
  }

  return result.join("");
}

console.log(convert("ABCDEFGHIJK", 3) === "AEIBDFHJCGK");
console.log(convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR");
console.log(convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI");
console.log(convert("A", 1) === "A");
console.log(convert("PAYPALISHIRINGPAYPALISHIRING", 1) === "PAYPALISHIRINGPAYPALISHIRING");
console.log(convert("PAYPALISHIRINGPAYPALISHIRING", 10), "PAAPLYYIPASAPHLGIINRSIIHRNIG");

// str: string. 1 <= s.length <= 1000. Uppercase and lowercase English letters, ',', '.'.
// numRows: number. 1 <= numRows <= 1000. Number of rows that create the zigzag pattern.
// Return the result of "zigzagging" the string, and then reading it from left to right, top to bottom.
// The zigzag pattern starts downward, upper-right, downward, upper-right, etc.

// https://leetcode.com/problems/zigzag-conversion/

/*

P   A   H   N
A P L S I I G
Y   I   R



P     I    N
A   L S  I G
Y A   H R
P     I

*/
