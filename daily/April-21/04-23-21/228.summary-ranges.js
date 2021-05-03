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
  if (nums.length === 0) return [];

  let start = nums[0];
  let end = nums[0];
  const ans = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      end = nums[i];
    } else {
      if (start === end) {
        ans.push(`${start}`);
      } else {
        ans.push(`${start}->${end}`);
      }
      start = nums[i];
      end = nums[i];
    }
  }

  if (start === end) {
    ans.push(`${start}`);
  } else {
    ans.push(`${start}->${end}`);
  }

  return ans;
};
// @lc code=end

