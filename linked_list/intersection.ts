import assert from "node:assert";
import test, { describe } from "node:test";
import { calculcateLength, createLinkedList, LinkedListNode } from "./linked_list";

/**
 * Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the
 * intersecting node. Note that the intersection is defined based on reference, not value. That is, if the
 * kth node of the first linked list is the exact same node (by reference) as the jth node of the second
 * linked list, then they are intersecting.
 */
function findIntersectionNode(first_node?: LinkedListNode, second_node?: LinkedListNode) {
  if (first_node === undefined || second_node === undefined) {
    return null;
  }

  let first_tail: LinkedListNode | undefined = first_node;
  let second_tail: LinkedListNode | undefined = second_node;
  let hasIntersection = false;

  while (true) {
    if (first_tail === undefined && second_tail === undefined) {
      break;
    }

    if (first_tail === second_tail) {
      hasIntersection = true;
      break;
    }

    if (first_tail !== undefined) {
      first_tail = first_tail.next;
    }

    if (second_tail !== undefined) {
      second_tail = second_tail.next;
    }
  }

  if (hasIntersection) {
    const first_length = calculcateLength(first_node);
    const second_length = calculcateLength(second_node);
    const diff_length = Math.abs(first_length - second_length);
    let first_next: LinkedListNode | undefined = first_node;
    let second_next: LinkedListNode | undefined = second_node;

    for (let i = 0; i < diff_length; i++) {
      first_next = first_next!.next;
      second_next = second_next!.next;
    }

    while (first_next !== undefined || second_next !== undefined) {
      if (first_next === second_next) {
        return first_next;
      }

      first_next = first_next!.next;
      second_next = second_next!.next;
    }
  }

  return null;
}


describe("intersection", () => {
  test("should has an intersection", () => {
    const linked_list1 = createLinkedList<number>([1, 2, 4, 5, 6, 7, 2, 1]);
    const linked_list2 = createLinkedList<number>([1, 2, 4, 5, 6, 7, 2, 1]);
    const intersection = createLinkedList<number>([10, 2, 4, 5, 6, 7, 2, 1])
    linked_list1.next = intersection;
    linked_list2.next = intersection;

    const result = findIntersectionNode(linked_list1, linked_list2);

    assert.equal(result!.value, intersection.value);
  });

  test("should not has an intersection", () => {
    const linked_list1 = createLinkedList<number>([1, 2, 4, 5, 6, 7, 2, 1]);
    const linked_list2 = createLinkedList<number>([1, 2, 4, 5, 6, 7, 2, 1]);

    const result = findIntersectionNode(linked_list1, linked_list2);

    assert.equal(result, null);
  });
})

