// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // create a new node and connect it to the head
  let dummy = new ListNode(0);
  dummy.next = head;

  // slow and fast start before the first node of head
  let slow = dummy;
  let fast = dummy;

  // start fast n nodes ahead of slow
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // increment slow and fast, keep them n nodes apart
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // remove the nth node from the end
  slow.next = slow.next.next;

  return dummy.next;
};
// @lc code=end

