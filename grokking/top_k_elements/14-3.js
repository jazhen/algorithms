// Given an unsorted array of numbers, find Kth smallest number in it.

// Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.

// Note: For a detailed discussion about different approaches to solve this problem, take a look at Kth Smallest Number.

// Example 1:

// Input: [1, 5, 12, 2, 11, 5], K = 3
// Output: 5
// Explanation: The 3rd smallest number is '5', as the first two smaller numbers are [1, 2].

// Example 2:

// Input: [1, 5, 12, 2, 11, 5], K = 4
// Output: 5
// Explanation: The 4th smallest number is '5', as the first three small numbers are [1, 2, 5].

// Example 3:

// Input: [5, 12, 11, -1, 12], K = 3
// Output: 11
// Explanation: The 3rd smallest number is '11', as the first two small numbers are [5, -1].

class MinHeap {
  constructor(tree = []) {
    this.tree = tree;

    if (this.size()) this.buildHeap();
  }

  buildHeap() {
    for (let i = Math.floor(this.size() / 2); i >= 0; i--) {
      this.minHeapify(i);
    }
  }

  size() {
    return this.tree.length;
  }

  insert(el) {
    this.tree.push(el);
    this.minHeapify(0);
    return el;
  }

  extractMin() {
    if (!this.size()) return null;

    let min = this.findMin();
    this.tree[0] = this.tree.pop();
    this.minHeapify(0);
    return min;
  }

  findMin() {
    return this.size() ? this.tree[0] : null;
  }

  minHeapify(index) {
    const temp = this.tree[index];

    for (let childIndex; index * 2 < this.size(); index = childIndex ) {
      childIndex = index * 2;

      if (childIndex < this.size() && this.tree[childIndex] > this.tree[childIndex + 1]) {
        childIndex += 1;
      }

      if (temp > this.tree[childIndex]) {
        this.tree[index] = this.tree[childIndex];
      } else {
        break;
      }
    }

    this.tree[index] = temp;
  }
}

const findKthSmallestNumber = function(nums, k) {
  const minHeap = new MinHeap(nums);

  while (minHeap.size() > k) {
    minHeap.extractMin();
  }

  return minHeap.findMin();
}

console.log(findKthSmallestNumber([1, 5, 12, 2, 11, 5], 3)); // 5
console.log(findKthSmallestNumber([1, 5, 12, 2, 11, 5], 4)); // 5
console.log(findKthSmallestNumber([5, 12, 11, -1, 12], 3)); // 11
