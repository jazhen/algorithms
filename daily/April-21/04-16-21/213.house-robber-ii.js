/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 *
 * https://leetcode.com/problems/house-robber-ii/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 *
 * time: O(nums.length)
 * space: O(nums.length), for the nums.slice
 */
 var rob = function(nums) {
  if (nums.length === 1) return nums[0];

  return Math.max(
    simpleRob(nums.slice(0, nums.length - 1)),
    simpleRob(nums.slice(1))
  )
};

/** exactly the same as https://leetcode.com/problems/house-robber/ */
var simpleRob = function(nums) {
  if (nums.length === 1) return nums[0];

  nums[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 1], nums[i - 2] + nums[i]);
  }

  return nums[nums.length - 1];
};
// @lc code=end

