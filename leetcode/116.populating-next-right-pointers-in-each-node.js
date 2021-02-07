// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return null;

  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    let prevNode = null;

    for (let i = 0; i < levelSize; i++) {
      const currNode = queue.shift();

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);

      if (prevNode) prevNode.next = currNode;
      prevNode = currNode;
    }

    prevNode.next = null;
  }

  return root;
};

// time: O(n)
// space: O(n)
// @lc code=end

