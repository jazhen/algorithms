// https://leetcode.com/problems/valid-parentheses/

/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  for (const c of s) {
    if (c === '(') {
      stack.push(')');
    } else if (c === '{') {
      stack.push('}');
    } else if (c === '[') {
      stack.push(']');
    } else {
      if (stack.pop() !== c) return false;
    }
  }

  return stack.length === 0;
};
// @lc code=end

