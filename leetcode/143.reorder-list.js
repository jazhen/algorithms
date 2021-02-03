// https://leetcode.com/problems/reorder-list/

/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reverseLL(head) {
  let curr = head;
  let prev = null;

  while (curr) {
    [curr.next, prev, curr] = [prev, curr, curr.next]
  }

  return prev;
}

var reorderList = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let headSecondHalf = reverseLL(slow);
  let headFirstHalf = head;

  while (headFirstHalf && headSecondHalf) {
    [headFirstHalf.next, headFirstHalf] = [headSecondHalf, headFirstHalf.next];
    [headSecondHalf.next, headSecondHalf] = [headFirstHalf, headSecondHalf.next];
  }

  if (headFirstHalf.next) {
    headFirstHalf.next = null;
  }

  return head;
};
// @lc code=end
