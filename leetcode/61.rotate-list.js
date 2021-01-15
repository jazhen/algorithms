// https://leetcode.com/problems/rotate-list/

/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  let length = 1;
  let lastNode = head;

  // find length and get last node
  while (lastNode.next) {
    lastNode = lastNode.next;
    length += 1;
  }

  // connect last node to head to make it a circular list
  lastNode.next = head;

  let newHeadPos = length - (k % length);
  let lastNodeOfRotatedList = head;

  // newHeadPos - 1 to reach node new last node
  for (let i = 0; i < newHeadPos - 1; i++) {
    lastNodeOfRotatedList = lastNodeOfRotatedList.next;
  }

  // new head is the next node
  head = lastNodeOfRotatedList.next;

  // then chop of circular list by setting next to null
  lastNodeOfRotatedList.next = null;

  return head;
};
// @lc code=end

