/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 *
 * https://leetcode.com/problems/maximum-product-subarray/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 *
 * time: O(n), n = nums.length;
 * space: O(1)
 */
 var maxProduct = function(nums) {
  let currMax = nums[0];
  let currMin = nums[0];
  let max = currMax;

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    const newMax = Math.max(num, currMax * num, currMin * num);

    currMin = Math.min(num, currMax * num, currMin * num);
    currMax = newMax;
    max = Math.max(max, currMax);
  }

  return max;
};
// @lc code=end

