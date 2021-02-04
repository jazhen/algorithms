// https://leetcode.com/problems/add-two-numbers/

/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode();
  let curr = dummyHead;
  let sum = 0;
  let carry = 0;

  while (l1 || l2) {
    let a = l1 ? l1.val : 0;
    let b = l2 ? l2.val : 0;

    sum = a + b + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry) {
    curr.next = new ListNode(carry);
  }

  return dummyHead.next;
};
// @lc code=end

