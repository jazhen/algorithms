// https://leetcode.com/problems/invert-binary-tree/

/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
function dfs(root) {
  if (!root.left && !root.right) return;

  [root.left, root.right] = [root.right, root.left];

  invertTree(root.left);
  invertTree(root.right);
}

var invertTree = function(root) {
  if (!root) return root;

  dfs(root);
  return root;
};
// @lc code=end

