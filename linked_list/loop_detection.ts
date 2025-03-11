import assert from "node:assert";
import test from "node:test";
import { createLinkedList, LinkedListNode } from "./linked_list";

/**
 * Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
 * beginning of the loop.
 * 
 * DEFINITION
 * Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so
 * as to make a loop in the linked list.
 * 
 * EXAMPLE
 * Input:A - > B - > C - > D - > E - > C [the same C as earlier]
 * Output:C
 */
function detect(node?: LinkedListNode) {

  return null;
}



test("loop detection", () => {
  const linked_list1 = createLinkedList<number>([1, 2, 4, 5, 6, 7, 2, 1]);
  const linked_list2 = createLinkedList<number>([1, 2, 4, 5, 6, 7, 2, 1]);

  assert.equal(linked_list1, linked_list2);
});

