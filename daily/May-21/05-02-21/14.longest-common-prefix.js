/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 *
 * time: O(n), n = the total amount of characters in strs
 * space: O(1)
 */
var longestCommonPrefix = function(strs) {
  const firstWord = strs[0];

  for (let i = 0; i < firstWord.length; i++) {
    for (const str of strs) {
      if (str[i] !== firstWord[i]) return firstWord.slice(0, i);
    }
  }

  // no shorter common prefix found, return the first word
  return strs[0];
};
// @lc code=end

