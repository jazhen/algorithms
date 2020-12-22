// https://leetcode.com/problems/two-sum/

/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum > target) {
      right -= 1;
    } else if (sum < target) {
      left += 1;
    } else {
      return [left, right];
    }
  }
};
// @lc code=end

// two pointers: start and end index
// return [start, end] if nums[start] + nums[end] === target
// while start !== end
// if sum is > target
//   decrement the end pointer
// if the sum < target
//   increment the start pointer
