// https://leetcode.com/problems/single-number/

/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let single = nums[0];

  for (let i = 1; i < nums.length; i++) {
    single ^= nums[i];
  }

  return single;
};
// @lc code=end

