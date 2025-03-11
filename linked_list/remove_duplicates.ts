import assert from "node:assert";
import test from "node:test";
import { createLinkedList, LinkedListNode, linkedListToArray } from "./linked_list";

/**
 * Remove Duplicates: Write code to remove duplicates from an unsorted linked list.
 * How would you solve this problem if a temporary buffer is not allowed?
 */
function removeDuplicates(node: LinkedListNode) {
  const set = new Set<any>();

  for (let next: any = node, previous: any = null; next !== undefined; next = next.next) {
    if (set.has(next.value) && previous !== null) {
      previous.next = next.next;
      continue;
    }

    set.add(next.value);
    previous = next;
  }
}

test("remove duplicates", () => {
  const linked_list = createLinkedList<number>([1, 2, 4, 5, 6, 7, 2, 1]);

  removeDuplicates(linked_list);

  assert.deepEqual(linkedListToArray(linked_list), [1, 2, 4, 5, 6, 7]);
});

