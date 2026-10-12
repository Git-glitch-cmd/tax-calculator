const { calculateTax, formatCurrency } = require("../taxCalculator");

describe("Tax Calculator", function() {

    it("should return 0 tax for income up to 600,000", function() {
        expect(calculateTax(500000)).toBe(0);
    });

    it("should calculate 2.5% tax on income between 600,001 and 1,200,000", function() {
        expect(calculateTax(1000000)).toBe(10000);
    });

    it("should calculate tax for income between 1,200,001 and 2,400,000", function() {
        expect(calculateTax(2000000)).toBe(115000);
    });

    it("should calculate tax for income above 2,400,000", function() {
        expect(calculateTax(3000000)).toBe(285000);
    });

    it("should return 0 for negative or invalid income", function() {
        expect(calculateTax(-5000)).toBe(0);
        expect(calculateTax("abc")).toBe(0);
    });

    it("should format currency with PKR prefix and 2 decimals", function() {
        expect(formatCurrency(15000)).toBe("PKR 15000.00");
    });

    it("should format zero amount correctly", function() {
        expect(formatCurrency(0)).toBe("PKR 0.00");
    });
});

