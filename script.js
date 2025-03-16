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
    }
}

// What Percent is (X) of (Y)?
function calculateWhatPercent() {
    let x = parseFloat(document.getElementById("percentX").value);
    let y = parseFloat(document.getElementById("percentY").value);
    if (!isNaN(x) && !isNaN(y) && y !== 0) {
        let percentage = (x / y) * 100;
        document.getElementById("percentXYResult").innerText = `Result: ${percentage.toFixed(2)}%`;
    }
}

// What is (X) which percent of (Y)?
function calculateWhichPercent() {
    let x = parseFloat(document.getElementById("whichPercentX").value);
    let y = parseFloat(document.getElementById("whichPercentY").value);
    if (!isNaN(x) && !isNaN(y) && y !== 0) {
        let percentValue = (x / y) * 100;
        document.getElementById("whichPercentResult").innerText = `Result: ${x} is ${percentValue.toFixed(2)}% of ${y}`;
    }
}

// Mass, Length, Speed Converters
function convertMass() {
    let conversionRates = { "kg": 1, "g": 1000, "lb": 2.20462, "oz": 35.274 };
    let value = parseFloat(document.getElementById("massValue").value);
    let result = (value / conversionRates[massFrom.value]) * conversionRates[massTo.value];
    document.getElementById("massResult").innerText = `Result: ${result.toFixed(2)} ${massTo.value}`;
}

function convertLength() {
    let value = parseFloat(document.getElementById("lengthValue").value);
    let from = document.getElementById("lengthFrom").value;
    let to = document.getElementById("lengthTo").value;
    
    let conversionRates = {
        "m": 1, "cm": 100, "mm": 1000, "km": 0.001, 
        "mi": 0.000621371, "ft": 3.28084, "in": 39.3701
    };

    if (!isNaN(value)) {
        let result = (value / conversionRates[from]) * conversionRates[to];
        document.getElementById("lengthResult").innerText = `Result: ${result.toFixed(2)} ${to}`;
    } else {
        document.getElementById("lengthResult").innerText = "Please enter a valid number";
    }
}

function convertSpeed() {
    let conversionRates = { "kmh": 1, "mph": 0.621371, "mps": 0.277778 };
    let value = parseFloat(document.getElementById("speedValue").value);
    let result = (value / conversionRates[speedFrom.value]) * conversionRates[speedTo.value];
    document.getElementById("speedResult").innerText = `Result: ${result.toFixed(2)} ${speedTo.value}`;
}
