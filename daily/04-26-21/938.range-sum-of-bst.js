/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
 *
 * https://leetcode.com/problems/range-sum-of-bst/
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 *
 * time: O(n), n = the total number of nodes in the tree
 * space: O(n)
 */
var rangeSumBST = function(root, low, high) {
  let sum = 0;

  let curr = root;
  const stack = [];

  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    const top = stack.pop();

    if (low <= top.val && top.val <= high) {
      sum += top.val;
    }

    if (top.val > high) break;

    curr = top.right;
  }

  return sum;
};
// @lc code=end

