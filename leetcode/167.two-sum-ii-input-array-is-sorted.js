// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum > target) {
      right -= 1;
    } else if (sum < target) {
      left += 1;
    } else {
      return [left + 1, right + 1];
    }
  }
};
// @lc code=end

// two pointers: start and end index
// return [start, end] if numbers[start] + numbers[end] === target
// while start !== end
// if sum is > target
//   decrement the end pointer
// if the sum < target
//   increment the start pointer
