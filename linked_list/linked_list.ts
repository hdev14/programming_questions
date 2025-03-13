export class LinkedListNode<T = any> {
  next: LinkedListNode | undefined;
  constructor(public value?: T) { }
}

export function calculcateLength(node: LinkedListNode) {
  let length = 0;
  let next: LinkedListNode | undefined = node;
  while (next) {
    length++;
    next = next.next;
  }
  return length;
}

export function linkedListToArray(node: LinkedListNode) {
  const array: Array<any> = [];
  let next: LinkedListNode | undefined = node;
  while (next) {
    array.push(next.value);
    next = next.next;
  }
  return array;
}

export function createLinkedList<T>(values: Array<T>): LinkedListNode<T> {
  const root = new LinkedListNode(values[0]);

  let previous: LinkedListNode | undefined = root;
  for (let idx = 1; idx < values.length; idx++) {
    const new_node = new LinkedListNode(values[idx]);
    if (previous) {
      previous.next = new_node;
    }
    previous = new_node;
  }

  return root;
}

