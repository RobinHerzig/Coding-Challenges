// Group anagrams. (Hashing)

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const word of strs) {
    // Step 1: For each word, use an 26-length array to cache the frequency of each letter.
    const arr = new Array(26).fill(0);

    for (const char of word) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      arr[index]++;
    }

    // Step 2: Use the array, converted into a string, as the key to group anagrams.
    const stringArr = String(arr);
    map.set(stringArr, (map.get(stringArr) || []).concat(word));
  }

  return [...map.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
console.log(groupAnagrams([]), [[]]);
// https://leetcode.com/problems/group-anagrams/

// strs: string[][]. 1 <= strs.length <= 10^4. 0 <= strs[i].length <= 100. Consists of lowercase English letters.
// Return string[][], grouping words if they are anagrams.
