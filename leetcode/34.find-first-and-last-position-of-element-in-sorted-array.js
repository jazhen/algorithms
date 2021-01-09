// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const result = [-1, -1];

  // try to find the first index of target
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      // narrow down to the first appearance of target
      result[0] = mid;
      end = mid - 1;
    }
  }

  // if target not found in prev step return [-1, -1]
  if (result[0] === -1) return result;

  // same process for last index of target
  start = 0;
  end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      // narrow down to the second appearance of target
      result[1] = mid;
      start = mid + 1;
    }
  }

  return result;
};
// @lc code=end

