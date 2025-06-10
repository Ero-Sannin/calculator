let operand1 = "";
let operand2 = "";
let operator = "";


let output = document.querySelector(".output");
let delButton = document.querySelector("#del");
let acButton = document.querySelector("#ac");
let numButtons = document.querySelectorAll("#calc-button-num");
let opButtons = document.querySelectorAll("#calc-button-op");
let calculateButton = document.querySelector("#calc-button-equal");


function clear() {
    output.textContent = "";
    output.id = "";
}
function operate() {
    if (operator == '+') {
        return operand1 + operand2;
    }
    else if (operator == '-') {
        return operand1 - operand2;
    }
    else if (operator == 'X') {
        return operand1 * operand2;
    }
    else {
        return operand1 / operand2;
    }
}

function add() {
    if (output.id == "") {
        operand1 = output.textContent;
        output.id = "p"
    }
}


numButtons.forEach(element => {
    element.addEventListener("click", (e) => {
        if (output.id == "" || output.id == "result") {
            output.textContent = "";
            output.textContent += e.target.textContent;
            operand1 += e.target.textContent;
            output.id = "firstop";
        }
        else if (output.id == "secondop") {
            output.textContent += e.target.textContent;
            operand2 += e.target.textContent;
        }
        else if (output.id == "firstop") {
            output.textContent += e.target.textContent;
            operand1 += e.target.textContent;
        }
    })
});

opButtons.forEach((element) => {
    element.addEventListener("click", (e) => {
        if (output.id == "firstop") {
            operand1 = output.textContent;
            output.textContent = "";
            operator = e.target.textContent;
            output.id = "secondop";
        }
        else if (output.id == "secondop") {

            if (output.textContent != "") {
                operand2 = output.textContent;
                operate();
                output.id = "secondop";
                operand1 = output.textContent;
                operator = e.target.textContent;
                output.textContent = "";
            }
            else {
                operator = e.target.textContent;
            }


        }
        else if (output.id == "result") {
            operator = e.target.textContent;
            operand1 = output.textContent;
            output.id = "secondop";
        }
        
    })
})

acButton.addEventListener("click", clear);


