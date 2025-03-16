// Percentage Calculator
function calculatePercentage() {
    let percentage = parseFloat(document.getElementById("percentValue").value);
    let total = parseFloat(document.getElementById("percentTotal").value);
    if (!isNaN(percentage) && !isNaN(total)) {
        let result = (percentage / 100) * total;
        document.getElementById("percentResult").innerText = `Result: ${result}`;
    } else {
        document.getElementById("percentResult").innerText = "Please enter valid numbers";
    }
}

// Ratio & Proportion Calculator
function calculateRatio() {
    let a = parseFloat(document.getElementById("ratioA").value);
    let b = parseFloat(document.getElementById("ratioB").value);
    let x = parseFloat(document.getElementById("ratioX").value);

    if (!isNaN(a) && !isNaN(b)) {
        if (!isNaN(x)) {
            let y = (b * x) / a;
            document.getElementById("ratioResult").innerText = `Result: ${a}:${b} = ${x}:${y}`;
        } else {
            let gcd = function (a, b) {
                return b == 0 ? a : gcd(b, a % b);
            };
            let divisor = gcd(a, b);
            document.getElementById("ratioResult").innerText = `Simplified Ratio: ${a / divisor}:${b / divisor}`;
        }
    } else {
        document.getElementById("ratioResult").innerText = "Please enter valid numbers";
    }
}

// Equation Solver
function solveEquation() {
    let equation = document.getElementById("equationInput").value;
    try {
        let formattedEquation = equation.replace(/x/g, "*x").replace(/=/g, "-(") + ")";
        let x = algebra.parse(formattedEquation).solveFor("x");
        document.getElementById("equationResult").innerText = `x = ${x}`;
    } catch (error) {
        document.getElementById("equationResult").innerText = "Invalid equation";
    }
}
