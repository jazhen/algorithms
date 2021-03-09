// https://leetcode.com/problems/valid-anagram/

/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const freq = new Map();

  for (const c of s) {
    freq.set(c, freq.get(c) + 1 || 1);
  }

  for (const c of t) {
    // letter in t doesn't exist in s
    if (!freq.get(c)) return false;

    freq.set(c, freq.get(c) - 1);
  }

  for (const [c, f] of freq) {
    // letter freq mismatch between s and t
    if (f !== 0) return false;
  }

  return true;
};
// @lc code=end

