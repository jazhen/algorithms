/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 *
 * time: O(n), n = s.length
 * space: O(1)
 */
 var isPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
      continue;
    }

    if (!isAlphaNumeric(s[right])) {
      right--;
      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

function isAlphaNumeric(c) {
  return /^[a-zA-Z0-9]/.test(c);
}
// @lc code=end

