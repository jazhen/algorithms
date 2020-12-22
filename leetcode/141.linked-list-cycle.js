// https://leetcode.com/problems/linked-list-cycle/

/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slow = head;
  let fast = head;

  while (slow && fast) {
    try {
      slow = slow.next;
      fast = fast.next.next;
    } catch (error) {
      return false;
    }

    if (slow === fast) {
      return true;
    }
  }

  return false;
};
// @lc code=end
