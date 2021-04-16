/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 *
 * https://leetcode.com/problems/house-robber/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 *
 * time: O(nums.length)
 * space: O(1)
 */
var rob = function(nums) {
  if (nums.length === 1) return nums[0];

  nums[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 1], nums[i - 2] + nums[i]);
  }

  return nums[nums.length - 1];
};
// @lc code=end

