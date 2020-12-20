// https://leetcode.com/problems/remove-duplicates-from-sorted-list/solution/

/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }

  let iterator = head.next;
  let lastNonDuplicate = head;

  while (iterator !== null) {
    if (iterator.val > lastNonDuplicate.val) {
      lastNonDuplicate = lastNonDuplicate.next;
      lastNonDuplicate.val = iterator.val;
    }

    iterator = iterator.next;
  }

  lastNonDuplicate.next = null;
  return head;
};
// @lc code=end

// two pointers
// iterator = head.next
// lastNonDuplicate = head

// while iterator.val is not null
//  if iterator.val is greater than lastNonDuplicate.val
//    lastNonDuplicate becomes lastNonDuplicate.next
//    lastNonDuplicate.val becomes iterator.val
//  iterator becomes iterator.next

// set lastNonDuplicate.next to be null (remove extraneous links)
// return head (now updated)
