// https://leetcode.com/problems/next-greater-element-i/

/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const stack = [];
  const map = {};

  // map[x] = y means the next greater number of x is y
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
      map[stack.pop()] = nums2[i];
    }

    stack.push(nums2[i]);
  }

  return nums1.map((num) => {
    if (map[num]) {
      return map[num];
    }

    return -1;
  })
};
// @lc code=end

// time: O(m), where m is nums2.length
// space: O(m)
