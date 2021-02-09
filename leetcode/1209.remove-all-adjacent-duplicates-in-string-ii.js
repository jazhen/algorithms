// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

/*
 * @lc app=leetcode id=1209 lang=javascript
 *
 * [1209] Remove All Adjacent Duplicates in String II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  const stack = []; // holds arrays of [val, count]

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && s[i] === stack[stack.length - 1][0]) {
      stack[stack.length - 1][1] += 1;

      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    } else {
      stack.push([s[i], 1]);
    }
  }

  return stack.reduce((acc, curr) => acc + curr[0].repeat(curr[1]), '');
};
// @lc code=end

