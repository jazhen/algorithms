/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 *
 * https://leetcode.com/problems/remove-linked-list-elements/
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
 * @param {number} val
 * @return {ListNode}
 *
 * time: O(# nodes)
 * space: O(1)
 */
var removeElements1 = function(head, val) {
  let dummyHead = new ListNode();
  dummyHead.next = head;
  let curr = dummyHead;

  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return dummyHead.next;
};

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements2 = function(head, val) {
  let curr = head;
  let prev = null;

  while (curr) {
    if (curr.val === val) {
      if (prev) {
        prev.next = curr.next;
      } else {
        head = curr.next;
      }
    } else {
      prev = curr;
    }

    curr = curr.next;
  }

  return head;
};
// @lc code=end

