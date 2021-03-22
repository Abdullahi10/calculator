let inputDisplay = document.getElementById("display");
let result = 0;
let operation = new Array;
let numbers = new Array;
let checkEqualPressed, printResult = false;
let keys = document.getElementsByClassName('key')

function clear() {
    inputDisplay.value = 0;
    nummers = [];
    operation = [];
    result = 0;
}

function dot() {
    if (inputDisplay.value.includes(".")) {
        return
    } else {
        inputDisplay.type = 'text';
        inputDisplay.value = inputDisplay.value + '.';
        inputDisplay.value = inputDisplay.value;
    }
}

function operator(op) {

    if (op === '=') {

        checkEqualPressed = true;
        numbers[1] = Number.parseFloat(display.value);
        for (let i = 0; i < 1;) {

            if (numbers.length <= 2) {
                result = calculations(Number.parseFloat(numbers[i]), Number.parseFloat(numbers[i + 1]), operation[i]);
                numbers[0] = result;
            } else {

            }
            i++;
        }
        
        printResult = true;
    } else {

        if (checkEqualPressed && result != 0) {
            numbers[0] = Number.parseFloat(result);
            operation.push(op);
        } else {
            numbers[0] = Number.parseFloat(display.value);
            operation.push(op);

        }

        printResult = false;
        return
    };

    numbers[1] = [];
    operation = [];

}

function calculations(a, b, operator) {

    switch (operator) {

        case '+':
            return a + b;

        case '-':
            return a - b;

        case '/':
            return a / b;

        case 'x':
            return a * b;

        default:
            return

    }
}
function btnHandelPress(btn) {

    if (btn.id === "percent") {
        inputDisplay.value = inputDisplay.value * 0.01
    } else if (btn.id === "clear") {
        clear();
    } else if (btn.id === "negate") {
        inputDisplay.value = -inputDisplay.value;
    } else if (!isNaN(btn.innerHTML)) {
        if (inputDisplay.value === '0') {
            inputDisplay.value = btn.innerHTML;
        } else {
            inputDisplay.value = inputDisplay.value + btn.innerHTML;
        }
        
    } else if (btn.id === "dot")  {
     
        dot();
        
    }
     else{
        operator(btn.innerHTML)
        if (printResult) {
        
            inputDisplay.value=result;
        }
        else {
           inputDisplay.value = "";
        }
        
    }
}


for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', () => btnHandelPress(keys[i]))
    
}