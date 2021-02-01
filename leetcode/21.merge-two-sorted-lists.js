// https://leetcode.com/problems/merge-two-sorted-lists/

/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null;

  let merged = new ListNode();
  let head = merged;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      merged.next = l1;
      l1 = l1.next;
    } else {
      merged.next = l2;
      l2 = l2.next;
    }

    merged = merged.next;
  }

  merged.next = l1 || l2;

  return head.next;
};
// @lc code=end

