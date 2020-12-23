// https://leetcode.com/problems/sum-root-to-leaf-numbers/

/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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
 */
const calcTotalSum = function(root, pathSum) {
  if (!root) return 0;

  pathSum = 10 * pathSum + root.val;

  if (!root.left && !root.right) {
    return pathSum;
  }

  return calcTotalSum(root.left, pathSum) + calcTotalSum(root.right, pathSum);
}

var sumNumbers = function(root) {
  return calcTotalSum(root, 0);
};
// @lc code=end

// set total sum to 0
// call a function that takes in root, total sum, and current sum (type: string)
// return total sum

// return if node is null
// add the node's val to the string current sum
// if the node is a leaf
//   add the current sum to the total sum
// recursively call this function with left and right
// slice off the last char in the current sum string at the end to backtrack
