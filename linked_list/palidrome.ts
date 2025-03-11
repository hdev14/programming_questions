import assert from "node:assert";
import test from "node:test";
import { createLinkedList, LinkedListNode } from "./linked_list";

/**
 * Palindrome: Implement a function to check if a linked list is a palindrome.
 */
function isPalidrome(node?: LinkedListNode) {
  let reversed = reverseLinkedList(node);

  while (node !== undefined && reversed !== undefined) {
    if (node.value !== reversed.value) {
      return false;
    }
    node = node.next;
    reversed = reversed.next;
  }

  return true;
}

function reverseLinkedList(node?: LinkedListNode) {
  let head: LinkedListNode | undefined = undefined;

  for (let next = node; next !== undefined; next = next.next) {
    const copy = new LinkedListNode(next.value);
    copy.next = head;
    head = copy;
  }

  return head;
}

test("palindrome", () => {
  assert.equal(isPalidrome(createLinkedList<number>([0, 1, 2, 5, 2, 1, 0])), true);
  assert.equal(isPalidrome(createLinkedList<number>([1, 1, 2, 5, 2, 1, 0])), false);
});



