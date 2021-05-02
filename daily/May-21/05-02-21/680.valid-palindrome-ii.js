/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 *
 * https://leetcode.com/problems/valid-palindrome-ii/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 *
 * time: O(n), n = s.length
 * space: O(1)
 */
var validPalindrome = function(s) {
  return isPalindromeWithKDeletions(s, 0, s.length - 1, 1);
};

function isPalindromeWithKDeletions(s, start, end, k) {
  while (start < end) {
    if (s[start] === s[end]) {
      start++;
      end--;
      continue;
    }

    if (k === 0) {
      return false;
    } else {
      return isPalindromeWithKDeletions(s, start + 1, end, k - 1)
              || isPalindromeWithKDeletions(s, start, end - 1, k - 1);
    }
  }

  return true;
}
// @lc code=end

