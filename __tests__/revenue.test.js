const CdbCalculator = require("../src/cbd");
const table = require("./utils/table");

describe("Revenue ", () => {
  test.each(table)("workout revenue %j", (application) => {
    const cdb = new CdbCalculator(
      application.days,
      application.initalValue,
      application.fee,
      application.ir
    );
    expect(Number(cdb.workOutRevenue().toFixed(2))).toBe(application.revenue);
  });
});
