import assert from "node:assert";
import test from "node:test";
import TreeNode from "./tree";

/**
 * Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an
 * algorithm to create a binary search tree with minimal height.
 */

function createBinarySearchTree(array: Array<number>) {
  return createTree(array, 0, array.length - 1);
}

function createTree(array: Array<number>, start: number, end: number) {
  if (end < start) {
    return null;
  }
  const mid = Math.round((start + end) / 2);
  const node = new TreeNode(
    array[mid],
    createTree(array, start, mid - 1),
    createTree(array, mid + 1, end),
  )
  return node;
}

test("route between nodes", () => {
  const array = [1, 2, 3, 4, 5, 6];
  const tree = createBinarySearchTree(array);

  assert.equal(tree.value, 4);
  assert.equal(tree.left.value, 2);
  assert.equal(tree.left.left.value, 1);
  assert.equal(tree.left.right.value, 3);
  assert.equal(tree.right.value, 6);
  assert.equal(tree.right.left.value, 5);
});