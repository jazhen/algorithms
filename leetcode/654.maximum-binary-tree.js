/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
 *
 * https://leetcode.com/problems/maximum-binary-tree/
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
 *
 * time: O(n^2), where n = nums.length
 * space: O(n)
 */
var constructMaximumBinaryTreeRecursive = function(nums) {
  if (nums.length === 0) return null;

  const maxVal = Math.max(...nums);
  const node = new TreeNode(maxVal);

  const maxValIndex = nums.indexOf(maxVal);
  node.left = constructMaximumBinaryTree(nums.slice(0, maxValIndex));
  node.right = constructMaximumBinaryTree(nums.slice(maxValIndex + 1));

  return node;
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 *
 * time: O(n), where n = nums.length
 * space: O(n)
 */
var constructMaximumBinaryTreeMonotonicStack = function(nums) {
  const stack = [];

  for (const num of nums) {
    const node = new TreeNode(num);

    while (stack.length > 0 && num > stack[stack.length - 1].val) {
      node.left = stack.pop();
    }

    if (stack.length > 0) {
      stack[stack.length - 1].right = node;
    }

    stack.push(node);
  }

  return stack[0];
};
// @lc code=end

