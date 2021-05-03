/*
 * @lc app=leetcode id=1636 lang=javascript
 *
 * [1636] Sort Array by Increasing Frequency
 *
 * https://leetcode.com/problems/sort-array-by-increasing-frequency/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * time: O(n • log(n)), n = nums.length
 * space: O(n)
 */
var frequencySort = function(nums) {
  const freq = {};

  for (const n of nums) {
    freq[n] = freq[n] + 1 || 1;
  }

  return nums.sort((a, b) => freq[a] === freq[b] ? b - a : freq[a] - freq[b]);
};
// @lc code=end

