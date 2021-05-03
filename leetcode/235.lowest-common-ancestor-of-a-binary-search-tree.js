/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 *
 * time: O(n), n = the total number of nodes in the tree
 * space: O(1)
 */
 var lowestCommonAncestorIterative = function(root, p, q) {
  let curr = root;

  while (curr) {
    if (curr.val > p.val && curr.val > q.val) {
      curr = curr.left;
    } else if (curr.val < p.val && curr.val < q.val) {
      curr = curr.right;
    } else {
      return curr;
    }
  }
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 *
 * time: O(n), n = the total number of nodes in the tree
 * space: O(n)
 */
var lowestCommonAncestorRecusive = function(root, p, q) {
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
};
// @lc code=end

