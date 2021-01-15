// https://leetcode.com/problems/top-k-frequent-elements/

/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MaxHeap {
  constructor(tree = [], comparator = (a, b) => a && b && a.freq - b.freq > 0) {
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

  swap(index1, index2) {
    [this.tree[index1], this.tree[index2]] = [this.tree[index2], this.tree[index1]];
  }

  getLeftChild(index) {
    return index * 2 + 1;
  }

  getRightChild(index) {
    return index * 2 + 2;
  }

  siftDown(index) {
    const maxPriorityChild = this.getMaxPriorityChild(index);

    if (this.comparator(this.tree[maxPriorityChild], this.tree[index])) {
      this.swap(maxPriorityChild, index);
      this.siftDown(maxPriorityChild);
    }
  }

  getMaxPriorityChild(index) {
    const right = this.getRightChild(index);
    const left = this.getLeftChild(index);

    return this.comparator(this.tree[right], this.tree[left]) ? right : left;
  }

  extractMax() {
    if (!this.size()) return null;

    this.swap(0, this.size() - 1);
    const max = this.tree.pop();
    this.siftDown(0);
    return max.num;
  }
}

var topKFrequent = function(nums, k) {
  const frequency = {};

  for (const num of nums) {
    frequency[num] = frequency[num] + 1 || 1;
  }

  const heapArray = [];
  Object.keys(frequency).forEach((num) => {
    heapArray.push({
      num,
      freq: frequency[num],
    })
  })

  const maxHeap = new MaxHeap(heapArray);

  const mostFrequent = [];

  for (let i = 0; i < k; i++) {
    mostFrequent.push(maxHeap.extractMax());
  }

  return mostFrequent;
};
// @lc code=end
