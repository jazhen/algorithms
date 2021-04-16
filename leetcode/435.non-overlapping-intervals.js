/*
 * @lc app=leetcode id=435 lang=javascript
 *
 * [435] Non-overlapping Intervals
 *
 * https://leetcode.com/problems/non-overlapping-intervals/
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 *
 * time: O(n logn), where n = intervals.length
 * space: O(1)
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  let ans = 0;
  let curr = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (isOverlapping(curr, intervals[i])) {
      ans++;
    } else {
      curr = intervals[i];
    }
  }

  return ans;
};

function isOverlapping(a, b) {
  const start = Math.max(a[0], b[0]);
  const end = Math.min(a[1], b[1]);

  return end - start > 0;
}
// @lc code=end

