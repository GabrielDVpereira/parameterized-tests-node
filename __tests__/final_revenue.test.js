const CdbCalculator = require("../src/cbd");
const table = require("./utils/table");

describe("Final Revenue ", () => {
  test.each(table)("workout final revenue %j", (application) => {
    const cdb = new CdbCalculator(
      application.days,
      application.initalValue,
      application.fee,
      application.ir
    );
    expect(Number(cdb.workoutFinalRevenue().toFixed(4))).toBe(
      application.final_revenue
    );
  });
});
