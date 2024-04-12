let prevNum = null;
let prevOperation ="";
let currNum = null;
let result =0;

const btns = document.querySelector(".buttons");
const display = document.querySelector(".display"); 


btns.addEventListener("click", (e) => {

    if (e.target.className ==="clearAll"){
        prevNum = null;
        prevOperation ="";
        currNum = null;
        result =0;
        updateDisplay("",true);
    }

    if (e.target.className ==="decimal"){
        if ((display.textContent!=="")&&(Number.isInteger(parseFloat(display.textContent))===true)){
            updateDisplay(".");
        }
        
    }

    if (e.target.className ==="digit"){
        if  ((prevNum===null)&&(prevOperation==="")){

                updateDisplay(e.target.textContent);
                currNum= parseFloat(display.textContent);

        }
        else if ((prevNum!==null)&&(prevOperation!=="")){
            if (currNum===null){ //Start of second operand
                updateDisplay(e.target.textContent,true);
                currNum=parseFloat(display.textContent);
            } else{ //Continue second operand
                updateDisplay(e.target.textContent);
                currNum= parseFloat(display.textContent);
            }
        }
        else if ((prevNum!==null)&&(prevOperation==="")){ //Equal special behavior
            updateDisplay(e.target.textContent,true);
            prevNum=null;
            currNum=parseFloat(display.textContent);
        }
    }

    else if (e.target.className ==="operator"){
        if ((currNum!==null)&&(prevOperation==="")){
            prevNum=currNum;
            prevOperation=e.target.id;
            currNum=null; 
        }
        else if ((currNum!==null)&&(prevOperation!=="")){
            result = operate(prevNum,currNum,prevOperation);
            prevNum=result;
            prevOperation=e.target.id;
            currNum=null;
            updateDisplay(result,true);
        }
    }
    
    else if (e.target.id ==="equalSign"){
        if ((prevNum!==null)&&(currNum!==null)&&(prevOperation!=="")){
            result = operate(prevNum,currNum,prevOperation);
            prevOperation="";
            prevNum=result; //Equal special behavior
            currNum=result; //Equal special behavior
            updateDisplay(result,true);
        }
    }

})


//Mathematical functions
function operate(operandA,operandB,operator){
    switch(operator){
        case "add":
            return add(operandA,operandB);
            break;
        case "subtract":
            return subtract(operandA,operandB);
            break;
        case "multiply":
            return multiply(operandA,operandB);
            break;
        case "divide":
            return divide(operandA,operandB);
            break;
    }
}

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


//Update .display, and replace all characters if it's a new operation
function updateDisplay(newChar, replace = false){
    if (replace===false){
        display.textContent+=newChar;
    }
    else if (replace===true){
        display.textContent=newChar;
    }
}

