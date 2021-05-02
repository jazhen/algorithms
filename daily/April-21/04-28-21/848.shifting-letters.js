/*
 * @lc app=leetcode id=848 lang=javascript
 *
 * [848] Shifting Letters
 *
 * https://leetcode.com/problems/shifting-letters/
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 *
 * time: O(n), n = S.length
 * space: O(n)
 */
var shiftingLetters = function(S, shifts) {
  for (let i = shifts.length - 2; i >= 0; i--) {
    shifts[i] += shifts[i + 1];
  }

  let ans = '';

  for (let i = 0; i < S.length; i++) {
    let charCode = S.charCodeAt(i) - 97;
    let newCharCode = (charCode + shifts[i]) % 26;
    ans += String.fromCharCode(newCharCode + 97);
  }

  return ans;
};
// @lc code=end

