/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * time: O(n), n = nums.length
 * space: O(1)
 */
var moveZeroes = function(nums) {
  let nextNonZeroIndex = 0;

  for (let curr = 0; curr < nums.length; curr++) {
    if (nums[curr] === 0) continue;

    nums[nextNonZeroIndex++] = nums[curr];
  }

  while (nextNonZeroIndex < nums.length) {
    nums[nextNonZeroIndex++] = 0;
  }
};
// @lc code=end

