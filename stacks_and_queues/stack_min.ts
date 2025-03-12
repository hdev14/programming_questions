import assert from "node:assert";
import test from "node:test";
import Stack from "./stack";

/**
 * Three in One: Describe how you could use a single array to implement three stacks.
 */

class StackWithMin extends Stack {
  #stack_mins: Stack;

  constructor(capacity: number) {
    super(capacity);
    this.#stack_mins = new Stack(capacity);
  }

  push(value: number) {
    if (value <= this.getMin()) {
      this.#stack_mins.push(value);
    }
    super.push(value);
  }

  pop() {
    const value = super.pop();
    if (value == this.getMin()) {
      this.#stack_mins.pop();
    }
    return value;
  }

  getMin() {
    if (this.#stack_mins.isEmpty()) {
      return Number.MAX_SAFE_INTEGER;
    }

    return this.#stack_mins.peek();
  }
}

test("stack min", () => {
  const stack_min = new StackWithMin(3);
  stack_min.push(2);
  stack_min.push(3);
  stack_min.push(1);

  assert.equal(stack_min.getMin(), 1);
  assert.equal(stack_min.pop(), 1);
  assert.equal(stack_min.getMin(), 2);
});