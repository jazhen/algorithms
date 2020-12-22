// https://leetcode.com/problems/linked-list-cycle-ii/

/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
 * @return {ListNode}
 */

const getCycleLength = function(node) {
  let length = 1;
  let next = node;

  while (node !== next.next) {
    length += 1;
    next = next.next;
  }

  return length;
}

const firstNodeOfCycle = function(head, cycleLength) {
  let slow = head;
  let fast = head;

  while (cycleLength > 0) {
    fast = fast.next;
    cycleLength -= 1;
  }

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

var detectCycle = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      const cycleLength = getCycleLength(slow);
      return firstNodeOfCycle(head, cycleLength);
    }
  }

  return null;
};
// @lc code=end

