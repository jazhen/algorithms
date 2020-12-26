// https://leetcode.com/problems/missing-number/

/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let pos = 0;

  while (pos < nums.length) {
    let pos2 = nums[pos];

    if (nums[pos] < nums.length && nums[pos] !== pos) {
      [nums[pos], nums[pos2]] = [nums[pos2], nums[pos]];
    } else {
      pos += 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return nums.length;
};
// @lc code=end

// init an iter, pos, to 0
// while pos is less than nums length
//   set pos2 to the element at nums[pos]
//   if nums[pos] is not equal to pos
//     swap nums[pos] and nums[pos2]
//   else
//     increment pos

// loop through the nums again
//  return i if i !== nums[i]
