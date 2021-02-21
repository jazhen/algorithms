// https://leetcode.com/problems/subarray-sum-equals-k/

/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0;

  const prefixCount = {};
  let prefixSum = 0;

  for (const n of nums) {
    prefixSum += n;

    // the current num itself is equal to k
    if (prefixSum === k) count++;

    // a continguous sum from some other point to the current index sums to k
    count += prefixCount[prefixSum - k] || 0;

    prefixCount[prefixSum] = prefixCount[prefixSum] + 1 || 1;
  }

  return count;
};
// @lc code=end

