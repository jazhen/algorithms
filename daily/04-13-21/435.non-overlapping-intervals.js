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
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 0;
  let j = 1;
  let ans = 0;

  while (j < intervals.length) {
    if (isOverlapping(intervals[i], intervals[j])) {
      ans++;
    } else {
      i = j;
    }

    j++;
  }

  return ans;
};

function isOverlapping(a, b) {
  let start = Math.max(a[0], b[0]);
  let end = Math.min(a[1], b[1]);

  return end - start > 0;
}
// @lc code=end

