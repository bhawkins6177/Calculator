function add (num1, num2) {
    return num1+num2;
}
function sub (num1, num2) {
    return num1-num2;
}
function mult (num1, num2) {
    return num1*num2;
}
function div (num1, num2) {
    return num1/num2;
}

function operate (num1, num2, operator){
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-'){
        return sub(num1, num2);
    } else if (operator === '*'){
        return mult(num1, num2); 
    } else if (operator ==='/'){
        return div(num1, num2);
    }else {
        return 'an error has occured in the operate function';
    }
        
    }

console.log (operate(50,2,'*'))


