// https://leetcode.com/problems/reverse-linked-list-ii/

/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let curr = head;
  let prev = null;
  let pos = 1;

  while (pos < m) {
    prev = curr;
    curr = curr.next;
    pos += 1;
  }

  const nodeBeforeM = prev;
  const nodeAtN = curr;

  while (pos <= n) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    pos += 1;
  }

  if (nodeBeforeM) {
    nodeBeforeM.next = prev;
  } else {
    head = prev;
  }

  nodeAtN.next = curr;

  return head;
};
// @lc code=end

// set current position to 1
// set current to head
// set prev to null

// increment prev, curr, and pos (no switching) until reaching pos m
//  prev becomes curr
//  curr becomes curr's next
//  increment pos

// prev now the node before the sublist (before pos m), call this nodeBeforeM
// curr is now the node at the end of the sublist (at pos n), call this nodeAtN
// save these as variables to connect the reversed sublist later

// while pos is less than or equal to n
//  do regular reverse linked list operations (with updating pos)
//    let local var next to curr's next
//    set prev to curr
//    set curr to next
//    increment pos

// now connect the reversed sublist
//  if there is a nodeBeforeM (m !== 1)
//    connect nodeBeforeM's next to prev (connect node before sublist to
//      the the start of the new sublist, prev)
//  else set head to prev, the end of the new sublist,
//    since nodeBeforeM.next must be head

//  always set the node at the end of the sublist, nodeAtN's next, to curr
//    which is the node after the sublist

// return head
