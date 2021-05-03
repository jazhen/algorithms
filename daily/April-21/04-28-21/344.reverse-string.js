/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 *
 * https://leetcode.com/problems/reverse-string/
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 *
 * time: O(n), n = s.length
 * space: O(1)
 */
var reverseString = function(s) {
  function swap(i1, i2) {
    [s[i1], s[i2]] = [s[i2], s[i1]];
  }

  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    swap(start++, end--);
  }

  return s;
};
// @lc code=end

