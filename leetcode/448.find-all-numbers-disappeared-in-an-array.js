// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let pos = 0;

  while (pos < nums.length) {
    let pos2 = nums[pos] - 1;

    if (nums[pos] !== nums[pos2]) {
      [nums[pos], nums[pos2]] = [nums[pos2], nums[pos]];
    } else {
      pos += 1;
    }
  }

  const missing = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      missing.push(i + 1);
    }
  }

  return missing;
};
// @lc code=end

