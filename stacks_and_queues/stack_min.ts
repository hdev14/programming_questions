import assert from "node:assert";
import test from "node:test";
import Stack from "./stack";

/**
 * Stack Min: How would you design a stack which, in addition to push and pop, has a function min
 * which returns the minimum element? Push, pop and min should all operate in 0(1) time.
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