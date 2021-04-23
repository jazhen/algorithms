/*
 * @lc app=leetcode id=554 lang=javascript
 *
 * [554] Brick Wall
 *
 * https://leetcode.com/problems/brick-wall/
 */

// @lc code=start
/**
 * @param {number[][]} wall
 * @return {number}
 *
 * time: O(n), n = the total number of bricks
 * space: O(m), m = the width of the wall
 */
var leastBricks = function(wall) {
  const freq = {};
  let maxFreq = 0;

  for (const row of wall) {
    let width = 0;

    for (let brick = 0; brick < row.length - 1; brick++) {
      width += row[brick];
      freq[width] = freq[width] + 1 || 1;
      maxFreq = Math.max(maxFreq, freq[width]);
    }
  }

  return wall.length - maxFreq;
};
// @lc code=end

