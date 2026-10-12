// Tax calculation logic (Pakistan-style progressive brackets)

function calculateTax(income) {
    income = Number(income);
    if (isNaN(income) || income < 0) return 0;
    if (income <= 600000) return 0;
    if (income <= 1200000) return (income - 600000) * 0.025;
    if (income <= 2400000) return 15000 + (income - 1200000) * 0.125;
    return 165000 + (income - 2400000) * 0.20;
}

function formatCurrency(amount) {
    return "PKR " + Number(amount).toFixed(2);
}

// Node (Jasmine tests) ke liye export — browser mein ignore hota hai
if (typeof module !== "undefined" && module.exports) {
    module.exports = { calculateTax, formatCurrency };
}
