// https://leetcode.com/problems/merge-intervals/

/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // sort the intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];

  // set start and end to the first interval
  let start = intervals[0][0];
  let end = intervals[0][1];

  // then iterating starting from the second interval
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];

    // the interval overlaps when its start is within end
    if (interval[0] <= end) {
      // extend the end to the max of the two
      end = Math.max(end, interval[1]);
    } else {
      // push the interval found, with merges taken into account
      mergedIntervals.push([start, end]);

      // reset start and end to the current interval's start and end
      start = interval[0];
      end = interval[1];
    }
  }

  mergedIntervals.push([start, end]);
  return mergedIntervals;
};
// @lc code=end

// time: O(nlogn)
// space: O(n)
