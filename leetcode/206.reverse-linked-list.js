// https://leetcode.com/problems/reverse-linked-list/

/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  let curr = head;
  let prev = null;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
// @lc code=end

// set curr to head
// set prev to null

// while curr
//  set temp var next to curr.next
//  set curr.next to prev
//  set prev to curr
//  set curr to next

// return curr
