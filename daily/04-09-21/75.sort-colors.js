/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 *
 * https://leetcode.com/problems/sort-colors/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * time: O(nums.length)
 * space: O(1)
 */
var sortColorsOnePass = function(nums) {
  let [left, mid, right] = [0, 0, nums.length - 1];

  while (mid <= right) {
    if (nums[mid] === 0) {
      swap(nums, left, mid);
      left++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      swap(nums, mid, right);
      right--;
    }

  }
};

function swap(nums, a, b) {
  [nums[a], nums[b]] = [nums[b], nums[a]];
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColorsTwoPass = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === 0) {
      left++;
      continue;
    }

    if (nums[right] === 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      continue;
    }

    right--;
  }

  right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === 1) {
      left++;
      continue;
    }

    if (nums[right] === 1) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      continue;
    }

    right--;
  }
};
// @lc code=end

