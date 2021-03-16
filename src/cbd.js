class CdbCalculator {
  constructor(n, p, i, d) {
    this.n = n;
    this.p = p;
    this.i = i;
    this.d = d;
  }

  workOutRevenue() {
    const revenue = this.p * (this.i / 100) * (this.n / 365);
    return revenue;
  }

  workoutFinalRevenue() {
    const revenue = this.workOutRevenue();
    const tax = this.workoutTaxes();
    const final = revenue - tax;

    return (final / this.p) * 100;
  }

  workoutTaxes() {
    const revenue = this.workOutRevenue();
    return revenue * (this.d / 100);
  }
}

module.exports = CdbCalculator;
