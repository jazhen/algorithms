// https://leetcode.com/problems/diameter-of-binary-tree/

/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let diameter = 0;

  const getDiameter = function(node) {
    if (!node) return 0;

    // get the diameter of left child
    const left = getDiameter(node.left);

    // get the diameter of right child
    const right = getDiameter(node.right);

    // set the max diameter if it is the current path
    diameter = Math.max(diameter, left + right);

    // diameter is the length of the longest paths of
    // left child + longest path of right child + 1 (for the root)
    return Math.max(left, right) + 1;
  }

  getDiameter(root);
  return diameter;
};
// @lc code=end

