/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 *
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * time: O(nums.length)
 * space: O(1)
 */
var findDuplicates = function(nums) {
  let i = 0;

  while (i < nums.length) {
    let j = nums[i] - 1;

    if (nums[i] === nums[j]) {
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) ans.push(nums[i]);
  }

  return ans;
};
// @lc code=end

