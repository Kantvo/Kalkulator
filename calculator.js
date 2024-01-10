document.addEventListener("DOMContentLoaded", function () {
    const calculatorContainer = document.getElementById("calculator-container");
    const display = document.getElementById("display");
    const buttonsContainer = document.querySelector(".buttons-container");

    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+", "C"
    ];

    buttons.forEach(buttonValue => {
        const button = document.createElement("button");
        button.classList.add("button");
        button.textContent = buttonValue;
        button.addEventListener("click", () => handleButtonClick(buttonValue));
        buttonsContainer.appendChild(button);
    });

    function handleButtonClick(value) {
        if (value === "=") {
            calculateResult();
        } else if (value === "C") {
            clearDisplay();
        } else {
            appendToDisplay(value);
        }
    }

    function appendToDisplay(value) {
        display.textContent += value;
    }

    function calculateResult() {
        try {
            const result = eval(display.textContent);
            display.textContent = String(result);
        } catch (error) {
            display.textContent = "Error";
        }
    }

    function clearDisplay() {
        display.textContent = "";
    }
});