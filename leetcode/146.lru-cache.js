// https://leetcode.com/problems/lru-cache/

/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
class DoublyLinkedListNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new DoublyLinkedListNode();
    this.tail = new DoublyLinkedListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  removeNode(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  insertHead(node) {
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next.prev = node;
    this.head.next = node;
  }

  moveToHead(node) {
    this.removeNode(node);
    this.insertHead(node);
  }

  removeTail() {
    const tail = this.tail.prev;
    this.removeNode(tail);

    return tail.key;
  }
}

class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    // for checking the existence of a key
    this.cache = {};
    // head => MRU
    // tail => LRU
    this.LRU = new DoublyLinkedList();
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const node = this.cache[key];

    if (node) {
      this.LRU.moveToHead(node);

      return node.val;
    } else {
      return -1;
    }
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, val) {
    let node = this.cache[key];

    if (node) {
      // update it's val and make it the MRU
      node.val = val;
      this.LRU.moveToHead(node);
    } else {
      // add a new node
      const newNode = new DoublyLinkedListNode(key, val);

      this.cache[key] = newNode;
      this.LRU.insertHead(newNode);
      this.size += 1;

      // remove the LRU
      if (this.size > this.capacity) {
        const tailKey = this.LRU.removeTail();

        delete this.cache[tailKey];
        this.size -= 1;
      }
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
