/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 *
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 *
 * time: O(n), n = the number of nodes in the linked list
 * space: O(n)
 */
 var copyRandomList = function(head) {
  if (!head) return null;

  const clones = new Map();
  const cloneHead = new Node(head.val);
  clones.set(head, cloneHead);

  const stack = [head];

  while (stack.length > 0) {
    const node = stack.pop();
    const cloneNode = clones.get(node);

    if (node.next) {
      if (!clones.has(node.next)) {
        const nextNode = new Node(node.next.val);
        clones.set(node.next, nextNode);
        stack.push(node.next);
      }

      cloneNode.next = clones.get(node.next);
    }

    if (node.random) {
      if (!clones.has(node.random)) {
        const randomNode = new Node(node.random.val);
        clones.set(node.random, randomNode);
        stack.push(node.random);
      }

      cloneNode.random = clones.get(node.random);
    }
  }

  return cloneHead;
};
// @lc code=end

