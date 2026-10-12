// UI wiring — button click par tax calculate karke result dikhata hai

function showTax() {
    var incomeInput = document.getElementById("income");
    var resultEl = document.getElementById("result");
    var income = Number(incomeInput.value);
    if (isNaN(income) || incomeInput.value.trim() === "") {
        resultEl.textContent = "Please enter a valid income.";
        return;
    }
    var tax = calculateTax(income);
    resultEl.textContent = "Your tax: " + formatCurrency(tax);
}
