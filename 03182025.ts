// Create a queue class.

class MyQueue {
  private stack: number[];

  constructor() {
    this.stack = [];
  }

  push(num: number): void {
    this.stack.unshift(num);
  }

  pop(): number {
    return this.stack.pop()!;
  }

  peek(): number {
    return this.stack.at(-1)!;
  }

  empty(): boolean {
    return this.stack.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// num: number. 1 <= num <= 9.
// At most 100 calls will be made.
// All the calls to pop() and top() are valid.

// Create a queue class with push(), pop(), top(), and empty() methods.
// https://leetcode.com/problems/implement-queue-using-stacks/
