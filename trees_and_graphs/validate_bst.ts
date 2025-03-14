import assert from "node:assert";
import test from "node:test";
import TreeNode from './tree';

/**
 * Validate BST: Implement a function to check if a binary tree is a binary search tree.
 */

let index = 0;
function extractNodes(node: TreeNode | null, array: Array<any>) {
  if (node === null) {
    return;
  }
  extractNodes(node.left, array);
  array[index++] = node.value;
  extractNodes(node.right, array);
}

let last_element: any = null;
function checkBST(node: TreeNode | null) {
  if (node === null) {
    return true;
  }

  if (!checkBST(node.left)) {
    return false;
  }

  if (last_element !== null && last_element > node.value) {
    return false;
  }

  last_element = node.value;

  if (!checkBST(node.right)) {
    return false;
  }

  return true;
}

function isBST(root: TreeNode) {
  let array = [];
  extractNodes(root, array);
  index = 0;
  for (let idx = 1; idx < array.length; idx++) {
    if (array[idx] <= array[idx - 1]) {
      return false;
    }
  }

  return true;
}

function isBST2(root: TreeNode) {
  const result = checkBST(root);
  last_element = null;
  return result;
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
      2,
      new TreeNode(1),
      new TreeNode(3)
    ),
    new TreeNode(
      6,
      new TreeNode(5),
      new TreeNode(7)
    )
  );

  assert.equal(isBST(not_bst), false);
  assert.equal(isBST(bst), true);
  assert.equal(isBST2(not_bst), false);
  assert.equal(isBST2(bst), true);
});