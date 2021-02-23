// https://leetcode.com/problems/decode-string/

/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s, start = 0) {
  let num = 0;
  let substring = '';

  for (let i = start; i < s.length; i++) {
    const c = s[i];

    if (/^[0-9]/.test(c)) {
      num = (num * 10) + parseInt(c);
    } else if (/^[a-z]/.test(c)) {
      substring += c;
    } else if (c === '[') {
      const subAns = decodeString(s, i + 1);
      substring += subAns.repeat(num);
      num = 0;
      i = getMatchingEndBracket(s, i);
    } else {
      return substring;
    }
  }

  return substring;
};

function getMatchingEndBracket(s, j) {
  let nLeft = 1;
  let nRight = 0;

  while (nLeft !== nRight) {
    j += 1;
    const c = s[j];

    if (c === '[') {
      nLeft += 1;
    } else if (c === ']') {
      nRight += 1;
    }
  }

  return j;
}
// @lc code=end
