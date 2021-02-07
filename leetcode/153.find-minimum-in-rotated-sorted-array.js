// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] < nums[end]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return nums[start];
};

// time: O(log n)
// space: O(1)
// @lc code=end

