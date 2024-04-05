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
        display.textContent="";
    }

    if (e.target.className ==="digit"){
        if  (opFlag===true){
            display.textContent=e.target.textContent;
            opFlag = !opFlag;

            if (equalFlag===true){
                equalFlag=!equalFlag;
            }
        }
        else {
            display.textContent+=e.target.textContent;
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