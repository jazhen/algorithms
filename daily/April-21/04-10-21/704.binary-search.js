/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 *
 * https://leetcode.com/problems/binary-search/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * time: O(log nums.length)
 * space: O(1)
 */
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return nums[start] === target ? start : -1;
};
// @lc code=end

