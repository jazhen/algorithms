/*
 * @lc app=leetcode id=1290 lang=javascript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
 *
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 *
 * time: O(n), n = number of nodes
 * space: O(1)
 */
var getDecimalValue = function(head) {
  let n = 0;
  let curr = head;

  while (curr) {
    n = (n << 1) | curr.val;
    curr = curr.next;
  }

  return n;
};
// @lc code=end

