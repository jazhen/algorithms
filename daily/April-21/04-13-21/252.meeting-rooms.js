/*
 * @lc app=leetcode id=252 lang=javascript
 *
 * [252] Meeting Rooms
 *
 * https://leetcode.com/problems/meeting-rooms/
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {boolean}
 *
 * time: O(n logn), where n = intervals.length
 * space: O(1)
 */
 var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    if (isOverlapping(intervals[i], intervals[i + 1])) {
      return false;
    }
  }

  return true;
};

function isOverlapping(a, b) {
  const start = Math.max(a[0], b[0]);
  const end = Math.min(a[1], b[1]);

  return end - start > 0;
}
// @lc code=end

