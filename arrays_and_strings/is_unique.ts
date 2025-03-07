import assert from "node:assert";
import test from "node:test";

/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
 * cannot use additional data structures?
 * 
 * Obs.: The characters folow the ASCII table
 */


function isUnique(input: string): boolean {
  if (input.length > 128) {
    return false;
  }

  const existents_codes: boolean[] = new Array(128);

  for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);
    if (existents_codes[code] === true) {
      return false;
    }
    existents_codes[code] = true;
  }

  return true;
}

test("is unique", () => {
  const failure = [
    "Apple",
    "Letter",
    "Banana",
    "Success",
    "Parallel",
    "Book",
    "Happy",
    "Coffee",
    "Bubble",
    "Grammar",
  ]
  const success = [
    "Grasp",
    "Jumpy",
    "Brick",
    "Flow",
    "Scant",
    "Chord",
    "Mirth",
    "Plumb",
    "Drove",
    "Faint",
    "Vexing",
    "Quads",
    "Lynch",
    "Brows",
    "Hazy",
  ];

  for (let idx = 0; idx < failure.length; idx++) {
    const word = failure[idx];
    assert.equal(isUnique(word), false, `${word} is not unique`);
  }

  for (let idx = 0; idx < success.length; idx++) {
    const word = success[idx];
    assert.equal(isUnique(word), true, `${word} is unique`);
  }
});

