// Show & Hide Calculators Based on Menu Selection
function showCalculator(id) {
    let calculators = document.querySelectorAll(".calculator");
    calculators.forEach(calc => calc.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// Simple Percentage Calculator
function calculateSimplePercentage() {
    let value = parseFloat(document.getElementById("simpleValue").value);
    let percent = parseFloat(document.getElementById("simplePercent").value);
    if (!isNaN(value) && !isNaN(percent)) {
        let result = (percent / 100) * value;
        document.getElementById("simplePercentageResult").innerText = `Result: ${result}`;
    } else {
        document.getElementById("simplePercentageResult").innerText = "Please enter valid numbers";
    }
}

// What Percent is (X) of (Y)?
function calculateWhatPercent() {
    let x = parseFloat(document.getElementById("percentX").value);
    let y = parseFloat(document.getElementById("percentY").value);
    if (!isNaN(x) && !isNaN(y) && y !== 0) {
        let percentage = (x / y) * 100;
        document.getElementById("percentXYResult").innerText = `Result: ${percentage.toFixed(2)}%`;
    } else {
        document.getElementById("percentXYResult").innerText = "Please enter valid numbers";
    }
}

// What is (X) which percent of (Y)?
function calculateWhichPercent() {
    let x = parseFloat(document.getElementById("whichPercentX").value);
    let y = parseFloat(document.getElementById("whichPercentY").value);
    if (!isNaN(x) && !isNaN(y) && y !== 0) {
        let percentValue = (x / y) * 100;
        document.getElementById("whichPercentResult").innerText = `Result: ${x} is ${percentValue.toFixed(2)}% of ${y}`;
    } else {
        document.getElementById("whichPercentResult").innerText = "Please enter valid numbers";
    }
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
    document.getElementById("equationResult").innerText = `Result: Solved`;
}

// Currency Converter (Mock API Call)
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
