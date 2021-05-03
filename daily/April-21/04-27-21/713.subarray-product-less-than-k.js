/*
 * @lc app=leetcode id=713 lang=javascript
 *
 * [713] Subarray Product Less Than K
 *
 * https://leetcode.com/problems/subarray-product-less-than-k/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * time: O(n), n = nums.length
 * space: O(1)
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let ans = 0;
  let subArrayProduct = 1;

  for (let start = 0, end = 0; end < nums.length; end++) {
    subArrayProduct *= nums[end];

    while (subArrayProduct >= k) {
      subArrayProduct /= nums[start++];
    }

    ans += end - start + 1;
  }

  return ans < 0 ? 0 : ans;
};
// @lc code=end

