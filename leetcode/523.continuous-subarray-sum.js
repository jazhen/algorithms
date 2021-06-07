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
  const seen = {};
  let sum = 0;

  for (const [i, n] of nums.entries()) {
    sum += n;
    sum %= k;

    if (sum === 0 && i >= 1) return true;

    if (sum in seen) {
      if (i - seen[sum] >= 2) return true;
    } else {
      seen[sum] = i;
    }
  }

  return false;
};
// @lc code=end

