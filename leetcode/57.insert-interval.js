// https://leetcode.com/problems/insert-interval/

/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  // init a result array to store the new intervals to []
  const result = [];

  // init index iterator i to 0
  let i = 0;

  // while i is less than intervals length and intervals[i]'s end < newInterval's start
    // push intervals[i] to result
    // increment i
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i += 1;
  }

  // while i is less than intervals length and intervals[i]'s start <= newInterval's end
    // set newInterval's start to the min of newInterval and intervals[i]'s start
    // set newInterval's end to the min of newInterval and intervals[i]'s end
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i += 1
  }

  // push newInterval to result
  result.push(newInterval);

  // push the remaining intervals to result
  // while i is less than intervals length
    // push intervals[i] to result
    // increment i
  while (i < intervals.length) {
    result.push(intervals[i]);
    i += 1;
  }

  // return result
  return result;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = insert;
// @after-stub-for-debug-end
