// https://leetcode.com/problems/k-closest-points-to-origin/

/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

class Heap {
  constructor(tree = [], comparator = (a, b) => a - b < 0) {
    this.tree = tree;
    this.comparator = comparator;
    this.buildHeap();
  }

  // amortised O(n)
  buildHeap() {
    for (let i = Math.floor(this.size() / 2); i >= 0; i--) {
      this.siftDown(i);
    }
  }

  // O(1)
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // O(1)
  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  // O(1)
  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  // O(1)
  size() {
    return this.tree.length;
  }

  // O(1)
  swap(index1, index2) {
    [this.tree[index1], this.tree[index2]] = [this.tree[index2], this.tree[index1]];
  }

  // O(1)
  peek() {
    return this.size() ? this.tree[0] : null;
  }

  // O(log n)
  insert(val) {
    this.tree.push(val);
    this.siftUp(this.size() - 1);
  }

  // O(log n)
  extract() {
    if (!this.size()) return null;

    this.swap(0, this.size() - 1);
    const root = this.tree.pop();
    this.siftDown(0);
    return root;
  }

  // O(log n)
  siftUp(index) {
    if (index === 0) return;

    let parentIndex = this.getParentIndex(index);
    if (this.comparator(this.tree[index], this.tree[parentIndex])) {
      this.swap(index, parentIndex);
      this.siftUp(parentIndex);
    }
  }

  // O(1)
  maxPriorityChildIndex(index) {
    const rightChildIndex = this.getRightChildIndex(index);
    const leftChildIndex = this.getLeftChildIndex(index);

    return (this.comparator(this.tree[rightChildIndex], this.tree[leftChildIndex])) ?
      rightChildIndex : leftChildIndex;
  }

  // O(log n)
  siftDown(index) {
    const childIndex = this.maxPriorityChildIndex(index);
    if (this.comparator(this.tree[childIndex], this.tree[index])) {
        this.swap(childIndex, index);
        this.siftDown(childIndex);
    }
  }
}

var kClosest = function(points, K) {
  const comparator = (a, b) => a && b && Math.sqrt(a[0] ** 2 + a[1] ** 2) < Math.sqrt(b[0] ** 2 + b[1] ** 2);

  const maxHeap = new Heap(points, comparator);

  const result = [];

  for (let i = 0; i < K; i++) {
    result.push(maxHeap.extract());
  }

  return result;
};
// @lc code=end

