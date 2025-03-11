import assert from "node:assert";
import test from "node:test";
import { createLinkedList, LinkedListNode } from "./linked_list";

/**
 * Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
 */
function getKthToLastRecursive(node: LinkedListNode, k: number) {
  if (node === undefined) {
    return { index: 0 };
  }

  let { index, value } = getKthToLastRecursive(node.next!, k);

  index += 1;

  if (index === k) {
    console.log(`${k}th to last element is ${node.value}`);
    return { index, value: node.value };
  }

  return { index, value };
}

function getKthToLast(node: LinkedListNode, k: number) {
  let current: LinkedListNode | undefined = node;
  let next: LinkedListNode | undefined = node;

  for (let i = 0; i < k; i++) {
    if (next === undefined) {
      return null;
    }
    next = next.next;
  }

  while (next !== undefined) {
    current = current!.next;
    next = next.next;
  }

  return current;
}

test("return kth to last", () => {
  const linked_list = createLinkedList<number>([1, 2, 4, 5, 6, 7, 2, 1]);

  const { value } = getKthToLastRecursive(linked_list, 3);
  const node = getKthToLast(linked_list, 3);

  assert.equal(value, 7);
  assert.equal(node!.value, 7);
});

