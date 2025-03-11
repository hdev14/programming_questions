import assert from "node:assert";
import test from "node:test";
import { createLinkedList, LinkedListNode, linkedListToArray } from "./linked_list";

/**
 * Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
 * before all nodes greater than or equal to x. If x is contained within the list the values of x only need
 * to be after the elements less than x (see below). The partition element x can appear anywhere in the
 * "right partition"; it does not need to appear between the left and right partitions.
 * 
 * EXAMPLE
 * Input:3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5]
 * Output:3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
 */
function partition(node: LinkedListNode, x: number): LinkedListNode {
  let before_start: LinkedListNode | undefined = undefined;
  let before_end: LinkedListNode | undefined = undefined;
  let after_start: LinkedListNode | undefined = undefined;
  let after_end: LinkedListNode | undefined = undefined;
  let current: LinkedListNode | undefined = node;

  while (current !== undefined) {
    const next = current.next;
    current.next = undefined;

    if (current.value <= x) {
      if (before_start === undefined) {
        before_start = current;
        before_end = before_start;
      } else {
        before_end!.next = current;
        before_end = current;
      }
    } else {
      if (after_start === undefined) {
        after_start = current;
        after_end = after_start;
      } else {
        after_end!.next = current;
        after_end = current;
      }
    }

    current = next;
  }

  if (before_start === undefined) {
    return after_start!;
  }

  before_end!.next = after_start;

  return before_start!;
}

function partition2(node: LinkedListNode, x: number): LinkedListNode {
  let head: LinkedListNode | undefined = node;
  let tail: LinkedListNode | undefined = node;
  let next: LinkedListNode | undefined = node;

  while (next !== undefined) {
    const temp = next.next;

    if (next.value <= x) {
      next.next = head;
      head = next;
    } else {
      tail.next = next;
      tail = next;
    }

    next = temp;
  }

  tail.next = undefined;

  return head!;
}

test("partition", () => {
  const linked_list1 = createLinkedList<number>([1, 2, 4, 5, 6, 7, 2, 1]);
  const linked_list2 = createLinkedList<number>([1, 2, 4, 5, 6, 7, 2, 1]);


  let result1 = partition(linked_list1, 2);
  let result2 = partition2(linked_list2, 2);

  assert.deepEqual(linkedListToArray(result1), [1, 2, 2, 1, 4, 5, 6, 7]);
  assert.deepEqual(linkedListToArray(result2), [1, 2, 2, 1, 4, 5, 6, 7]);
});

