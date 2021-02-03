// https://leetcode.com/problems/validate-binary-search-tree/

/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 */
function dfs(root, min, max) {
  if (!root) return true;

  // root.val should be between the min and max
  if (!(root.val > min) || !(root.val < max)) {
    return false;
  }

  // left: update the max
  // right: update the min
  return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
}

var isValidBST = function(root) {
  if (!root) return true;

  return dfs(root, -Infinity, Infinity);
};
// @lc code=end
