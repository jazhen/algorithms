// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, lb = 0, rb = nums.length - 1) {
  if (lb > rb) return null;

  const mid = Math.floor(lb + (rb - lb) / 2);

  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums, lb, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, rb);

  return root;
};
// @lc code=end

