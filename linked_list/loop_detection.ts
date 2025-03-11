import assert from "node:assert";
import test from "node:test";
import { LinkedListNode } from "./linked_list";

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
  let slow_runner: LinkedListNode | undefined = node;
  let fast_runner: LinkedListNode | undefined = node;

  while (fast_runner !== undefined && fast_runner!.next !== undefined) {
    slow_runner = slow_runner!.next;
    fast_runner = fast_runner!.next.next;
    if (slow_runner === fast_runner) {
      break;
    }
  }

  if (fast_runner === undefined || fast_runner.next === undefined) {
    return null;
  }

  slow_runner = node;

  while (slow_runner !== fast_runner) {
    slow_runner = slow_runner!.next;
    fast_runner = fast_runner!.next;
  }

  return slow_runner;
}



test("loop detection", () => {
  const node1 = new LinkedListNode(1);
  const node2 = new LinkedListNode(2);
  const node3 = new LinkedListNode(3);
  const node4 = new LinkedListNode(4);
  const node5 = new LinkedListNode(5);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node3;

  const result = detect(node1);

  assert.equal(result!.value, 3);
});

