/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 *
 * https://leetcode.com/problems/set-mismatch/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * time: O(n), n = nums.length
 * space: O(1)
 */
var findErrorNums = function (nums) {
  const n = nums.length;
  let i = 0;

  while (i < n) {
    let j = nums[i] - 1;

    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i += 1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return [nums[i], i + 1];
    }
  }
};
// @lc code=end
