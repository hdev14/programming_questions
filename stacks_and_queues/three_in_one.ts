import assert from "node:assert";
import test from "node:test";

/**
 * Three in One: Describe how you could use a single array to implement three stacks.
 */

class MultiStack {
  #number_of_stacks = 3;
  #stack_capacity;
  #sizes = [0, 0, 0];
  #values: any[];

  constructor(capacity: number) {
    this.#stack_capacity = capacity;
    this.#values = new Array(this.#number_of_stacks * this.#stack_capacity);
  }

  isEmpty(stack_number: number) {
    return this.#sizes[stack_number] === 0;
  }

  isFull(stack_number: number) {
    return this.#sizes[stack_number] >= this.#stack_capacity;
  }

  getLastElementIdx(stack_number: number) {
    const offset = stack_number * this.#stack_capacity;
    const size = this.#sizes[stack_number];
    return offset + size - 1;
  }

  push(stack_number: number, value: number) {
    if (this.isFull(stack_number)) {
      throw new Error();
    }

    const idx = this.getLastElementIdx(stack_number) + 1;
    this.#values[idx] = value;
    this.#sizes[stack_number]++;
  }

  pop(stack_number: number) {
    if (this.isEmpty(stack_number)) {
      throw new Error();
    }

    const idx = this.getLastElementIdx(stack_number);
    const value = this.#values[idx];
    this.#values[idx] = undefined;
    this.#sizes[stack_number]--;
    return value;
  }

  peek(stack_number: number) {
    return this.#values[this.getLastElementIdx(stack_number)];
  }
}

test("three in one", () => {
  const multi_stacks = new MultiStack(3);
  multi_stacks.push(0, 1);
  multi_stacks.push(0, 2);
  multi_stacks.push(1, 3);
  multi_stacks.push(1, 4);
  multi_stacks.push(2, 5);
  multi_stacks.push(2, 6);

  assert.equal(multi_stacks.pop(0), 2);
  assert.equal(multi_stacks.pop(1), 4);
  assert.equal(multi_stacks.pop(2), 6);
  assert.equal(multi_stacks.peek(0), 1);
  assert.equal(multi_stacks.peek(1), 3);
  assert.equal(multi_stacks.peek(2), 5);
});