/*
 * @lc app=leetcode id=1834 lang=javascript
 *
 * [1834] Single-Threaded CPU
 *
 * https://leetcode.com/problems/single-threaded-cpu/
 */

// @lc code=start
/**
 * @param {number[][]} tasks
 * @return {number[]}
 *
 * time: O(n log(n)), where n = tasks.length
 * space: O(n)
 */
 var getOrder = function(tasks) {
  // save the tasks with each task's index
  const sortedTasks = [];

  for (const [index, task] of tasks.entries()) {
    sortedTasks.push({
      enqueueTime: task[0],
      processingTime: task[1],
      index
    })
  }

  // sort according to enqueue time
  sortedTasks.sort((a, b) => a.enqueueTime - b.enqueueTime)

  // set the time to the first enqueue time
  let time = sortedTasks[0].enqueueTime;

  // set up min heap
  const minHeap = new Heap([], function(a, b) {
    // if the processing times are the same, choose the task with the smallest index
    if (a && b && a.processingTime === b.processingTime) {
      return a.index < b.index;
    }

    // choose the task with the shortest processing time
    return a && b && a.processingTime < b.processingTime;
  });

  const order = [];
  let i = 0;

  while (order.length < tasks.length) {
    // add tasks that have enqueue time <= current time to the min heap
    while (i < sortedTasks.length && sortedTasks[i].enqueueTime <= time) {
      minHeap.insert(sortedTasks[i]);
      i += 1;
    }

    // process the task with the shortest processing time
    if (minHeap.size() > 0) {
      const minOrder = minHeap.extract();

      time += minOrder.processingTime;
      order.push(minOrder.index);
    } else {
      // if the current time is smaller than the next available task's enqueue time
      // and there are no more tasks that can be processed,
      // fast foward the current time to the next available task's enqueue time
      time = sortedTasks[i].enqueueTime;
    }
  }

  return order;
};

class Heap {
  /**
   * Create a Heap. Defaults to a min heap.
   * @example
   * const minHeap1 = new Heap([75, 12, 3, 11]);
   * @example
   * const maxHeap = new Heap([], (a, b) => a > b);
   * @example
   * const frequencies = [{num: 5, freq: 8}, {num: 30, freq: 1}, {num: 2, freq: 3}];
   * const minHeap2 = new Heap(frequencies, (a, b) => a && b && a.val < b.val);
   * @param {number[]} tree - The initial elements of the heap.
   * @param {function} comparator - The function that determines the heap structure.
   */
  constructor(tree = [], comparator = (a, b) => a < b) {
    this.tree = tree;
    this.comparator = comparator;
    this.buildHeap();
  }

  /**
   * Heapify the given tree. Only runs on Heap initialization.
   * Time - O(n) (amortized)
   */
  buildHeap() {
    for (let i = Math.floor(this.size() / 2); i >= 0; i--) {
      this.siftDown(i);
    }
  }

  /**
   * Get the index of the given index's parent.
   * Time - O(1)
   * @param {number} index
   * @return {number}
   */
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * Get the index of the given index's left child.
   * Time - O(1)
   * @param {number} index
   * @return {number}
   */
  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  /**
   * Get the index of the given index's right child.
   * Time - O(1)
   * @param {number} index
   * @return {number}
   */
  getRightChildIndex(index) {
    return index * 2 + 2;
  }

  /**
   * Get the number of nodes in the heap.
   * Time - O(1)
   * @return {number}
   */
  size() {
    return this.tree.length;
  }

  /**
   * Swap the two nodes at the given indices.
   * Time - O(1)
   * @param {number} index1
   * @param {number} index2
   */
  swap(index1, index2) {
    [this.tree[index1], this.tree[index2]] = [this.tree[index2], this.tree[index1]];
  }

  /**
   * Get the root node.
   * Time - O(1)
   * @return {number}
   */
  peek() {
    return this.size() ? this.tree[0] : null;
  }

  /**
   * Insert a new node with the given value.
   * Time - O(log n)
   * @param {number} val
   */
  insert(val) {
    this.tree.push(val);
    this.siftUp(this.size() - 1);
  }

  /**
   * Remove the root node.
   * Time - O(log n)
   * @return {number}
   */
  extract() {
    if (!this.size()) return null;

    this.swap(0, this.size() - 1);
    const root = this.tree.pop();
    this.siftDown(0);
    return root;
  }

  /**
   * Maintain heap structure from the given index to the root.
   * Time - O(log n)
   * @param {number} index
   */
  siftUp(index) {
    if (index === 0) return;

    let parentIndex = this.getParentIndex(index);
    if (this.comparator(this.tree[index], this.tree[parentIndex])) {
      this.swap(index, parentIndex);
      this.siftUp(parentIndex);
    }
  }

  /**
   * Get the index of the child that has the highest priority when passed
   * through the comparator function.
   * Time - O(1)
   * @param {number} index
   * @return {number}
   */
  maxPriorityChildIndex(index) {
    const rightChildIndex = this.getRightChildIndex(index);
    const leftChildIndex = this.getLeftChildIndex(index);

    return (this.comparator(this.tree[rightChildIndex], this.tree[leftChildIndex])) ?
      rightChildIndex : leftChildIndex;
  }

  /**
   * Maintain heap structure from the given index to the last node.
   * Time - O(log n)
   * @param {number} index
   */
  siftDown(index) {
    const childIndex = this.maxPriorityChildIndex(index);
    if (this.comparator(this.tree[childIndex], this.tree[index])) {
        this.swap(childIndex, index);
        this.siftDown(childIndex);
    }
  }
}
// @lc code=end

