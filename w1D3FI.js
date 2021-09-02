//basic example of using mocha (test code in same file)
"use strict";
const assert = require("assert");
function sumDigitsandmult(num) {
  let sum = 0;
  let mut = 1;
  while (true) {
    let x = num % 10;
    sum = x + sum;
    mut = mut * x;
    num = Math.floor(num / 10);
    if (num < 10) {
      break;
    }
  }
  sum = num + sum;
  mut = mut * num;
  return sum + " & " + mut;
}
describe("return sum and product of the number", function () {
  it("37 number", function () {
    assert.strictEqual(sumDigitsandmult(37), 10 + " & " + 21);
  });
  it(" 77  number", function () {
    assert.strictEqual(sumDigitsandmult(71), 8 + " & " + 7);
  });
});
