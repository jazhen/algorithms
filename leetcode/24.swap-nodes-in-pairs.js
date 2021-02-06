// https://leetcode.com/problems/swap-nodes-in-pairs/

/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function(head) {
  let curr = head;
  let prev = null;

  while (curr) {
    let twoNodesLeftChecker = curr;

    for (let i = 0; i < 2; i++) {
      if (!twoNodesLeftChecker) return head;

      twoNodesLeftChecker = twoNodesLeftChecker.next;
    }

    let lastNodeOfPrevGroup = prev;
    let lastNodeOfCurrGroup = curr;

    for (let i = 0; i < 2; i++) {
      [curr.next, prev, curr] = [prev, curr, curr.next];
    }

    if (lastNodeOfPrevGroup) {
      lastNodeOfPrevGroup.next = prev;
    } else {
      head = prev;
    }

    prev = lastNodeOfCurrGroup;
    lastNodeOfCurrGroup.next = curr;
  }

  return head;
};
// @lc code=end

