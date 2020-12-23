// https://leetcode.com/problems/average-of-levels-in-binary-tree/

/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
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
var averageOfLevels = function(root) {
  let averages = [];
  let queue = [root];

  while (queue.length) {
    let levelLength = queue.length;
    let levelSum = 0;

    for (let i = 0; i < levelLength; i++) {
      const currentNode = queue.shift();
      levelSum += currentNode.val;

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    averages.push(levelSum / levelLength);
  }

  return averages;
};
// @lc code=end

// init average of levels to []
// init queue with [root]

// while queue is not empty
//   set level length to queue.length
//   init the current level sum to 0

//   for the level length
//     set the current node to queue.shift
//     add the current node's val to the level sum
//     add the current node's left and right to the queue (if exists)

//   then get the level avg by dividing the sum by the level length
//     and push this avg to the level avgs array

// return level avgs array

// time: O(n)
// space: O(n)
