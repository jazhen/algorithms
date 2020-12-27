// https://leetcode.com/problems/find-the-difference/

/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let xor1 = 0;

  for (const char of s) {
    xor1 ^= char.charCodeAt();
  }

  let xor2 = 0;

  for (const char of t) {
    xor2 ^= char.charCodeAt();
  }

  return String.fromCharCode(xor1 ^ xor2);
};
// @lc code=end

