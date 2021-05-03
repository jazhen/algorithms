/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
 *
 * https://leetcode.com/problems/subtree-of-another-tree/
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 *
 * time: O(n * m), where n is the # of nodes in s and m is the # of nodes in t
 * space: O(n)
 */
 var isSubtree = function(s, t) {
  if (!s) return false;
  if (isSameTree(s, t)) return true;

  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isSameTree(s, t) {
  if (!s && !t) return true;
  if (!s || !t) return false;
  if (s.val !== t.val) return false;

  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}
// @lc code=end

