import assert from "node:assert";
import test from "node:test";

/**
 * Palindrome Permutation: Given a string, write a function to check if it is a permutation of
 * a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A
 * permutation is a rearrangement of letters. The palindrome does not need to be limited to just
 * dictionary words.
 */

function isPermutationOfPalidrome(phrase: string): boolean {
  const lowercase = phrase.toLowerCase();
  const length = 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  const table: number[] = new Array(length);

  for (let idx = 0; idx < lowercase.length; idx++) {
    const code = lowercase.charCodeAt(idx);
    if (code < (length - 1) && code >= 0) {
      table[code] += 1;
    }
  }

  let hasOdd = false;

  for (let idx = 0; idx < table.length; idx++) {
    const value = table[idx];
    if (Number.isInteger(value)) {
      if (value % 2 == 1) {
        if (hasOdd) {
          return false;
        }
        hasOdd = true;
      }
    }
  }

  return true;
}

test("palidrome permutation", () => {
  const input = 'Tact Coa';

  assert.equal(isPermutationOfPalidrome(input), true);
});