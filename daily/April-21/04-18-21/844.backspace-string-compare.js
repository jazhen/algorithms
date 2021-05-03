/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 *
 * https://leetcode.com/problems/backspace-string-compare/
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * time: O(s.length + t.length)
 * space: O(s.length + t.length)
 */
 var backspaceCompareStack = function(s, t) {
  const parsedS = parse(s);
  const parsedT = parse(t);

  if (parsedS.length !== parsedT.length) return false;

  for (let i = 0; i < parsedS.length; i++) {
    if (parsedS[i] !== parsedT[i]) return false;
  }

  return true;
};

function parse(str) {
  const stack = [];

  for (const c of str) {
    if (c === '#') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack;
}
// @lc code=end

