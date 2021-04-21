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
 *
 * time: O(n), where n = number of nodes in the tree
 * space: O(1)
 */
 var connectConstantSpace = function(root) {
  if (!root) return null;

  let leftmost = root;

  /** we work on the level below us, so stop when the current node doesn't have a left child */
  while (leftmost.left !== null) {
    // consider the level as a linked list and traverse through it,
    // establishing connections for the level below
    let head = leftmost;

    while (head) {
      /** connect a node's two children */
      head.left.next = head.right;

      /** connect the left siblings's right child and right siblings's left child */
      if (head.next) {
        head.right.next = head.next.left;
      }

      /** go to the next node on the current level */
      head = head.next;
    }

    /** go to the next level */
    leftmost = leftmost.left;
  }

  return root;
};

/**
 * @param {Node} root
 * @return {Node}
 *
 * time: O(n), where n = number of nodes in the tree
 * space: O(1)
 */
var connectLevelOrderTraversal = function(root) {
  if (!root) return null;

  const queue = [root];

  while (queue.length) {
    const rowLength = queue.length;

    for (let i = 0; i < rowLength; i++) {
      const currNode = queue.shift();

      if (i < rowLength - 1)  currNode.next = queue[0];

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
  }

  return root;
};

// time: O(n)
// space: O(n)
// @lc code=end

