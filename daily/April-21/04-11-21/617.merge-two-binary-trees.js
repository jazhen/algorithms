/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
 *
 * https://leetcode.com/problems/merge-two-binary-trees/
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  if (!root1 && !root2) return null;

  let root1Val = root1 ? root1.val : 0;
  let root2Val = root2 ? root2.val : 0;

  const newNode = new TreeNode(root1Val + root2Val);

  const root1Left = root1 ? root1.left : null;
  const root1Right = root1 ? root1.right : null;

  const root2Left = root2 ? root2.left : null;
  const root2Right = root2 ? root2.right : null;

  newNode.left = mergeTrees(root1Left, root2Left);
  newNode.right = mergeTrees(root1Right, root2Right);

  return newNode;
};
// @lc code=end

