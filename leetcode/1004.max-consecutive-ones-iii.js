/*
 * @lc app=leetcode id=1004 lang=javascript
 *
 * [1004] Max Consecutive Ones III
 *
 * https://leetcode.com/problems/max-consecutive-ones-iii/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * time: O(nums.length)
 * space: O(1)
 */
var longestOnes = function(nums, k) {
  let maxConsectutiveOnes = 0;
  let countOfOnes = 0;

  for (let start = 0, end = 0; end < nums.length; end++) {
    countOfOnes += nums[end];

    if (end - start + 1 - countOfOnes > k) {
      countOfOnes -= nums[start];
      start += 1;
    }

    maxConsectutiveOnes = Math.max(maxConsectutiveOnes, end - start + 1);
  }

  return maxConsectutiveOnes;
};
// @lc code=end

