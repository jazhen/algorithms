// https://leetcode.com/problems/path-sum-iii/

/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @param {number} sum
 * @return {number}
 */

var pathSum = function(root, sum) {
  let count = 0;

  const dfs = (root, sum) => {
    if (!root) return;

    // check paths which start at the current node
    dfs2(root, sum);

    // then check paths of left and right
    dfs(root.left, sum);
    dfs(root.right, sum);
  }

  const dfs2 = (root, sum) => {
    if (!root) return;

    if (root.val === sum) {
      count += 1;
    }

    dfs2(root.left, sum - root.val);
    dfs2(root.right, sum - root.val);
  }

  dfs(root, sum);
  return count;
};
// @lc code=end
