/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 *
 * https://leetcode.com/problems/palindromic-substrings/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 *
 * time: O(n^3)
 * space: O(n)
 */
var countSubstrings = function(s) {
  const n = s.length;
  let numPalindromicSubsequences = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const substring = s.slice(i, j + 1);

      if (isPalindrome(substring)) {
        numPalindromicSubsequences += 1;
      }
    }
  }

  return numPalindromicSubsequences;
};

function getAlphabetIndex(char) {
  return char.charCodeAt() - 'a'.charCodeAt();
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
// @lc code=end

