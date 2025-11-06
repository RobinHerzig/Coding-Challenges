// Group anagrams. (Caching)

function groupAnagrams(strs: string[]): string[][] {
  const cache = new Map<string, string[]>();

  // Step 1: Generate character string for word.
  for (const str of strs) {
    const arr = Array(26).fill(0); // [1,0,0,0,1,0,0.....]
    [...str].forEach((char) => arr[char.charCodeAt(0) - 97]++); //

    // Step 2: Cache each character string.
    const key = arr.join(",");
    cache.set(key, (cache.get(key) || []).concat(str));
  }

  // Step 3: Compile cache values into array and return.
  return [...cache.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
console.log(groupAnagrams([]), [[]]);
// https://leetcode.com/problems/group-anagrams/

// strs: string[][]. 1 <= strs.length <= 10^4. 0 <= strs[i].length <= 100. Consists of lowercase English letters.
// Return string[][], grouping words if they are anagrams.
