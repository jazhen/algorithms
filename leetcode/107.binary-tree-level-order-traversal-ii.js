// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 */
var levelOrderBottom = function(root) {
  if (!root) return [];

  let traversal = [];
  let queue = [root];

  while (queue.length) {
    let levelSize = queue.length;
    let level = [];

    while (levelSize) {
      const currentNode = queue.shift();
      levelSize -= 1;

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      level.push(currentNode.val);
    }

    traversal.push(level);
  }

  return traversal.reverse();
};
// @lc code=end
