// https://leetcode.com/problems/binary-tree-vertical-order-traversal/

/*
 * @lc app=leetcode id=314 lang=javascript
 *
 * [314] Binary Tree Vertical Order Traversal
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
var verticalOrder = function(root) {
  const verticalLevels = {};

  // contains [node, vertical level relative to root]
  const queue = [[root, 0]];

  // keep track of the range of levels to improve the time complexity
  // from O(n log n) to O(n), where n is the amount of levels
  let minLevel = Infinity;
  let maxLevel = -Infinity;

  while (queue.length) {
    const [node, levelRelativeToRoot] = queue.shift();

    if (!node) continue;

    minLevel = Math.min(minLevel, levelRelativeToRoot);
    maxLevel = Math.max(maxLevel, levelRelativeToRoot);

    if (verticalLevels[levelRelativeToRoot]) {
      verticalLevels[levelRelativeToRoot].push(node.val);
    } else {
      verticalLevels[levelRelativeToRoot] = [node.val];
    }

    if (node.left) {
      queue.push([node.left, levelRelativeToRoot - 1]);
    }

    if (node.right) {
      queue.push([node.right, levelRelativeToRoot + 1]);
    }
  }

  const traversal = [];

  for (let level = minLevel; level <= maxLevel; level++) {
    traversal.push(verticalLevels[level]);
  }

  return traversal;
};
// @lc code=end

