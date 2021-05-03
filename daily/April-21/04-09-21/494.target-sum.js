/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 *
 * https://leetcode.com/problems/target-sum/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * time: O(2^nums.length)
 * space: O(nums.length)
 */
var findTargetSumWays = function(nums, target) {
  let ans = 0;

  function dfs(nums, S, sum, i) {
    if (i === nums.length && sum === S) {
      ans++;
    } else if (i < nums.length) {
       const n = nums[i];

      dfs(nums, S, sum + n, i + 1);
      dfs(nums, S, sum - n, i + 1);
    }
  }

  dfs(nums, S, 0, 0);
  return ans;
};
// @lc code=end

