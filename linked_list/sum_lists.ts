import assert from "node:assert";
import test from "node:test";
import { createLinkedList, LinkedListNode } from "./create_linked_list";

/**
 * Sum Lists: You have two numbers represented by a linked list, where each node contains a single
 * digit. The digits are stored in reverse order,such that the 1's digit is at the head of the list. Write a
 * function that adds the two numbers and returns the sum as a linked list.
 * 
 * EXAMPLE
 * Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
 * Output: 2 -> 1 -> 9. That is,912.
 * 
 * FOLLOW UP
 * Suppose the digits are stored in forward order. Repeat the above problem.
 * Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295.
 * Output: 9 -> 1 -> 2.That is, 912.
 */
function sum(node: LinkedListNode) {
  return 0;
}

test("sum lists", () => {
  const linked_list = createLinkedList<number>([1, 2, 4, 5, 6, 7, 2, 1]);

  assert(true);
});

