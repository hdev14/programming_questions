import assert from "node:assert";
import test from "node:test";
import { LinkedListNode } from "../linked_list/linked_list";
import TreeNode from "./tree";

/**
 * List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
 * at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).
 */

function createLists(root: TreeNode) {
  const lists: Array<LinkedListNode<TreeNode>> = [];
  createLevelLinkedLists(root, lists, 0);
  return lists;
}

function createLevelLinkedLists(node: TreeNode | null, lists: Array<LinkedListNode<TreeNode>>, level: number) {
  if (node === null) {
    return;
  }

  const list_node = new LinkedListNode<TreeNode>(node);
  if (lists[level]) {
    lists[level].next = list_node;
  } else {
    lists.push(list_node);
  }
  createLevelLinkedLists(node.left, lists, level + 1);
  createLevelLinkedLists(node.right, lists, level + 1);
}

test("list of depths", () => {
  const root = new TreeNode(
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

  const lists = createLists(root);

  assert.equal(lists.length, 3);
});