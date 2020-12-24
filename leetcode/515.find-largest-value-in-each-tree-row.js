// https://leetcode.com/problems/find-largest-value-in-each-tree-row/

/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
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
 * @return {number[]}
 */
var largestValues = function(root) {
  const result = [];

  const bfs = (root) => {
    if (!root) return;

    let Q = [root];

    while (Q.length) {
      let max = -Infinity;
      let levelSize = Q.length;

      for (let i = 0; i < levelSize; i++) {
        const currentNode = Q.shift();
        max = Math.max(max, currentNode.val);

        if (currentNode.left) {
          Q.push(currentNode.left);
        }

        if (currentNode.right) {
          Q.push(currentNode.right);
        }
      }

      result.push(max);
    }
  }

  bfs(root);
  return result;
};
// @lc code=end

// set result array
// call a closure function bfs to populate the result array
//  args: root
// return result

//  set Q to [root]
//  while Q is not empty
//    set max to null
//    set level size to Q.length
//    iterate from 0 to level size
//      set current node to Q.shift
//      set max to max of max and current node's val
//    push max to result array
