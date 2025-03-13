
// #include <stdio.h>
// #include <malloc.h>
// #include <stdbool.h>

// #define UNVISITED 0
// #define VISITED 1
// #define COMPLETED 2

// typedef struct Node
// {
//     int vertice;
//     int value;
//     Node *next;
// } Node;

// typedef struct Vertice
// {
//     Node *head;
// } Vertice;

// typedef struct Graph
// {
//     int qty_vertices;
//     int qty_edges;
//     Vertice *vertices;
// } Graph;

// Graph *createGraph(int qty_vertices)
// {
//     Graph *graph = (Graph *)malloc(sizeof(Graph));
//     graph->qty_edges = 0;
//     graph->qty_vertices = qty_vertices;
//     graph->vertices = (Vertice *)malloc(qty_vertices * sizeof(Vertice));

//     for (int i = 0; i < qty_vertices; i++)
//     {
//         graph->vertices[i].head = NULL;
//     }

//     return graph;
// }

// Node *createNode(int vertice, int value)
// {
//     Node *new_node = (Node *)malloc(sizeof(Node));
//     new_node->next = NULL;
//     new_node->value = value;
//     new_node->vertice = vertice;
//     return new_node;
// }

// bool insertEdge(Graph *graph, int vertice_idx, int vertice, int value)
// {
//     if (graph == NULL)
//     {
//         return false;
//     }

//     if (vertice_idx < 0 || vertice < 0 || vertice_idx >= graph->qty_vertices || vertice >= graph->qty_vertices)
//     {
//         return false;
//     }

//     Node *new_node = createNode(vertice, value);
//     new_node->next = graph->vertices[vertice_idx].head;
//     graph->vertices[vertice_idx].head = new_node;
//     graph->qty_edges++;

//     return true;
// }

// void printGraph(Graph *graph)
// {
//     if (graph == NULL)
//     {
//         return;
//     }

//     printf("Graph as %i vertices and %i edges\n", graph->qty_vertices, graph->qty_edges);

//     for (int i = 0; i < graph->qty_vertices; i++)
//     {
//         Node *next = graph->vertices[i].head;

//         printf("Vertice %i has -> ", i);

//         while (next != NULL)
//         {
//             printf("V %i (%i)", next->vertice, next->value);
//             next = next->next;
//         }
//         printf("\n");
//     }
// }

// void visiteVertices(Graph *graph, int *visited_vertices, int vertice_idx)
// {
//     visited_vertices[vertice_idx] = VISITED;

//     Node *node = graph->vertices[vertice_idx].head;

//     while (node != NULL)
//     {
//         if (visited_vertices[node->vertice] == UNVISITED)
//         {
//             visiteVertices(graph, visited_vertices, node->vertice);
//         }
//         node = node->next;
//     }

//     visited_vertices[vertice_idx] = COMPLETED;
// }

// int *DFS(Graph *graph)
// {
//     int *visited_vertices = (int *)malloc(graph->qty_vertices * sizeof(int));

//     for (int i = 0; i < graph->qty_vertices; i++)
//     {
//         visited_vertices[i] = UNVISITED;
//     }

//     for (int i = 0; i < graph->qty_vertices; i++)
//     {
//         if (visited_vertices[i] == UNVISITED)
//         {
//             visiteVertices(graph, visited_vertices, i);
//         }
//     }

//     return visited_vertices;
// }

// void exploreVertice(Graph *graph, int *explored, int vertice_idx)
// {
// }

// int BFS(Graph *graph)
// {
//     bool explored[graph->qty_vertices];

//     for (int i = 0; i < graph->qty_vertices; i++)
//     {
//         explored[i] = false;
//     }

//     for (int i = 0; i < graph->qty_vertices; i++)
//     {
//         if (explored[i] == false)
//         {
//         }
//     }
// }

// int main()
// {
//     Graph *graph = createGraph(3);

//     for (int i = 0; i < 3; i++)
//     {
//         insertEdge(graph, i, (i + 1) % 3, i * 2);
//     }

//     printGraph(graph);

//     int *result = DFS(graph);

//     for (int i = 0; i < graph->qty_vertices; i++)
//     {
//         printf("[%i] ", result[i]);
//     }

//     return 0;
// }

export enum State {
  VISITED,
  UNVISITED,
  VISITING,
}

export class Node {
  state?: State;
  adjacents: Node[] = [];

  constructor(readonly value: any) { }

  insertAdjacent(node: Node) {
    this.adjacents.push(node);
  }

  getAdjacents() {
    return this.adjacents;
  }
}

export default class Graph {
  #nodes: Node[] = [];

  construct(nodes: Node[]) {
    this.#nodes = nodes;
  }

  getNodes() {
    return this.#nodes;
  }

  insert(node: Node, vertice_idx?: number) {
    const idx = this.#nodes.push(node) - 1;

    if (vertice_idx === undefined) {
      return idx;
    }

    const vertice = this.#nodes[vertice_idx];

    if (!vertice) {
      return -1;
    }

    vertice.insertAdjacent(node);

    return idx;
  }
}