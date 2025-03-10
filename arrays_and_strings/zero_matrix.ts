import assert from "node:assert";
import test from "node:test";

/**
 * Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
 * column are set to 0.
 */

function zeroMatrix(matrix: Array<Array<number>>) {
  const zero_rows = Array<boolean>(matrix.length);
  const zero_columns = Array<boolean>(matrix[0].length);

  for (let row_idx = 0; row_idx < matrix.length; row_idx++) {
    for (let column_idx = 0; column_idx < matrix[0].length; column_idx++) {
      if (matrix[row_idx][column_idx] == 0) {
        zero_rows[row_idx] = true;
        zero_columns[column_idx] = true;
      }
    }
  }

  for (let row_idx = 0; row_idx < matrix.length; row_idx++) {
    if (zero_rows[row_idx]) {
      for (let column_idx = 0; column_idx < matrix[0].length; column_idx++) {
        matrix[row_idx][column_idx] = 0;
      }
    }
  }

  for (let column_idx = 0; column_idx < matrix[0].length; column_idx++) {
    if (zero_columns[column_idx]) {
      for (let row_idx = 0; row_idx < matrix.length; row_idx++) {
        matrix[row_idx][column_idx] = 0;
      }
    }
  }
}

test("zero matrix", () => {
  const matrix = [
    [1, 0, 3],
    [1, 2, 3],
    [0, 2, 3]
  ];

  const expected = [
    [0, 0, 0],
    [0, 0, 3],
    [0, 0, 0]
  ];

  zeroMatrix(matrix);

  assert.deepEqual(matrix, expected);
});