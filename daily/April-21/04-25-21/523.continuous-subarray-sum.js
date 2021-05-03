/*
 * @lc app=leetcode id=523 lang=javascript
 *
 * [523] Continuous Subarray Sum
 *
 * https://leetcode.com/problems/continuous-subarray-sum/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 *
 * time: O(n), n = nums.length
 * space: O(1)
 */
var checkSubarraySum = function(nums, k) {
  const prefix = new Map();
  prefix.set(0, -1);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    sum %= k;

    if (prefix.has(sum)) {
      if (i - prefix.get(sum) > 1) return true;
    } else {
      prefix.set(sum, i);
    }
  }

  return false;
};
// @lc code=end

