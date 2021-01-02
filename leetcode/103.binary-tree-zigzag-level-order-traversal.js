// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
var zigzagLevelOrder = function(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const level = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currNode = queue.shift();
      level.push(currNode.val);

      if (currNode.left) {
        queue.push(currNode.left);
      }

      if (currNode.right) {
        queue.push(currNode.right);
      }
    }

    result.push(level);
  }

  for (let i = 0; i < result.length; i++) {
    if (i % 2 !== 0) {
      result[i] = result[i].reverse();
    }
  }

  return result;
};
// @lc code=end

// return [] if root is null
// init result = []
// init queue = [[root]]

// while queue is not empty
//  set level to []
//  set levelSize to queue.length
//  for 0 to levelSize
//    set currNode to queue.shift
//    push currNode.val to level
//    push currNode.left and currNode.right to level (if exist)
//  push level to result

// for 0 to result length
//  reverse the level at i if i is odd

// return result
