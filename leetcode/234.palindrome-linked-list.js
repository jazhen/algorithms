/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 *
 * https://leetcode.com/problems/palindrome-linked-list/
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
 *
 * time: O(# nodes)
 * space: O(1)
 */
 var isPalindrome = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let firstHalf = head;
  let secondHalf = reverse(slow);

  while (firstHalf && secondHalf) {
    if (firstHalf.val !== secondHalf.val) return false;

    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
};

function reverse(head) {
  let curr = head;
  let prev = null;

  while (curr) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }

  return prev;
}
// @lc code=end
