// https://leetcode.com/problems/odd-even-linked-list/

/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
var oddEvenList = function(head) {
  if (!head) return null;

  // keep track of curr odd and even nodes
  let odd = head;
  let even = head.next;

  // save evenHead to connect at end
  let evenHead = even;

  while (even && even.next) {
    // connect next odd node
    odd.next = even.next;
    odd = odd.next;

    // connect next even node
    even.next = odd.next;
    even = even.next;
  }

  // connect odd list to even list
  odd.next = evenHead;

  return head;
};

// time: O(n)
// space: O(1)
// @lc code=end
