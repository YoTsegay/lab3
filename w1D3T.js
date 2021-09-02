//basic example of using mocha (test code in same file)
// "use strict";
// const assert = require("assert");
("use strict");
const assert = require("assert");
function balanceOfASavingsAccount(initialAmount, interestrate, years) {
  for (let i = 1; i <= years; i++) {
    initialAmount = initialAmount + ((initialAmount * interestrate) / 100) * i;
  }
  return initialAmount;
}
describe("compute return sbalanceOfASavingsAccount", function () {
  it("100,10,1 balanceOfASavingsAccount", function () {
    assert.strictEqual(balanceOfASavingsAccount(100, 10, 1), 110);
  });
  it("10000, 5, 10 balanceOfASavingsAccount", function () {
    assert.strictEqual(balanceOfASavingsAccount(10000, 5, 10), 106472.02190625);
  });
});
