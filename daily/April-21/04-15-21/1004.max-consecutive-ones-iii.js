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
  let onesCount = 0;

  for (let start = 0, end = 0; end < nums.length; end++) {
    if (nums[end] === 1) {
      onesCount += 1;
    }

    /** zeroesCount = end - start + 1 - onesCount  */
    if (end - start + 1 - onesCount > k) {
      if (nums[start] === 1) {
        onesCount -= 1;
      }

      start++;
    }

    maxConsectutiveOnes = Math.max(maxConsectutiveOnes, end - start + 1);
  }

  return maxConsectutiveOnes;
};
// @lc code=end

