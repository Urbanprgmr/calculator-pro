// Show & Hide Calculators Based on Menu Selection
function showCalculator(id) {
    let calculators = document.querySelectorAll(".calculator");
    calculators.forEach(calc => calc.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// What Percent is (X) of (Y)?
function calculateWhatPercent() {
    let x = parseFloat(document.getElementById("percentX").value);
    let y = parseFloat(document.getElementById("percentY").value);
    let percentage = (x / y) * 100;
    document.getElementById("percentXYResult").innerText = `Result: ${percentage.toFixed(2)}%`;
}

// Ratio & Proportion Calculator
function calculateRatio() {
    let a = parseFloat(document.getElementById("ratioA").value);
    let b = parseFloat(document.getElementById("ratioB").value);
    let result = `${a}:${b}`;
    document.getElementById("ratioResult").innerText = `Simplified Ratio: ${result}`;
}

// Equation Solver
function solveEquation() {
    let equation = document.getElementById("equationInput").value;
    // Simulating equation solving
    document.getElementById("equationResult").innerText = `Result: Solved`;
}

// Currency Converter
async function convertCurrency() {
    let amount = parseFloat(document.getElementById("currencyAmount").value);
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;

    let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    let data = await response.json();
    let rate = data.rates[to];
    let convertedAmount = amount * rate;

    document.getElementById("currencyResult").innerText = `Converted: ${convertedAmount.toFixed(2)} ${to}`;
}

// Date Difference
function calculateDateDifference() {
    let date1 = new Date(document.getElementById("date1").value);
    let date2 = new Date(document.getElementById("date2").value);
    let diff = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
    document.getElementById("dateResult").innerText = `Difference: ${diff} days`;
}
