/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    /** way to ignore duplicates, similar to 3sum  */

    // while (start < end && nums[start] === nums[start + 1]) {
    //   start += 1;
    // }

    while (start < end && nums[end] === nums[end - 1]) {
      end -=  1;
    }

    /** same as https://leetcode.com/problems/search-in-rotated-sorted-array/ */
    const mid = Math.floor(start + (end - start) / 2);

    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid;
      } else {
        end = mid - 1;
      }
    }
  }

  return nums[start] === target;
};
// @lc code=end

