// Longest string chain - longest increasing subsequence.

function longestStrChain(words: string[]): number {
  words.sort((a, b) => a.length - b.length);
  const lengths = new Map<number, string[]>();
  const maxLength = words.at(-1)!.length;
  let result = 1;

  // Map each word by sorted length.
  for (const word of words) {
    const length = word.length;
    lengths.set(length, (lengths.get(length) || []).concat(word));
  }

  // Recursive permutation function to check each chain.
  (function permutations(prevWord: string | null, depth: number, currChain: number): undefined {
    result = Math.max(result, currChain);

    // Base case: Max string length surpassed.
    if (depth > maxLength) {
      return undefined;
    }

    // Recursive case: No words exist at this depth.
    if (!lengths.has(depth)) {
      permutations(null, depth + 1, 1); // Reset currChain and call next depth.
      return undefined;
    }

    // Recursive case: Iterate all words at this depth. Generate char count and call function at next depth.
    const words = lengths.get(depth);

    for (const word of words!) {
      if (!prevWord) {
        permutations(word, depth + 1, 1); // Edge case when no previous depth exists.
        continue;
      }

      // Count the differences between the two words by iterating both and comparing indexes.
      let differenceCount = 0;

      for (let i = 0; i < word.length; i++) {
        const prevWordChar = prevWord[i - differenceCount];
        const wordChar = word[i];

        if (prevWordChar !== wordChar) {
          differenceCount++;
        }

        if (differenceCount > 1) {
          permutations(word, depth + 1, 1); // PrevWord is not a valid predecessor.
          break;
        }
      }

      if (differenceCount === 1) {
        permutations(word, depth + 1, currChain + 1); // PrevWord is a valid predecessor.
      }
    }
  })(null, 1, 0);

  return result;
}

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]), 4);
console.log(longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"]), 5);
console.log(longestStrChain(["abcd", "dbqca"]), 1);
console.log(longestStrChain(["a", "b", "aaaaaaaaaa", "aaaaaaaaaab"]), 2);
console.log(longestStrChain(["a", "ab", "aaaaaaaaaa", "aaaaaaaaabb"]), 2);
console.log(longestStrChain(["a", "aaaaaaaaaa"]), 1);
console.log(longestStrChain(["abc", "cbae", "cabed", "cabuz", "defcab", "defcqlk"]), 1);
console.log(longestStrChain(["bdca", "bda", "ca", "dca", "a"]), 4);
console.log(longestStrChain(["a", "ca", "dca", "bda", "bdca"]), 4);
console.log(longestStrChain(["a", "ca", "bda", "dca", "bdca"]), 4);
console.log(longestStrChain(["byuq", "pasec", "byuqfre", "buq", "ak", "byuqre", "paserlecs", "paserecs", "byuqfkre", "psc", "a", "byuqe", "sc", "s", "ahk", "pasc", "paseec", "ahka", "paseecs", "abhka"]), 9);
console.log(longestStrChain(["pasec","paserlecs","paserecs","psc","sc","s","pasc","paseec","paseecs"]), 9);
console.log(longestStrChain(["x"]), 1);
console.log(longestStrChain(["u","v","u","z","v","v","x","x","x","x"]), 1);
console.log(longestStrChain(["uvvyzyuvuuxxyyz"]), 1);
// console.log(longestStrChain(["a","ac","acy","aucy","abucy","abaucy","abacucy","abacfucy","abacyfucy","abacyfucey","vabacyfucey","vabacyfbucey","vaubacyfbucey","vaubacyfdbucey","dvaubacyfdbucey","dvaubaccyfdbucey","a","ae","aey","ayey","ayeyd","adyeyd","avdyeyd","yavdyeyd","yadvdyeyd","yadvydyeyd","yadxvydyeyd","yadxvydbyeyd","yaydxvydbyeyd","yaydxvydbyceyd","yaydxvvydbyceyd","yaydxfvvydbyceyd","a","va","ava","eava","euava","euxava","euaxava","euavxava","euavvxava","eufavvxava","eufavvxazva","eufavvxcazva","eufavvvxcazva","eufdavvvxcazva","eubfdavvvxcazva","eubfdavvvxxcazva","a","ae","eae","eaze","beaze","ubeaze","ubeavze","ubeauvze","ubeauuvze","xubeauuvze","xubeabuuvze","xubeabuuvzze","xubeabuuvzzze","bxubeabuuvzzze","bxubeabuuvzzzey","bxubeabubuvzzzey","a","ba","cba","cbca","cbcay","cybcay","cybcday","cxybcday","cvxybcday","cvzxybcday","cvzxybecday","cvzxybecdayz","cvzxybecddayz","cvzxybeecddayz","cbvzxybeecddayz","cbvzxyubeecddayz","a","ab","azb","adzb","adzbf","adzbff","adzdbff","dadzdbff","dadfzdbff","dazdfzdbff","dazdfzdzbff","dazdfzdzbffb","dazddfzdzbffb","edazddfzdzbffb","edazddfczdzbffb","edazddfczdzebffb","a","af","ayf","dayf","dayfz","dayfzz","dauyfzz","ddauyfzz","ddauyfzzf","ddauyefzzf","ddauzyefzzf","ddauzyezfzzf","ddauzcyezfzzf","ddaduzcyezfzzf","ddaduzcyezefzzf","ddaduzccyezefzzf","a","ea","eda","eyda","euyda","euydza","eudydza","ueudydza","ueuddydza","ueuddydzaf","ueuyddydzaf","uveuyddydzaf","uveuydbdydzaf","uveuydbdydzabf","uveuydbddydzabf","uveuydbddydzvabf","a","ba","baa","ybaa","ydbaa","ydabaa","ydeabaa","uydeabaa","fuydeabaa","fuydeabaaz","fuydeaabaaz","fuydeaabaeaz","fuydeaabaeayz","fuydeaabaeayaz","fuydeaabaeaayaz","fuydeaabaeafayaz","a","ca","xca","xcxa","xcyxa","xucyxa","xucyxfa","xucyxxfa","xucyxxfaa","xucyxxfaca","xucyxxfuaca","xucyxxfuayca","xucxyxxfuayca","xucxdyxxfuayca","zxucxdyxxfuayca","zxucxdyxxfuaayca","a","au","uau","vuau","yvuau","yvuacu","yvuaucu","yvvuaucu","yvvuauzcu","yvvuazuzcu","yavvuazuzcu","yavvuafzuzcu","yavvuafzuzcuu","yavvuafzfuzcuu","yadvvuafzfuzcuu","yadvvuafzfuxzcuu","a","aa","aaz","eaaz","eaxaz","eaxavz","eadxavz","xeadxavz","xeaduxavz","xdeaduxavz","xdeaduxbavz","xdeaduxbavuz","xdeaduxbavuyz","xdeaduxbcavuyz","xdeaduxbcaxvuyz","xdeaduxbcaaxvuyz","a","ac","ace","avce","avcea","afvcea","afuvcea","afuvcead","afuvceadd","afyuvceadd","afyuvceaedd","afyuvceaexdd","afyuvceaexddx","avfyuvceaexddx","avfyufvceaexddx","avfyufvceaexvddx","a","za","zya","zyau","zyauu","zyauuv","zfyauuv","xzfyauuv","exzfyauuv","exzfyabuuv","eaxzfyabuuv","exaxzfyabuuv","fexaxzfyabuuv","fexaxzfxyabuuv","fexaxzfxyabuuvy","fexaxvzfxyabuuvy","a","ad","aud","aued","auecd","auedcd","ayuedcd","ayuedccd","ayuedccda","ayuedccdae","ayuedccddae","ayuedccddaex","aybuedccddaex","aybuedccfddaex","ayvbuedccfddaex","ayuvbuedccfddaex","a","da","eda","edad","edazd","ebdazd","ebdazfd","evbdazfd","evfbdazfd","evbfbdazfd","evbfbdazfdf","evbfbdazfduf","zevbfbdazfduf","zevbfbdazzfduf","zevxbfbdazzfduf","zevxbfbdazzfdufz","a","aa","aua","auau","auxau","auxauc","auxaubc","auxfaubc","auzxfaubc","azuzxfaubc","azuezxfaubc","yazuezxfaubc","yazueczxfaubc","yaazueczxfaubc","yadazueczxfaubc","yadazueczxfaubbc","a","xa","xax","xdax","xdbax","xdbaux","xdbbaux","xdabbaux","xxdabbaux","xxxdabbaux","xxxdeabbaux","xxxdeabbauxx","xxxdeaxbbauxx","xxxdceaxbbauxx","xaxxdceaxbbauxx","xaxxfdceaxbbauxx","a","ua","uax","uuax","uuavx","uuavxx","uubavxx","uubaxvxx","uubaxdvxx","uubaxdvyxx","uucbaxdvyxx","vuucbaxdvyxx","vuucbuaxdvyxx","vuucabuaxdvyxx","vuucdabuaxdvyxx","vuucdabuaxdvyxxb","a","ab","fab","fabu","fabzu","vfabzu","vfabzau","vfabzaub","vfabvzaub","yvfabvzaub","yvfabvzauyb","yvbfabvzauyb","yvbfabvezauyb","yvbfabveezauyb","yvbfabveezauyyb","yvbfabveezauyyab","a","ae","aee","aeue","aeuce","aeucee","aeudcee","aeudcaee","aeudcaeee","aeudcaeeee","aeudcafeeee","aeudcafeeeec","xaeudcafeeeec","xaeudcafeeeeyc","xaeudcafeeeveyc","xaeudcafeeeaveyc","a","ba","fba","fbda","fbdva","fbedva","fbedbva","fbcedbva","fbcedbvaa","fbcaedbvaa","fbcaedbvaaa","afbcaedbvaaa","zafbcaedbvaaa","zafbcavedbvaaa","zafbacavedbvaaa","zazfbacavedbvaaa","a","va","yva","yvya","yvyda","yvybda","yvybdab","yvybdaby","yvcybdaby","dyvcybdaby","dyvfcybdaby","dyvyfcybdaby","dyvyfacybdaby","adyvyfacybdaby","adfyvyfacybdaby","adfyvyfacybdabfy","a","az","vaz","vfaz","fvfaz","fvfavz","fvfavza","fxvfavza","fxavfavza","fxavvfavza","fxavfvfavza","xfxavfvfavza","xfxcavfvfavza","xfxcavfvfauvza","vxfxcavfvfauvza","vxfxcavfvfxauvza","a","za","zba","zaba","zabda","zaebda","zaebday","zaeabday","zaeabdauy","zaeabdaauy","zaeabdaauyc","zaeabdaauyyc","zaeabdavauyyc","zaezabdavauyyc","zaezabdavauyycy","yzaezabdavauyycy","a","fa","fca","fcav","fcdav","fcdaav","fcdaaxv","fcdaaxyv","ufcdaaxyv","ufcdaaxyvv","ufcdaxaxyvv","ufcdaxaxyvuv","ufcdaxaxdyvuv","ufcdaxaxdyyvuv","ufcdaxaxdyyvduv","ufcvdaxaxdyyvduv","a","ca","caa","caca","fcaca","yfcaca","yfacaca","yfacyaca","ycfacyaca","ycfacyazca","ycbfacyazca","ycbfacyazcca","ycbfacyazecca","ycbfacyazeccav","ycbcfacyazeccav","ycbcfacyauzeccav"]), 16);
// https://leetcode.com/problems/longest-string-chain/

// words: string[]. 1 <= words.length <= 1000. 1 <= words[i].length <= 16. Lowercase English letters.
// Return the longest possible word chain. Minimum value is 1.
// - A chain is a sequence of predecessors.
// - If wordA === wordB + 1 letter, it's a predecessor.
