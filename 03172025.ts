// Create a stack class.

class MyStack {
  private stack: number[];

  constructor() {
    this.stack = [];
  }

  push(num: number): void {
    this.stack.push(num);
  }

  pop(): number {
    return this.stack.pop()!;
  }

  top(): number {
    return this.stack.at(-1)!;
  }

  empty(): boolean {
    return this.stack.length === 0;
  }
}

// num: number. 1 <= num <= 9.
// At most 100 calls will be made.
// All the calls to pop() and top() are valid.

// Create a stack class with push(), pop(), top(), and empty() methods.
// https://leetcode.com/problems/implement-stack-using-queues/
