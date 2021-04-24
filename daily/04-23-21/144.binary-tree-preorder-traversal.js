/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
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
 * @return {number[]}
 *
 * time: O(n), n = the total number of nodes in the tree
 * space: O(n)
 */
var preorderTraversal = function(root) {
  const traversal = [];
  const stack = [];
  let curr = root;

  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr);
      traversal.push(curr.val);
      curr = curr.left;
    } else {
      const top = stack.pop();
      curr = top.right;
    }
  }

  return traversal;
};
// @lc code=end

