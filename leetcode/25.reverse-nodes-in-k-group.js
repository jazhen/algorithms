// https://leetcode.com/problems/reverse-nodes-in-k-group/

/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let curr = head;
  let prev = null;

  while (curr) {
    // return if there are k nodes left
    // since you don't reverse the leftover nodes
    let runner = curr;
    for (let i = 0; i < k; i++) {
      if (!runner) {
        return head;
      }

      runner = runner.next;
    }

    // below is the same code as reversing a sub-list
    const newHead = prev;
    const newTail = curr;

    for (let i = 0; i < k; i++) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    if (newHead) {
      newHead.next = prev;
    } else {
      head = prev;
    }

    newTail.next = curr;

    prev = newTail;
  }

  return head;
};
// @lc code=end

