import assert from "node:assert";
import test from "node:test";
import Stack from "./stack";

/**
 * Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
 * threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be
 * composed of several stacks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks.push() and SetOfStacks. pop() should behave identically to a single stack
 * (that is, pop() should return the same values as it would if there were just a single stack).
 * 
 * FOLLOW UP
 * Implement a function popAt(int index) which performs a pop operation on a specific sub­
 * stack.
 */

class SetOfStack {
  #stacks: Stack[] = [];

  constructor(readonly treshold: number) { }

  push(value: number) {
    const last_stack = this.getLastStack();

    if (last_stack === null || last_stack.isFull()) {
      const new_stack = new Stack(this.treshold);
      new_stack.push(value);
      this.#stacks.push(new_stack);
      return;
    }

    last_stack.push(value);
  }

  pop() {
    const last_stack = this.getLastStack();

    if (last_stack === null) {
      throw new Error();
    }

    const value = last_stack.pop();

    if (last_stack.isEmpty()) {
      this.#stacks.pop();
    }

    return value;
  }

  peek() {
    const last_stack = this.getLastStack();

    if (last_stack === null) {
      throw new Error();
    }

    return last_stack.peek();
  }

  getLastStack() {
    if (this.#stacks.length === 0) {
      return null;
    }

    return this.#stacks[this.#stacks.length - 1];
  }

  isEmpty() {
    const last_stack = this.getLastStack();
    return last_stack == null || last_stack.isEmpty();
  }

  isFull() {
    const last_stack = this.getLastStack();
    return last_stack == null || last_stack.isFull();
  }
}

test("stack of plates", () => {
  const stack_of_plates = new SetOfStack(2);
  stack_of_plates.push(2);
  stack_of_plates.push(3);
  stack_of_plates.push(1);

  assert.equal(stack_of_plates.pop(), 1);
  assert.equal(stack_of_plates.pop(), 3);
  assert.equal(stack_of_plates.peek(), 2);
});