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

  // increment prev, curr by one node
  // until curr is the m-th node
  while (pos < m) {
    [prev, curr] = [curr, curr.next];
    pos += 1;
  }

  // save the node before m and the node at n
  // to connect them after the reversal
  let nodeBeforeM = prev; // or lastNodeOfPrevGroup
  let nodeAtN = curr;  // or lastNodeOfCurrGroup

  // reverse the nodes from m to n
  while (pos <= n) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
    pos += 1;
  }

  // connect the first part of the LL to m
  if (nodeBeforeM) { // m !== 1
    nodeBeforeM.next = prev;
  } else { // m === 1
    head = prev;
  }

  // connect n to the last part of the LL
  nodeAtN.next = curr;

  return head;
};
