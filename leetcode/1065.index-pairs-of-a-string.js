/*
 * @lc app=leetcode id=1065 lang=javascript
 *
 * [1065] Index Pairs of a String
 *
 * https://leetcode.com/problems/index-pairs-of-a-string/
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
 var indexPairs = function(text, words) {
  const set = new Set(words);
  let ans = [];

  for (let i = 0; i < text.length; i++) {
    for (let j = i; j < text.length; j++) {
      if (set.has(text.slice(i, j + 1))) {
        ans.push([i, j]);
      }
    }
  }

  return ans;
};
// @lc code=end

