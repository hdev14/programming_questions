import assert from "node:assert";
import test from "node:test";
import { createLinkedList, LinkedListNode, linkedListToArray } from "./linked_list";

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
function sumLists(first_node?: LinkedListNode, second_node?: LinkedListNode, carry = 0) {
  if (first_node === undefined && second_node === undefined && carry === 0) {
    return undefined;
  }

  const new_node = new LinkedListNode(0);
  let value = carry;
  if (first_node !== undefined) {
    value += first_node.value;
  }

  if (second_node !== undefined) {
    value += second_node.value;
  }

  new_node.value = value % 10;

  new_node.next = sumLists(
    first_node !== undefined ? first_node.next : undefined,
    second_node !== undefined ? second_node.next : undefined,
    parseInt((value / 10).toString(), 10),
  );

  return new_node;
}

test("sum lists", () => {
  const first_linked_list = createLinkedList<number>([7, 1, 6]);
  const second_linked_list = createLinkedList<number>([5, 9, 2]);

  const result_linked_list = sumLists(first_linked_list, second_linked_list);

  assert.deepEqual(linkedListToArray(result_linked_list!), [2, 1, 9]);
});

