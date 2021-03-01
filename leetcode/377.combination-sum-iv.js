// https://leetcode.com/problems/combination-sum-iv/

/*
 * @lc app=leetcode id=377 lang=javascript
 *
 * [377] Combination Sum IV
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const waysToMake = new Array(target + 1).fill(0);
  waysToMake[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] <= i) {
        waysToMake[i] += waysToMake[i - nums[j]];
      }
    }
  }

  return waysToMake[target];
};
// @lc code=end

