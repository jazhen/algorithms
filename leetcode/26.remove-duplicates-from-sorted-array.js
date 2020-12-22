// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let lastNonDuplicate = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[lastNonDuplicate - 1]) {
      nums[lastNonDuplicate] = nums[i];
      lastNonDuplicate += 1;
    }
  }

  return lastNonDuplicate;
};
// @lc code=end

// two pointers: iterator and last non duplicate, both set equal to 1
// if nums[iterator] !== nums[LND - 1]
//   nums[LND] = nums[iterator]
//   LND += 1;
// iterator += 1;

// time: O(n)
// space: O(1)
