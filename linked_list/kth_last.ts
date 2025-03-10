import assert from "node:assert";
import test from "node:test";
import { createLinkedList, LinkedListNode } from "./create_linked_list";

/**
 * Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
 */
function printKthToLast(node: LinkedListNode, k: number) {
  if (node === undefined) {
    return { index: 0 };
  }

  let { index, value } = printKthToLast(node.next!, k);

  index += 1;

  if (index === k) {
    console.log(`${k}th to last element is ${node.value}`);
    return { index, value: node.value };
  }

  return { index, value };
}

test("return kth to last", () => {
  const linked_list = createLinkedList<number>([1, 2, 4, 5, 6, 7, 2, 1]);

  const { value } = printKthToLast(linked_list, 3);

  assert.equal(value, 7);
});

