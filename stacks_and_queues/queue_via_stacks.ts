import assert from "node:assert";
import test from "node:test";
import Stack from "./stack";

/**
 * Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
 */

class MyQueue {
  #stack_oldest = new Stack(10);
  #stack_newest = new Stack(10);

  get size() {
    return this.#stack_newest.size + this.#stack_oldest.size;
  }

  add(value: number) {
    this.#stack_newest.push(value);
  }

  remove() {
    this.shitfStacks();
    return this.#stack_oldest.pop();
  }

  peek() {
    this.shitfStacks();
    return this.#stack_oldest.peek();
  }

  private shitfStacks() {
    if (!this.#stack_oldest.isEmpty()) {
      return;
    }

    while (!this.#stack_newest.isEmpty()) {
      this.#stack_oldest.push(this.#stack_newest.pop());
    }
  }
}

test("queue via stacks", () => {
  const queue = new MyQueue();
  queue.add(1);
  queue.add(2);
  queue.add(3);

  assert.equal(queue.size, 3);
  assert.equal(queue.peek(), 1);
  assert.equal(queue.remove(), 1);
  assert.equal(queue.size, 2);
  assert.equal(queue.peek(), 2);
});