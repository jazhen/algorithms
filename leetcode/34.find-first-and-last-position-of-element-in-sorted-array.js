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
  const ans = [-1, -1];

  ans[0] = binarySearch(nums, target, false);

  if (ans[0] !== -1) {
    ans[1] = binarySearch(nums, target, true);
  }

  return ans;
};

function binarySearch(nums, target, hasTarget) {
  let left = 0;
  let right = nums.length - 1;
  let targetIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      targetIndex = mid;

      if (hasTarget) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return targetIndex;
}
// @lc code=end

