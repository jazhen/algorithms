/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 *
 * https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 *
 * time: O(n), n = the total number of nodes in the tree
 * space: O(n)
 */
var maxDepth = function (root) {
  if (!root) return 0;

  let depth = 0;

  for (const child of root.children) {
    depth = Math.max(depth, maxDepth(child));
  }

  return depth + 1;
};
// @lc code=end
