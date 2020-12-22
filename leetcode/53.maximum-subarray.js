// https://leetcode.com/problems/maximum-subarray/

/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentWindowSum = nums[0];
  let maxWindowSum = nums[0];

  for (let windowEnd = 1; windowEnd < nums.length; windowEnd++) {
    currentWindowSum = Math.max(currentWindowSum + nums[windowEnd], nums[windowEnd]);
    maxWindowSum = Math.max(maxWindowSum, currentWindowSum);
  }

  return maxWindowSum;
};
// @lc code=end

// start the window at index = 0, call this windowStart
// iterate through the nums array starting at 1, call the iterator windowEnd
// at each loop, calc the new window sum
// if the num at the index is greater than the current sum
// then change the window to be windowEnd
// then check if the current window sum is >= the current max sum
// return the max sum at the end
