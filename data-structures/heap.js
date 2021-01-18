/**
 * Defaults to min heap
 * @usage:
 * let heap = new Heap();
 *
 * min heap (default): comparator = (a, b) => a - b < 0
 * max heap          : comparator = (a, b) => b - a > 0
 */

class Heap {
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
