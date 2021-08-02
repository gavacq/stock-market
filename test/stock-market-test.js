const {expect} = require("chai");
const maxProfit = require("../stock-market");

describe("#maxProfit", () => {
  it("returns max profit for a sequence where first time min index < max index", () => {
    expect(maxProfit([24, 11, 40, 12, 45, 44])).to.equal(34);
  });
  it("returns -1 if the prices do not change", () => {
    expect(maxProfit([38, 38, 38, 38, 38, 38, 38])).to.equal(-1);
  });
  it("returns -1 if the prices always decrease", () => {
    expect(maxProfit([45, 43, 42, 41, 40, 39, 38])).to.equal(-1);
  });
  it("returns maximum profit for a sequence that contains multiple profitable sales", () => {
    expect(maxProfit([45, 24, 35, 31, 40, 38, 11])).to.equal(16);
  });
  it("returns max profit when max profit lies between first max and min values", () => {
    expect(maxProfit([35, 45, 12, 44, 11, 33, 40])).to.equal(32);
  });
  it("returns -1 for an empty array", () => {
    expect(maxProfit([])).to.equal(-1);
  });
});

// 35, 45
// 12, 44
// 11, 33, 40
