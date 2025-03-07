import assert from "node:assert";
import test from "node:test";

/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
 */

function sortWord(word: string): string {
  return word
    .toLowerCase()
    .split("")
    .sort((a, b) => {
      if (a.charCodeAt(0) < b.charCodeAt(0)) {
        return -1;
      }

      if (a.charCodeAt(0) > b.charCodeAt(0)) {
        return 1;
      }

      return 0;
    }).join("");
}

function checkPermutation(first_word: string, second_word: string): boolean {
  if (first_word.length !== second_word.length) {
    return false;
  }

  return sortWord(first_word) === sortWord(second_word);
}

test("check permutations", () => {
  const words_with_permutations = {
    "Stop": ["Spot", "Post", "Pots", "Tops", "Opts"],
    "Care": ["Race", "Acre", "Earc"],
    "Listen": ["Silent", "Enlist", "Inlets", "Tinsel"],
    "Earth": ["Heart", "Hater"],
    "Stressed": ["Desserts"],
    "Evil": ["Vile", "Live", "Veil"],
    "Act": ["Cat", "Tac"],
    "God": ["Dog"],
    "Flow": ["Wolf"],
    "Drawer": ["Reward", "Warder"],
  };

  const keys = Object.keys(words_with_permutations);

  for (let idx = 0; idx < keys.length; idx++) {
    const word = keys[idx];
    const words = words_with_permutations[word];
    for (let h = 0; h < words.length; h++) {
      assert.equal(checkPermutation(word, words[h]), true);
    }
  }
})