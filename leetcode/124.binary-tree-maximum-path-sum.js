// https://leetcode.com/problems/binary-tree-maximum-path-sum/

/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
var maxPathSum = function(root) {
  let max = -Infinity;

  function dfs(root, sum) {
    if (!root) return 0;

    const left = Math.max(dfs(root.left), 0);
    const right = Math.max(dfs(root.right), 0);

    max = Math.max(max, left + right + root.val);

    return Math.max(left, right) + root.val;

    // alternatively:

    // max = Math.max(max, root.val, left + root.val, right + root.val, left + right + root.val);

    // return Math.max(root.val, left + root.val, right + root.val);
  }

  dfs(root);
  return max;
};

// time: O(n)
// space: O(n)
// @lc code=end

