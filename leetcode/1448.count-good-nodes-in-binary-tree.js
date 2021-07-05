/*
 * @lc app=leetcode id=1448 lang=javascript
 *
 * [1448] Count Good Nodes in Binary Tree
 *
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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
 * time: O(n), n = the number of nodes in the tree
 * space: O(n)
 */
var goodNodes = function (root) {
  let numGoodNodes = 0;

  function getNumGoodNodes(node, max) {
    if (!node) return;
    if (node.val >= max) numGoodNodes += 1;

    getNumGoodNodes(node.left, Math.max(max, node.val));
    getNumGoodNodes(node.right, Math.max(max, node.val));
  }

  getNumGoodNodes(root, root.val);
  return numGoodNodes;
};
// @lc code=end
