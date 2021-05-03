/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 *
 * https://leetcode.com/problems/triangle/
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 *
 * time: O(n^2), n = triangle.length
 * space: O(1)
 */
var minimumTotal = function(triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i - 1][j - 1] ?? Infinity,
                                 triangle[i - 1][j] ?? Infinity);
    }
  }

  return Math.min(...triangle[triangle.length - 1]);
};
// @lc code=end

