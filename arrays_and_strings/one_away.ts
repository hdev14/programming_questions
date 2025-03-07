import assert from "node:assert";
import test from "node:test";

/**
 * One Away: There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to check if they are
 * one edit (or zero edits) away.
 * 
 * EXAMPLE
 * pale, ple -> true
 * pales, pale -> true
 * pale,bale -> true
 * pale,bae -> false
 */

function oneEditReplace(first_word: string, second_word: string): boolean {
  for (let idx = 0, foundTwoDifferences = false; idx < first_word.length; idx++) {
    if (first_word.charCodeAt(idx) !== second_word.charCodeAt(idx)) {
      if (foundTwoDifferences) {
        return false;
      }
      foundTwoDifferences = true;
    }
  }

  return true;
}

function oneEditInsert(first_word: string, second_word: string): boolean {
  for (
    let first_idx = 0, second_idx = 0;
    first_idx < first_word.length && second_idx < second_word.length;
    first_idx++, second_idx++
  ) {
    if (first_word.charCodeAt(first_idx) !== second_word.charCodeAt(second_idx)) {
      if (first_idx !== second_idx) {
        return false;
      }
      second_idx++;
    }
  }
  return true;
}

function oneAwayEdit(first_word: string, second_word: string): boolean {
  if (first_word.length === second_word.length) {
    return oneEditReplace(first_word, second_word);
  }

  if (first_word.length + 1 === second_word.length) {
    return oneEditInsert(first_word, second_word)
  }

  if (first_word.length - 1 === second_word.length) {
    return oneEditInsert(second_word, first_word)
  }

  return false;
}

test("one away", () => {
  assert.ok(oneAwayEdit("pale", "ple"));
  assert.ok(oneAwayEdit("pales", "pale"));
  assert.ok(oneAwayEdit("pale", "bale"));
  assert.ok(!oneAwayEdit("pale", "bae"));
})