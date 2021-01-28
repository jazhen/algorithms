// https://leetcode.com/problems/largest-rectangle-in-histogram/

/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  const stack = [];
  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] > heights[i]) {
      const j = stack.pop();
      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
      maxArea = Math.max(maxArea, width * heights[j]);
    }

    stack.push(i);
  }

  return maxArea;
};
// @lc code=end
