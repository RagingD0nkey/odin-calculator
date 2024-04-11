let prevNum = 0;
let prevOperation ="";
let result =0;
let opFlag = true; //represents if last button clicked was an operator - initialized at true
let equalFlag = false; //represents if last button clicked was the equal sign

const btns = document.querySelector(".buttons");
const display = document.querySelector(".display"); 


btns.addEventListener("click", (e) => {

    if (e.target.className ==="clearAll"){
        prevNum = 0;
        prevOperation ="";
        result =0;
        opFlag = true;
        equalFlag=false;
        updateDisplay("",true);
    }

    if (e.target.className ==="decimal"){
        if ((display.textContent!=="")&&(Number.isInteger(parseFloat(display.textContent))===true)){
            updateDisplay(".");
        }
    }

    if (e.target.className ==="digit"){
        if  (opFlag===true){
            updateDisplay(e.target.textContent,true)
            opFlag = !opFlag;

            if (equalFlag===true){
                equalFlag=!equalFlag;
            }
        }
        else {
            updateDisplay(e.target.textContent);
        }
    }

    else if (e.target.className ==="operator"){
        if (opFlag===false){
            if (prevOperation===""){
                prevNum=Number(display.textContent);
                prevOperation=e.target.id;
                opFlag=true;
            }
            else {
                result = operate(prevNum,Number(display.textContent),prevOperation);
                display.textContent=result;
                prevNum=result;
                prevOperation=e.target.id;
                opFlag=true;
            }
        }
        else if (equalFlag===true){
            prevNum=Number(display.textContent);
            prevOperation=e.target.id;
            equalFlag=!equalFlag;
        }
    }
    
    else if ((e.target.id ==="equalSign")&&(opFlag===false)&&(prevOperation!=="")){
        result = operate(prevNum,Number(display.textContent),prevOperation);
        display.textContent=result;
        equalFlag=true;
        opFlag=true;
        prevNum="";
        result=0;
        prevOperation="";
    }

})

let add = function(a,b){
    if ((isNaN(a)===false)&&(isNaN(b)===false)){
        return a+b;
    }
}

let subtract = function(a,b){
    if ((isNaN(a)===false)&&(isNaN(b)===false)){
        return a-b;
    }
}

let multiply = function(a,b){
    if ((isNaN(a)===false)&&(isNaN(b)===false)){
        return a*b;
    }
}

let divide = function(a,b){
    if ((isNaN(a)===false)&&(isNaN(b)===false)){
        return a/b;
    }
}

function updateDisplay(newChar, replace = false){
    if (replace===false){
        display.textContent+=newChar;
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