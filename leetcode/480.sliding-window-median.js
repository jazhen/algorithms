// https://leetcode.com/problems/sliding-window-median/

/*
 * @lc app=leetcode id=480 lang=javascript
 *
 * [480] Sliding Window Median
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Heap {
  constructor(tree = [], comparator = (a, b) => a < b) {
    this.tree = tree;
    this.comparator = comparator;
    this.buildHeap();
  }

  clear() {
    this.tree = [];
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

  remove(val) {
    const valIndex = this.tree.indexOf(val);

    if (valIndex === -1) return;

    if (valIndex === this.size() - 1) {
      this.tree.pop();
      return;
    }

    this.tree[valIndex] = this.tree.pop();
    this.siftDown(this.siftUp(valIndex));
  }

  // O(log n)
  siftUp(index) {
    if (index === 0) return;

    let parentIndex = this.getParentIndex(index);
    if (this.comparator(this.tree[index], this.tree[parentIndex])) {
      this.swap(index, parentIndex);
      this.siftUp(parentIndex);
    }

    return index;
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

    return index;
  }

  remove(val) {
    const idx = this.tree.indexOf(val);
    if (idx === this.tree.length - 1) return this.tree.pop();
    this.tree[idx] = this.tree.pop()
    this.siftDown(0);
  }
}

class Window {
  constructor() {
    this.minHeap = new Heap([], (a, b) => a < b);
    this.maxHeap = new Heap([], (a, b) => a > b);
  }

  insert(value) {
    this.heap(value).insert(value);
    this.balance();
  }

  remove(value) {
    this.heap(value).remove(value);
    this.balance();
  }

  median() {
    if (this.minHeap.size() === this.maxHeap.size()) {
      return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    }
    return this.minHeap.peek();
  }

  heap(value) {
    return BigInt(value) < this.median() ? this.maxHeap : this.minHeap
  }

  balance() {
    const diff = this.maxHeap.size() - this.minHeap.size()
    if (diff > 0) this.minHeap.insert(this.maxHeap.extract());
    else if (diff < -1) this.maxHeap.insert(this.minHeap.extract());
  }
}

var medianSlidingWindow = function(nums, k) {
  const window = new Window();

  for (let i = 0; i < k - 1; i++) window.insert(nums[i]);

  let res = [];

  for (let i = k - 1; i < nums.length; i++) {
    window.insert(nums[i]);
    res.push(window.median());
    window.remove(nums[i - k + 1]);
  }

  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = medianSlidingWindow;
// @after-stub-for-debug-end
