// DI string match.

function diStringMatch(str: string): number[] {
  const result: number[] = [];
  let index = 0;
  let i = 0;
  let d = str.match(/\D/g)?.length || 0;

  while (result.length < str.length + 1) {
    const curr = str[index];

    if (curr === "I") {
      result.push(i);
      i++;
    } else {
      result.push(d);
      d--;
    }

    index++;
  }

  return result;
}

console.log(diStringMatch("IDID"), [0, 4, 1, 3, 2]);
console.log(diStringMatch("III"), [0, 1, 2, 3]);
console.log(diStringMatch("DDI"), [3, 2, 0, 1]);
// https://leetcode.com/problems/di-string-match

// str: string. 1 <= str.length <= 10^5. s[i] is 'I' or 'D'.
// Return an array (number[]) where each element is a count of the respective character.
// - If str[i] === 'I', then result[i] must be less than result[i + 1].
// - If str[i] === 'D', then result[i] must be greater than result[i + 1].
