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

function operate (num1, operator, num2){
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-'){
        return sub(num1, num2);
    } else if (operator === 'x'){
        return mult(num1, num2); 
    } else if (operator ==='/'){
        return div(num1, num2);
    }else {
        return 'error in operate';
    }
        
    }
let display = document.querySelector('#display');
let button0 = document.querySelector('#button0');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');
let button6 = document.querySelector('#button6');
let button7 = document.querySelector('#button7');
let button8 = document.querySelector('#button8');
let button9 = document.querySelector('#button9');
let equal = document.querySelector('#buttonEqual')
let addition = document.querySelector('#buttonPlus')
let subtraction = document.querySelector('#buttonSub')
let multiply = document.querySelector('#buttonx')
let division = document.querySelector('#buttonDivide');
let clear = document.querySelector('#buttonC');
let displayNum = display.textContent

button1.addEventListener('click', function(){
    displayNum =''
    display.textContent += button1.textContent;
    displayNum += display.textContent;
    return displayNum;
})

button2.addEventListener('click', function(){
    displayNum=''
    display.textContent += button2.textContent;
    displayNum += display.textContent;
    return displayNum;
})

button3.addEventListener('click', function(){
    displayNum= ''
    display.textContent += button3.textContent;
    displayNum += display.textContent;
    return displayNum;
})

button4.addEventListener('click', function(){
    displayNum= ''
    display.textContent += button4.textContent;
    displayNum += display.textContent;
    return displayNum;
})

button5.addEventListener('click', function(){
    displayNum= ''
    display.textContent += button5.textContent;
    displayNum += display.textContent;
    return displayNum;
})

button6.addEventListener('click', function(){
    displayNum= ''
    display.textContent += button6.textContent;
    displayNum += display.textContent;
    return displayNum;
})

button7.addEventListener('click', function(){
    displayNum= ''
    display.textContent += button7.textContent;
    displayNum += display.textContent;
    return displayNum;
})

button8.addEventListener('click', function(){
    displayNum= ''
    display.textContent += button8.textContent;
    displayNum += display.textContent;
    return displayNum;
})

button9.addEventListener('click', function(){
    displayNum= ''
    display.textContent += button9.textContent;
    displayNum += display.textContent;
    return displayNum;
})

button0.addEventListener('click',function(){
    displayNum= ''
    display.textContent += button0.textContent;
    displayNum += display.textContent;
    return displayNum;
})

addition.addEventListener('click',function(){
    displayNum= ''
    display.textContent += addition.textContent;
    displayNum += display.textContent;
    return displayNum;
})

subtraction.addEventListener('click',function(){
    displayNum='';
    display.textContent += subtraction.textContent;
    displayNum += display.textContent;
    return displayNum
})

multiply.addEventListener('click', function(){
    displayNum= ''
    display.textContent += multiply.textContent;
    displayNum += display.textContent;
    return displayNum;
})

division.addEventListener('click', function(){
    displayNum= ''
    display.textContent += division.textContent;
    displayNum += display.textContent;
    return displayNum;
})

equal.addEventListener('click',function(){
    let array = displayNum.split(' ');

    if (displayNum.split(' ') === ['0','/','0']) {
        display.textContent = 'na bro';
    } else if (array.length < 3){
        display.textContent = 'error';
    } else if (array.length === 3){
        let solution = operate(parseInt(array[0]), array[1], parseInt(array[2]))
        display.textContent = solution;
        return solution;
    } else if (array.length === 4){
        display.textContent = 'too many operaters'
    } else if (array.length === 5){
        let solution1 = operate(parseInt(array[0]), array[1], parseInt(array[2]))
        let fSolution = operate(solution1, array[3], parseInt(array[4]))
        display.textContent = fSolution;
        return fSolution;
    } else if (array.length === 6){
        display.textContent = 'Error';
    } else if (array.length === 7){
        let solution1 = operate(parseInt(array[0]), array[1], parseInt(array[2]));
        let solution2 = operate(solution1, array[3], parseInt(array[4]));
        let fSolution = operate(solution2, array[5], parseInt(array[6]));
        display.textContent = fSolution;
        return fSolution;
    } else {
        display.textContent = 'Too many characters'
    } 
})
clear.addEventListener('click', function(){
    display.textContent = '';
    displayNum ='';
})




