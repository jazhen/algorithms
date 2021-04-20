/*
 * @lc app=leetcode id=987 lang=javascript
 *
 * [987] Vertical Order Traversal of a Binary Tree
 *
 * https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
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
 * @return {number[][]}
 *
 * time: O(n • log(n)), where n = the number of nodes in the tree
 * space: O(n)
 */
var verticalTraversal = function(root) {
  if (!root) return [];

  const level = {};
  const queue = [[root, 0]];
  let row = 0;
  let minCol = Infinity;
  let maxCol = -Infinity;

  while (queue.length) {
    const rowLength = queue.length;

    for (let i = 0; i < rowLength; i++) {
      const [node, col] = queue.shift();

      if (!level[col]) {
        level[col] = [];
      }

      level[col].push([node.val, row]);

      minCol = Math.min(minCol, col);
      maxCol = Math.max(maxCol, col);

      if (node.left) {
        queue.push([node.left, col - 1]);
      }

      if (node.right) {
        queue.push([node.right, col + 1]);
      }
    }

    row += 1;
  }

  const traversal = [];

  for (let col = minCol; col <= maxCol; col++) {
    level[col].sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    traversal.push(level[col].map((row) => row[0]));
  }

  return traversal;
};
// @lc code=end

