let operand1 = "";
let operand2 = "";
let operator = "";


let output = document.querySelector(".output");
let delButton = document.querySelector("#del");
let acButton = document.querySelector("#ac");
let numButtons = document.querySelectorAll("#calc-button-num");
let opButtons = document.querySelectorAll("#calc-button-op");
let calculateButton = document.querySelector("#calc-button-equal");
let dotButton=document.querySelector("#calc-button-dot");



function operate() {
    if (operator == '+') {
        output.textContent = add();
        output.id = "result";
        operand1 = "";
        operand2 = "";
        operator = "";
    }
    else if (operator == '-') {
        output.textContent = substract();
        output.id = "result";
        operand1 = "";
        operand2 = "";
        operator = "";
    }
    else if (operator == 'X') {
        output.textContent = multiply();
        output.id = "result";
        operand1 = "";
        operand2 = "";
        operator = "";
    }
    else if (operator == '/') {
        if (operand2 == 0) {
            output.textContent = "error";
            output.id = "error";
            operand1 = "";
            operand2 = "";
            operator = "";
            return;
        }
        output.textContent = add();
        output.id = "result";
        operand1 = "";
        operand2 = "";
        operator = "";
    }
}

function add() {
    return Number(operand1) + Number(operand2);
}
function substract() {
    return Number(operand1) - Number(operand2);
}
function multiply() {
    return Number(operand1) * Number(operand2);
}
function substract() {
    return Number(operand1) / Number(operand2);
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
            output.textContent = "";
            output.id = "secondop";
        }

    })
})

acButton.addEventListener("click", () => {
    output.textContent = "";
    output.id = "";
});

delButton.addEventListener("click", () => {
    if (output.textContent != "") {
        output.textContent = output.textContent.slice(0, -1);
    }
})

dotButton.addEventListener("click", () => {
    if(output.textContent.includes(".") || output.id=="result" || output.id=="error"){
        return;
    }
    else{
        output.textContent+=".";
    }
})

calculateButton.addEventListener("click", operate);


