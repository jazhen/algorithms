/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 *
 * https://leetcode.com/problems/contains-duplicate/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 *
 * time: O(nums.length)
 * space: O(nums.length)
 */
var containsDuplicate = function(nums) {
  const freq = [];

  for (const n of nums) {
    if (freq[n]) return true;

    freq[n] = 1;
  }

  return false;
};
// @lc code=end

