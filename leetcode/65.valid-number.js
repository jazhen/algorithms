/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 *
 * https://leetcode.com/problems/valid-number/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 *
 * time: O(n), n = s.length
 * space: O(1)
 */
 var isNumber = function(s) {
  let seenNumber = false;
  let seenDecimal = false;
  let seenE = false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (isDigit(char)) {
      seenNumber = true;
    } else if (char === '.') {
      if (seenE || seenDecimal) return false;

      seenDecimal = true;
    } else if (isE(char)) {
      if (seenE || !seenNumber) return false;

      seenE = true;
      seenNumber = false;
    } else if (isSign(char)) {
      const prevCharIsE = isE(s[i - 1]);

      if (i !== 0 && !prevCharIsE) return false;
    } else {
      return false;
    }
  }

  return seenNumber;
};

function isDigit(char) {
  return /[0-9]/.test(char);
}

function isE(char) {
  return ['e', 'E'].includes(char);
}

function isSign(char) {
  return ['+', '-'].includes(char);
}
// @lc code=end
