/*
 * @lc app=leetcode id=1289 lang=javascript
 *
 * [1289] Minimum Falling Path Sum II
 *
 * https://leetcode.com/problems/minimum-falling-path-sum-ii/
 */

// @lc code=start
/**
 * @param {number[][]} arr
 * @return {number}
 *
 * time: O(arr.length ^ 3)
 * space: O(1)
 */
 var minFallingPathSum = function(arr) {
  const R = arr.length;

  for (let r = 1; r < R; r++) {
    for (let c = 0; c < R; c++) {
      const prevRowMinExcludingCurrentColumn = Math.min(...arr[r - 1].slice(0, c).concat(arr[r - 1].slice(c + 1)))

      arr[r][c] += prevRowMinExcludingCurrentColumn;
    }
  }

  return Math.min(...arr[R - 1]);
};
// @lc code=end

