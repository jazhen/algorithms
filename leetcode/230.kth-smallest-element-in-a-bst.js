// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
// // time: O(n)
// // space: O(n)
// var kthSmallest = function(root, k) {
//   let result = 0;

//   function dfs(root) {
//     if (!root) return;

//     dfs(root.left, k);

//     k -= 1;
//     if (k === 0) result = root.val;

//     dfs(root.right, k);
//   }

//   dfs(root);
//   return result;
// };

// time: O(n)
// space: O(1)
var kthSmallest = function(root, k) {
  const stack = [];

  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    k -= 1;
    if (k === 0) return root.val;

    root = root.right;
  }
};
// @lc code=end
