let prevNum = 0;
let prevOperation ="";
let result =0;
let flag = true;


const btns = document.querySelector(".buttons");
const display = document.querySelector(".display");


btns.addEventListener("click", (e) => {
    if (e.target.className ==="clearAll"){

    }

    if (e.target.className ==="digit"){
        if  (flag===true){
            display.textContent=e.target.textContent;
            flag = false;
        }
        else {
            display.textContent+=e.target.textContent;
        }
    }

    else if ((e.target.className ==="operator")&&(flag===false)){

        if (prevOperation===""){
            prevNum=Number(display.textContent);
            prevOperation=e.target.id;
            flag=true;
        }
        else {
            result = operate(prevNum,Number(display.textContent),prevOperation);
            display.textContent=result;
            prevNum=result;
            prevOperation=e.target.id;
            flag=true;
        }
    }
    
    else if ((e.target.id ==="equalSign")&&(flag===false)&&(prevOperation!=="")){
        result = operate(prevNum,Number(display.textContent),prevOperation);
        display.textContent=result;
        prevNum="";
        prevOperation="";
        result=0;
        flag=true;
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