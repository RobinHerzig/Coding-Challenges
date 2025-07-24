// Valid palindrome. (Two-pointers)

function isPalindrome(str: string): boolean {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        const charLeft = str[left++];
        const charRight = str[right--];

        if (charLeft !== charRight) {
            return false;
        }
    }

    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"), true);
console.log(isPalindrome("race a car"), false);
console.log(isPalindrome("  "), true);
// https://leetcode.com/problems/valid-palindrome/

// str: string. 1 <= str.length <= 2*10^5. Consists of printable ASCII characters.
// Return true if the str is a palindrome.
// - Convert to lowercase.
// - Remove all non-alphanumeric characters.