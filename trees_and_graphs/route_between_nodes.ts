import assert from "node:assert";
import test from "node:test";
import Graph, { Node, State } from "./graph";

/**
 * Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a
 * route between two nodes.
 */

// BFS
function search(graph: Graph, start: Node, end: Node) {
  const queue = new Array();

  const nodes = graph.getNodes();

  for (const node of nodes) {
    node.state = State.UNVISITED;
  }

  start.state = State.VISITING;
  queue.push(start);

  let next_node: Node | null = null;

  while (queue.length !== 0) {
    next_node = queue.shift();
    if (next_node) {
      const adjacents = next_node.getAdjacents();
      for (const adjacent of adjacents) {
        if (adjacent.state === State.UNVISITED) {
          if (adjacent === end) {
            return true;
          }

          adjacent.state = State.VISITING;
          queue.push(adjacent);
        }
      }
      next_node.state = State.VISITED;
    }
  }

  return false;
}

test("route between nodes", () => {
  const graph = new Graph();
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  const node4 = new Node(4);
  const node5 = new Node(5);
  const vertice_idx1 = graph.insert(node1);
  graph.insert(node2, vertice_idx1);
  const vertice_idx3 = graph.insert(node3, vertice_idx1);
  graph.insert(node4, vertice_idx3);
  graph.insert(node5, vertice_idx1);

  assert.equal(search(graph, node1, node4), true);
  assert.equal(search(graph, node2, node4), false);
});