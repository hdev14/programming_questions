import assert from "node:assert";
import test from "node:test";

/**
 * String Compression: Implement a method to perform basic string compression using the counts
 * of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
 * "compressed" string would not become smaller than the original string, your method should return
 * the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 */

function compress(str: string): string {
  let compressed_str = '';

  for (let idx = 0, count = 0; idx < str.length; idx++) {
    const char = str[idx];
    count++;

    if ((idx + 1 >= str.length) || (char !== str[idx + 1])) {
      compressed_str += char + count.toString();
      count = 0; // reset
    }
  }

  return compressed_str.length < str.length ? compressed_str : str;
}

test("string compression", () => {
  assert.equal(compress("aabcccccaaa"), "a2b1c5a3");
});