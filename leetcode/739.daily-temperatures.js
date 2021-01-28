// https://leetcode.com/problems/daily-temperatures/

/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const stack = [];
  const result = new Array(T.length).fill(0);

  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      const top = stack.pop()
      result[top] = i - top;
    }

    stack.push(i);
  }

  return result;
};
// @lc code=end

