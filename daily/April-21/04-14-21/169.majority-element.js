/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 *
 * time: O(n)
 * space: O(1)
 */
var majorityElement = function(nums) {
  /** Boyer-Moore Voting Algorithm */

  let candidate = null;
  let count = 0;

  for (const n of nums) {
    if (count === 0) {
      candidate = n;
    }

    if (n === candidate) {
      count += 1;
    } else {
      count -= 1;
    }
  }

  return candidate;
};

/**
 * @param {number[]} nums
 * @return {number}
 *
 * time: O(n)
 * space: O(n)
 */
 var majorityElementHashMap = function(nums) {
  const freq = {};

  for (const n of nums) {
    freq[n] = freq[n] + 1 || 1;

    if (freq[n] > nums.length / 2) {
      return n;
    }
  }
};
// @lc code=end

