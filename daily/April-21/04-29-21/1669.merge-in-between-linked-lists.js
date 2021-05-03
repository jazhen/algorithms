/*
 * @lc app=leetcode id=1669 lang=javascript
 *
 * [1669] Merge In Between Linked Lists
 *
 * https://leetcode.com/problems/merge-in-between-linked-lists/
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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 *
 * time: O(n + m), n = the number of nodes in list1, m = the number of nodes in list2
 * space: O(1)
 */
var mergeInBetween = function(list1, a, b, list2) {
  let nodeBeforeList2Head = list1;

  for (let i = 0; i < a - 1; i++) {
    nodeBeforeList2Head = nodeBeforeList2Head.next;
  }

  let nodeAfterList2Tail = nodeBeforeList2Head;

  for (let i = a; i < b + 2; i++) {
    nodeAfterList2Tail = nodeAfterList2Tail.next;
  }

  nodeBeforeList2Head.next = list2;

  let list2Tail = list2;

  while (list2Tail && list2Tail.next) {
    list2Tail = list2Tail.next;
  }

  list2Tail.next = nodeAfterList2Tail;

  return list1;
};
// @lc code=end

