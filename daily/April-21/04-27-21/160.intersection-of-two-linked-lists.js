/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 *
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 *
 * much shorter version of the two pointer explicit approach
 *
 * time: O(n + m), n = the number of nodes in headA, m = the number of nodes in headB
 * space: O(1)*
 */
 var getIntersectionNodeTwoPointerOptimized = function(headA, headB) {
  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a;
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 *
 * move the longer list so that the length starting at the new head
 * would be equal to the length of the shorter list
 * then just move both pointer simultaneously until they intersect or become null
 *
 * time: O(n + m), n = the number of nodes in headA, m = the number of nodes in headB
 * space: O(1)
 */
 var getIntersectionNodeTwoPointerExplicit = function(headA, headB) {
  let lengthA = 1;
  let a = headA;

  while (a && a.next) {
    lengthA++;
    a = a.next;
  }

  let lengthB = 1;
  let b = headB;

  while (b && b.next) {
    lengthB++;
    b = b.next;
  }

  let longerList = lengthA > lengthB ? headA : headB;
  let shorterList = lengthB < lengthA ? headB : headA;

  for (let i = 0; i < Math.abs(lengthA - lengthB); i++) {
    longerList = longerList.next;
  }

  while (longerList && shorterList) {
    if (longerList === shorterList) return longerList;

    longerList = longerList.next;
    shorterList = shorterList.next;
  }

  return null;
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 *
 * time: O(n + m), n = the number of nodes in headA, m = the number of nodes in headB
 * space: O(n)
 */
var getIntersectionNodeSet = function(headA, headB) {
  const seen = new Set();

  let a = headA;

  while (a) {
    seen.add(a);
    a = a.next;
  }

  let b = headB;

  while (b) {
    if (seen.has(b)) return b;

    b = b.next;
  }

  return null;
};
// @lc code=end

