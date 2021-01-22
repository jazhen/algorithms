// https://leetcode.com/problems/generate-parentheses/

/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];

  function dfs(path, left, right) {
    if (left > right) return;

    if (left === 0 && right === 0) {
      result.push(path);
      return;
    }

    if (left > 0) dfs(path + '(', left - 1, right);
    if (right > 0) dfs(path + ')', left, right - 1);
  }

  dfs('', n, n);
  console.log(result);
  return result;
};
// @lc code=end

// (
// ((
// (((
// ((()
// ((())
// ((()))
// (()
// (()(
// (()()
// (()())
// (())
// (())(
// (())()
// ()
// ()(
// ()((
// ()(()
// ()(())
// ()()
// ()()(
// ()()()

// ["((()))","(()())","(())()","()(())","()()()"]
