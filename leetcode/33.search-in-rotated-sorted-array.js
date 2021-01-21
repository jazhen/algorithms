// https://leetcode.com/problems/search-in-rotated-sorted-array/

/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    // left side is sorted
    if (nums[start] <= nums[mid]) {
      // target is within start and mid
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    // right side is sorted
  } else {
      // target is within mid and end
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid;
      } else {
        end = mid - 1;
      }
    }
  }

  return nums[start] === target ? start : -1;
};
// @lc code=end

