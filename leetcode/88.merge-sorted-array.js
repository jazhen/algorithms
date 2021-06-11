/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * time: O(m + n)
 * space: O(1)
 */
 var merge = function(nums1, m, nums2, n) {
  let nums1Ptr = m - 1;
  let nums2Ptr = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    const num1 = nums1Ptr >= 0 ? nums1[nums1Ptr] : -Infinity;
    const num2 = nums2Ptr >= 0 ? nums2[nums2Ptr] : -Infinity;

    if (num1 > num2) {
      nums1[i] = num1;
      nums1Ptr -= 1;
    } else {
      nums1[i] = num2;
      nums2Ptr -= 1;
    }
  }
};
// @lc code=end

