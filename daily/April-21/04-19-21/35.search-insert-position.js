/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * time: O(log(n)), n = nums.length
 * space: O(1)
 */
var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
};
// @lc code=end

