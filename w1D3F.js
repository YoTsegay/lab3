//basic example of using mocha (test code in same file)
"use strict";
const assert = require("assert");
function computeSalesCommission(salaried, salesAmount) {
  let value = 0;
  if (salaried == true) {
    if (salesAmount < 300) {
      value = 0;
      return value;
    } else if (salesAmount >= 300 && salesAmount < 500) {
      value = (salesAmount * 1) / 100;
    } else {
      value = (salesAmount * 2) / 100;
    }
  } else if (salesAmount >= 300 && salesAmount < 500) {
    value = (salesAmount * 2) / 100;
    return value;
  } else if (salesAmount >= 500) {
    value = (3 / 100) * salesAmount;
  }

  return value;
}
describe("compute returns vlue if argument is computeSalesCommission", function () {
  it("true 200 ", function () {
    assert.strictEqual(computeSalesCommission(true, 200), 0);
  });
  it(" 300 compute", function () {
    assert.strictEqual(computeSalesCommission(true, 300), 3);
  });
});
