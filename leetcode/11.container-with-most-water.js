// https://leetcode.com/problems/container-with-most-water/

/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let start = 0;
  let end = height.length - 1;
  let max = 0;

  while (start < end) {
    max = Math.max(max, (end - start) * Math.min(height[start], height[end]));

    if (height[start] < height[end]) {
      start += 1;
    } else {
      end -= 1;
    }
   }

  return max;
};
// @lc code=end

