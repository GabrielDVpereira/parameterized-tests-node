const CdbCalculator = require("../src/cbd");
const table = require("./utils/table");

describe("Taxes ", () => {
  test.each(table)("workout taxes %j", (application) => {
    const cdb = new CdbCalculator(
      application.days,
      application.initalValue,
      application.fee,
      application.ir
    );
    expect(Number(cdb.workoutTaxes().toFixed(2))).toBe(application.tax);
  });
});
