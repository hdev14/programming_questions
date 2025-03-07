import assert from "node:assert";
import test from "node:test";

/**
 * URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
 * has sufficient space at the end to hold the additional characters, and that you are given the "true"
 * length of the string.
 * 
 * EXAMPLE
 * 
 * Input:"Mr John Smith   ", 13
 * Output:"Mr%20John%20Smith"
 */

function URLify(input: string): string {
  let url = input.split("");
  for (let idx = 0; idx < input.length; idx++) {
    if (input[idx] == " ") {
      url[idx] = '%20';
    }
  }

  return url.join("");
}

test("URLify", () => {
  const input = [
    "Chase the sun.",
    "Build with passion.",
    "Embrace the challenge.",
    "Trust the process.",
    "Stay focused.",
    "Keep moving forward.",
    "Dream, then do.",
    "Create with purpose.",
    "Push your limits.",
    "Think, then act.",
  ];
  const expected = [
    "Chase%20the%20sun.",
    "Build%20with%20passion.",
    "Embrace%20the%20challenge.",
    "Trust%20the%20process.",
    "Stay%20focused.",
    "Keep%20moving%20forward.",
    "Dream,%20then%20do.",
    "Create%20with%20purpose.",
    "Push%20your%20limits.",
    "Think,%20then%20act.",
  ]

  for (let idx = 0; idx < input.length; idx++) {
    assert.equal(URLify(input[idx]), expected[idx])
  }
})