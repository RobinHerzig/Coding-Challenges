// Create an LRU cache class.

class LRUNode {
  key: number;
  val: number;
  next: LRUNode | null;
  prev: LRUNode | null;

  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null; // Doubly linked list.
  }
}

class LRUCache {
  private capacity: number;
  private map: Map<number, LRUNode>;
  private left: LRUNode; // LRU (dummy head)
  private right: LRUNode; // MRU (dummy tail)

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();

    this.left = new LRUNode(-1, -1);
    this.right = new LRUNode(-1, -1);

    this.left.next = this.right;
    this.right.prev = this.left;
  }

  private remove(node: LRUNode): void {
    const prev = node.prev!;
    const next = node.next!;
    prev.next = next;
    next.prev = prev;
  }

  private insert(node: LRUNode): void {
    const prev = this.right.prev!;
    const next = this.right;

    prev.next = node;
    node.prev = prev;

    node.next = next;
    next.prev = node;
  }

  public get(key: number): number {
    if (!this.map.has(key)) {
      return -1;
    }

    const node = this.map.get(key)!;
    this.remove(node);
    this.insert(node);

    return node.val;
  }

  public put(key: number, val: number): void {
    if (this.map.has(key)) {
      this.remove(this.map.get(key)!);
    }

    const node = new LRUNode(key, val);
    this.map.set(key, node);
    this.insert(node);

    if (this.map.size > this.capacity) {
      const node = this.left.next!; // LRU
      this.remove(node);
      this.map.delete(node.key);
    }
  }
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
console.log(lRUCache.get(1), 1);
lRUCache.put(3, 3);
console.log(lRUCache.get(2), -1);
lRUCache.put(4, 4);
console.log(lRUCache.get(1), -1);
console.log(lRUCache.get(3), 3);
console.log(lRUCache.get(4), 4);
// https://leetcode.com/problems/lru-cache/

// capacity: number. 1 <= capacity <= 3000.
// key: number. 0 <= key <= 10^4.
// value: number. 0 <= value <= 10^5.

// Create a LRU data structure with get() and put() methods. Both must run in O(n) complexity.
