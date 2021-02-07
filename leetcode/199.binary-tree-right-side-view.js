// https://leetcode.com/problems/binary-tree-right-side-view/

/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 */
var rightSideView = function(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length) {
    const qLen = queue.length;

    for (let i = 0; i < qLen; i++) {
      const node = queue.shift();

      // the last node of a level is part of the answer
      if (i === qLen - 1) result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
};

// time: O(n)
// space: O(n)
// @lc code=end

