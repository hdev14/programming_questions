import assert from "node:assert";
import test from "node:test";
import Stack from "./stack";

/**
 * Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use
 * an additional temporary stack, but you may not copy the elements into any other data structure
 * (such as an array). The stack supports the following operations: push, pop, peek, and is Empty.
 */
function sortStack(stack: Stack) {
  const aux = new Stack(stack.capacity);

  while (!stack.isEmpty()) {
    const temp = stack.pop();

    while (!aux.isEmpty() && aux.peek() > temp) {
      stack.push(aux.pop());
    }

    aux.push(temp);
  }

  while (!aux.isEmpty()) {
    stack.push(aux.pop());
  }
}

test("sort stack", () => {
  const stack = new Stack(5);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(1);
  stack.push(5);

  sortStack(stack);

  for (let idx = 1; idx <= 5; idx++) {
    assert.equal(stack.pop(), idx);
  }
});