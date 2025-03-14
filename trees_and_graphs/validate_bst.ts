import assert from "node:assert";
import test from "node:test";
import TreeNode from './tree';

/**
 * Validate BST: Implement a function to check if a binary tree is a binary search tree.
 */

function extractNodes(node: TreeNode | null, array: Array<any>, index: number) {
  if (node === null) {
    return;
  }
  extractNodes(node.left, array, index);
  array[index++] = node.value;
  extractNodes(node.right, array, index);
}

function isBST(root: TreeNode) {
  let index = 0;
  let array = [];
  extractNodes(root, array, index);

  for (let idx = 1; idx < array.length; idx++) {
    if (array[idx] <= array[idx - 1]) {
      return false;
    }
  }

  return true;
}

test("validate binary searh tree", () => {
  const not_bst = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(3),
      new TreeNode(6)
    ),
    new TreeNode(
      4,
      new TreeNode(1),
      new TreeNode(2)
    )
  );

  const bst = new TreeNode(
    4,
    new TreeNode(
      3,
      new TreeNode(1),
      new TreeNode(2)
    ),
    new TreeNode(
      5,
      new TreeNode(6),
      new TreeNode(7)
    )
  );

  assert.equal(isBST(not_bst), false);
  assert.equal(isBST(bst), true);
});