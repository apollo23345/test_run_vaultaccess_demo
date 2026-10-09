

document.body.innerHTML = "";
const styleElement = document.createElement("style");
styleElement.textContent = `
    body { background: #f4f6f9; font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
    .card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); text-align: center; max-width: 400px; }
    button { background: #0070f3; color: white; border: none; padding: 12px 24px; font-size: 16px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
    button:hover { background: #0051b3; }
`;
document.head.appendChild(styleElement);


// Build UI
const card = document.createElement("div");
card.className = "card";
card.innerHTML = `
    <h2>1. MDAS Calculator</h2>
    <p>Computes Addition, Subtraction, Multiplication, Division, and Modulus for two numbers.</p>
    <button id="runBtn">Run Program</button>
`;
document.body.appendChild(card);


// Program Logic
document.getElementById("runBtn").onclick = function() {
    let num1 = parseFloat(prompt("MDAS Calculator\nEnter the first number:"));
    let num2 = parseFloat(prompt("MDAS Calculator\nEnter the second number:"));


    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Please enter valid numerical values.");
        console.log("Error: Invalid numerical input.");
        return;
    }


    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num2 !== 0 ? (num1 / num2) : "Undefined (Cannot divide by zero)";
    let modulus = num2 !== 0 ? (num1 % num2) : "Undefined";


    let resultMessage = `Results for ${num1} and ${num2}:\n` +
                        `Addition (+): ${sum}\n` +
                        `Subtraction (-): ${difference}\n` +
                        `Multiplication (x): ${product}\n` +
                        `Division (/): ${quotient}\n` +
                        `Modulus (%): ${modulus}`;


    console.log(resultMessage);
    alert(resultMessage);
};
