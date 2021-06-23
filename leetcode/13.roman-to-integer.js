/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 *
 * https://leetcode.com/problems/roman-to-integer/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1,
  }

  let total = map[s[s.length - 1]];

  for (let i = s.length - 2; i >= 0; i--) {
    if (map[s[i]] < map[s[i + 1]]) {
      total -= map[s[i]];
    } else {
      total += map[s[i]];
    }
  }

  return total;
};
// @lc code=end

