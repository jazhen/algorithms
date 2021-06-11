/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 *
 * https://leetcode.com/problems/summary-ranges/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 *
 * time: O(n), n = nums.length
 * space: O(n)
 */
var summaryRanges = function(nums) {
  const ranges = [];
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    if (nums[end + 1] === nums[end] + 1) continue;

    if (start === end) {
      ranges.push(`${nums[start]}`);
    } else {
      ranges.push(`${nums[start]}->${nums[end]}`);
    }

    start = end + 1;
  }

  return ranges;
};
// @lc code=end

