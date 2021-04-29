/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/
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
 * @return {boolean}
 *
 * time: O(n), n = the total number of nodes in the tree
 * space: O(n)
 */
 var isSymmetric = function(root) {
  if (!root) return false;

  return dfs(root.left, root.right);
};

function dfs(leftSubtree, rightSubtree) {
  if (!leftSubtree && !rightSubtree) return true;
  if (!leftSubtree || !rightSubtree) return false;

  if (leftSubtree.val !== rightSubtree.val) return false;

  return dfs(leftSubtree.left, rightSubtree.right) && dfs(leftSubtree.right, rightSubtree.left);
}
// @lc code=end

