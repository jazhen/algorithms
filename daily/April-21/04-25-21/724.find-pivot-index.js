/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 *
 * https://leetcode.com/problems/find-pivot-index/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 *
 * time: O(n), n = nums.length
 * space: O(1);
 */
var pivotIndex = function(nums) {
  let sum = nums.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - leftSum - nums[i]) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
};
// @lc code=end

