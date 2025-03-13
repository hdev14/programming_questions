import assert from "node:assert";
import test from "node:test";
import TreeNode from './tree';
/**
 * Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of
 * this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
 * node never differ by more than one.
 */

function isBalanced(node: TreeNode | null) {
  if (node === null) {
    return true;
  }

  const diff = calculateHeight(node.left) - calculateHeight(node.right);

  return Math.abs(diff) <= 1;
}

function calculateHeight(node: TreeNode | null) {
  if (node === null) {
    return -1;
  }

  return Math.max(calculateHeight(node.left), calculateHeight(node.right)) + 1;
}

test("check balanced", () => {
  const balanced_tree = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(3),
      new TreeNode(6)
    ),
    new TreeNode(
      4,
      new TreeNode(5),
      new TreeNode(7)
    )
  );

  const unbalanced_tree = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(3,
        new TreeNode(5,
          new TreeNode(6)
        )
      ),
    ),
  );

  assert.equal(isBalanced(balanced_tree), true);
  assert.equal(isBalanced(unbalanced_tree), false);
});