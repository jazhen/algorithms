// https://leetcode.com/problems/find-median-from-data-stream/

/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
class MinHeap {
  constructor(tree = [], comparator = (a, b) => a < b) {
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

class MaxHeap {
  constructor(tree = [], comparator = (a, b) => a > b) {
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

var MedianFinder = function() {
  // min heap holds the lower half of numbers
  this.minHeap = new MinHeap();

  // max heap holds the higher half of numbers
  this.maxHeap = new MaxHeap();
};

/**
 * @param {number} num
 * @return {void}
 */
// step 1: each element is added to min heap first
// step 2: then the min element is extracted and inserted in to
//         the max heap
//         - this assures that all elements in min heap are
//           greater than max heap
// step 3: finally balance the two heaps
MedianFinder.prototype.addNum = function(num) {
  this.minHeap.insert(num);
  this.maxHeap.insert(this.minHeap.extract());

  if (this.minHeap.size() < this.maxHeap.size()) {
    this.minHeap.insert(this.maxHeap.extract());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if (this.minHeap.size() === this.maxHeap.size()) {
    return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
  } else {
    return this.minHeap.peek();
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
