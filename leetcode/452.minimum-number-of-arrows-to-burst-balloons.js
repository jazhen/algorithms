/*
 * @lc app=leetcode id=452 lang=javascript
 *
 * [452] Minimum Number of Arrows to Burst Balloons
 *
 * https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 *
 * time: O(n log(n)), where n = points.length
 * space: O(1)
 */
 var findMinArrowShots = function(points) {
  if (points.length <= 0) return 0;

  points.sort((a, b) => a[0] - b[0]);

  let arrowsNeeded = 1;
  let curr = points[0];

  for (let i = 1; i < points.length; i++) {
    if (isOverlapping(curr, points[i])) {
      curr = getOverlappingInterval(curr, points[i]);
    } else {
      arrowsNeeded += 1;
      curr = points[i];
    }
  }

  return arrowsNeeded;
};

function isOverlapping(a, b) {
  const start = Math.max(a[0], b[0]);
  const end = Math.min(a[1], b[1]);

  return end - start >= 0;
}

function getOverlappingInterval(a, b) {
  const start = Math.max(a[0], b[0]);
  const end = Math.min(a[1], b[1]);

  return [start, end];
}
// @lc code=end

