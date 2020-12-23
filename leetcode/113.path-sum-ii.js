// https://leetcode.com/problems/path-sum-ii/

/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @return {number[][]}
 */
const findPaths = function(root, sum, result, currentPath) {
  if (!root) return;

  currentPath.push(root.val);

  if (sum === root.val && !root.left && !root.right) {
    result.push([...currentPath]);
  } else {
    findPaths(root.left, sum - root.val, result, currentPath);
    findPaths(root.right, sum - root.val, result, currentPath);
  }

  currentPath.pop();
}

var pathSum = function(root, sum) {
  const result = [];

  findPaths(root, sum, result, []);

  return result;
};
// @lc code=end

// init a result array to []

// call function that adds to the result array
//   takes in root, sum, result, currentPath

// return the result

// return early if !root

// push the current node val to the currentPath

// if root is a leaf node and its val is equal to sum
//   add the currentPath to the result

// recursively call this function with root = left child and sum = sum - root.val
// then
// recursively call this function with root = right child and sum = sum - root.val

// backtrack and pop the last el from currentPath
