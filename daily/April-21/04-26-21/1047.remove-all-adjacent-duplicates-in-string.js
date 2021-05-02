/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 *
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 *
 * time: O(n), n = S.length
 * space: O(n)
 */
var removeDuplicates = function(S) {
  const stack = [];

  for (const c of S) {
    if (stack[stack.length - 1] === c) {
      stack.pop();
      continue;
    }

    stack.push(c);
  }

  return stack.join('');
};
// @lc code=end

