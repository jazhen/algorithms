// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

class Heap {
  constructor(tree = [], comparator = (a, b) => a - b < 0) {
    this.tree = tree;
    this.comparator = comparator;
    this.buildHeap();
  }

  buildHeap() {
    for (let i = Math.floor(this.size() / 2); i >= 0; i--) {
      this.siftDown(i);
    }
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  size() {
    return this.tree.length;
  }

  swap(index1, index2) {
    [this.tree[index1], this.tree[index2]] = [this.tree[index2], this.tree[index1]];
  }

  peek() {
    return this.size() ? this.tree[0] : null;
  }

  insert(val) {
    this.tree.push(val);
    this.siftUp(this.size() - 1);
  }

  pop() {
    if (!this.size()) return null;

    this.swap(0, this.size() - 1);
    const root = this.tree.pop();
    this.siftDown(0);
    return root;
  }

  siftUp(index) {
    if (index === 0) return;

    let parentIndex = this.getParentIndex(index);
    if (this.comparator(this.tree[index], this.tree[parentIndex])) {
      this.swap(index, parentIndex);
      this.siftUp(parentIndex);
    }
  }

  maxPriorityChildIndex(index) {
    const rightChildIndex = this.getRightChildIndex(index);
    const leftChildIndex = this.getLeftChildIndex(index);

    return (this.comparator(this.tree[rightChildIndex], this.tree[leftChildIndex])) ?
      rightChildIndex : leftChildIndex;
  }

  siftDown(index) {
    if (index === undefined) return;

    const childIndex = this.maxPriorityChildIndex(index);
    if (this.comparator(this.tree[childIndex], this.tree[index])) {
        this.swap(childIndex, index);
        this.siftDown(childIndex);
    }
  }
}

var kthSmallest = function(matrix, k) {
  const minHeap = new Heap([].concat(...matrix));

  for (let i = 0; i < k - 1; i++) {
    minHeap.pop();
  }

  return minHeap.peek();
};
// @lc code=end
