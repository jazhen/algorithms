// https://leetcode.com/problems/kth-largest-element-in-an-array/

/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MaxHeap {
  constructor(tree = [], comparator = (a, b) => a - b > 0) {
    this.tree = tree;
    this.comparator = comparator;
    this.buildHeap();
  }

  buildHeap() {
    for (let i = Math.floor(this.size() / 2); i >= 0; i--) {
      this.siftDown(i);
    }
  }

  size() {
    return this.tree.length;
  }

  getMaxPriorityChild(index) {
    const rightIndex = this.rightChild(index);
    const leftIndex = this.leftChild(index);
    const rightVal = this.tree[rightIndex] === undefined ?  -Infinity : this.tree[rightIndex];
    const leftVal = this.tree[leftIndex] === undefined ? -Infinity : this.tree[leftIndex];
    return this.comparator(rightVal, leftVal) ? this.rightChild(index) : this.leftChild(index);
  }

  siftDown(index) {
    const child = this.getMaxPriorityChild(index);
    if (this.comparator(this.tree[child], this.tree[index])) {
      this.swap(child, index);
      this.siftDown(child);
    }
  }

  pop() {
    this.swap(0, this.size() - 1);
    const top = this.tree.pop();
    this.siftDown(0);
    return top;
  }

  peek() {
    return this.size() ? this.tree[0] : null;
  }

  swap(index1, index2) {
    [this.tree[index1], this.tree[index2]] = [this.tree[index2], this.tree[index1]];
  }

  rightChild(index) {
    return index * 2 + 1;
  }

  leftChild(index) {
    return index * 2 + 2;
  }
}

var findKthLargest = function(nums, k) {
  let maxHeap = new MaxHeap(nums);

  for (let i = 0; i < k - 1; i++) {
    maxHeap.pop();
  }

  return maxHeap.peek();
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findKthLargest;
// @after-stub-for-debug-end
