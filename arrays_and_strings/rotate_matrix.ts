import assert from "node:assert";
import test from "node:test";

/**
 * Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
 * bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 */

function rotateMatrix(matrix: Array<Array<number>>): boolean {
  if (matrix.length === 0 || matrix.length !== matrix[0].length) {
    return false;
  }

  for (let layer = 0; layer < matrix.length / 2; layer++) {
    const first = layer; // 0
    const last = matrix.length - 1 - layer; // 2
    for (let i = first; i < last; i++) {
      const offset = i - first; // 0, 1
      const top = matrix[first][i]; // [0, 0] - [0, 1]
      // left -> top
      matrix[first][i] = matrix[last - offset][first]; // [2, 0] - [1, 0]
      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset]; // [2, 2] - [2, 1]
      // right -> bottom
      matrix[last][last - offset] = matrix[i][last]; // [0, 2] - [1, 2]
      // top -> right
      matrix[i][last] = top;
    }
  }

  return true;
}

test("rotate matrix", () => {
  const matrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
  ];

  const expected = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
  ];

  rotateMatrix(matrix);

  assert.deepEqual(matrix, expected);
});