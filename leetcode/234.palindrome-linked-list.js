// https://leetcode.com/problems/palindrome-linked-list/

/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // get the middle node
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the linked list, starting at the middle node
  let curr = slow;
  let prev = null;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // compare vals starting at the head and the middle node
  // incrementing each by 1 step
  while (prev) {
    if (head.val !== prev.val) {
      return false;
    }

    head = head.next;
    prev = prev.next;
  }

  return true;
};
// @lc code=end
