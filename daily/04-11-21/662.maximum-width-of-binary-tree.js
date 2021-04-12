/*
 * @lc app=leetcode id=662 lang=javascript
 *
 * [662] Maximum Width of Binary Tree
 *
 * https://leetcode.com/problems/maximum-width-of-binary-tree/
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
 var widthOfBinaryTree = function(root) {
  if (!root) return 0;

  const queue = [[root, 0]];
  let maxWidth = 0;

  while (queue.length) {
    let rowLength = queue.length;
    let minCol = queue[0][1];
    let maxCol = queue[0][1];

    for (let i = 0; i < rowLength; i++) {
      const [node, col] = queue.shift();

      maxCol = Math.max(maxCol, col);

      const normalizedCol = col - minCol;

      if (node.left) {
        queue.push([node.left, 2 * normalizedCol]);
      }

      if (node.right) {
        queue.push([node.right, 2 * normalizedCol + 1]);
      }
    }

    const levelWidth = maxCol - minCol + 1;
    maxWidth = Math.max(maxWidth, levelWidth);
  }

  return maxWidth;
};
// @lc code=end

