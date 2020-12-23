// https://leetcode.com/problems/binary-tree-level-order-traversal/

/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const traversal = [];
  const queue = [root];

  if (!root) return traversal;

  while (queue.length) {
    let levelSize = queue.length;
    const level = [];

    while (levelSize) {
      currentNode = queue.shift();
      level.push(currentNode.val);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      levelSize -= 1;
    }

    traversal.push(level);
  }

  return traversal;
};
// @lc code=end

// init a result arr
// init a queue (array) to [root]

// while queue is not empty
//   set curr to queue.shift

//   init an empty inner result array
//   current queue.length times do
//     push queue.shift to inner result
//     push queue.shift.right and queue.shift.left to queue
//   push inner result to result

// return result
