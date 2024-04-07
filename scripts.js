let prevNum = 0;
let prevOperation ="";
let result =0;

const btns = document.querySelector(".buttons");
const display = document.querySelector(".display"); 

display.textContent="0";

btns.addEventListener("click", (e) => {

    if (e.target.className ==="digit"){
        console.log(Number.parseFloat(display.textContent)*10);
        updateDisplay(add(Number.parseFloat(display.textContent)*10,Number.parseInt(e.target.textContent)));
    }

})

let add = function(a,b){
    if ((Number.isInteger(a)===true)&&(Number.isInteger(b)===true)){
        return a+b;
    }
}

let subtract = function(a,b){
    if ((Number.isInteger(a)===true)&&(Number.isInteger(b)===true)){
        return a-b;
    }
}

let multiply = function(a,b){
    if ((Number.isInteger(a)===true)&&(Number.isInteger(b)===true)){
        return a*b;
    }
}

let divide = function(a,b){
    if ((Number.isInteger(a)===true)&&(Number.isInteger(b)===true)){
        return a/b;
    }
}

function updateDisplay(newChar, replace = false){
    if (replace===false){
        if (newChar.toString().length<6){
            display.textContent=newChar;
        }
        else {
            display.textContent=Number.parseFloat(newChar).toExponential(0);
        }
    }
    else if (replace===true){
        display.textContent=newChar;
    }
}

function operate(prevNum,currentNum,operator){
    switch(operator){
        case "add":
            return add(prevNum,currentNum);
            break;
        case "subtract":
            return subtract(prevNum,currentNum);
            break;
        case "multiply":
            return multiply(prevNum,currentNum);
            break;
        case "divide":
            return divide(prevNum,currentNum);
            break;
    }
}