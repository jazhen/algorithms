// https://leetcode.com/problems/first-unique-character-in-a-string/

/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const freq = {};

  for (const c of s) {
    freq[c] = freq[c] + 1 || 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }

  return -1;
};
// @lc code=end

