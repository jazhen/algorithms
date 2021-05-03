/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 *
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
 *
 * time: O(# nodes)
 * space: O(# nodes)
 */
var maxDepth = function(root) {
  if (!root) return 0;

  const queue = [root];
  let depth = 0;

  while (queue.length) {
    const rowLength = queue.length;

    for (let i = 0; i < rowLength; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    depth += 1;
  }

  return depth;
};
// @lc code=end

