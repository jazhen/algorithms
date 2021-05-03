/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 *
 * https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 *
 * time: O(n), n = the total number of nodes in the doubly linked list
 * space: O(1)
 */
var flatten = function(head) {
  if (!head) return null;

  const stack = [head];
  let prev = null;

  while (stack.length > 0) {
    curr = stack.pop();

    if (curr.next) {
      stack.push(curr.next);
    }

    if (curr.child) {
      stack.push(curr.child);
      curr.child = null;
    }

    if (prev) {
      prev.next = curr;
      curr.prev = prev;
    }

    prev = curr;
  }

  return head;
};
// @lc code=end

