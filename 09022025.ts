// Group anagrams. (Caching)

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>(); // {cache: strs}

  for (const str of strs) {
    // Cache letters in array.
    const arr = new Array(26).fill(0);
    [...str].forEach((char) => arr[char.charCodeAt(0) - 97]++);

    // Convert array to string and add to map.
    const cache = arr.join("-");
    map.set(cache, (map.get(cache) || []).concat(str));
  }

  return [...map.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
console.log(groupAnagrams([]), [[]]);
// https://leetcode.com/problems/group-anagrams/

// strs: string[][]. 1 <= strs.length <= 10^4. 0 <= strs[i].length <= 100. Consists of lowercase English letters.
// Return string[][], grouping words if they are anagrams.
