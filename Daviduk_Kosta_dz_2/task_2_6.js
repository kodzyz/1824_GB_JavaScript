/*
Реализовать функцию с тремя параметрами: 
function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, 
operation — строка с названием операции. 
В зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) 
и вернуть полученное значение (применить switch).
*/

var add = (a, b) => {
    return a + b;
}
var rob = (a, b) => {
    return a - b;
}
var multi = (a, b) => {
    return a * b;
}
var div = (a, b) => {
    return a / b;
}

function mathOperation(arg1, arg2, operation){
    switch (operation) {
        case '+':
            console.log(add(arg1, arg2)); 
            break;
        case '-':
            console.log(rob(arg1, arg2)); 
            break;
        case '*':
            console.log(multi(arg1, arg2)); 
            break;
        case '/':
            console.log(div(arg1, arg2)); 
            break;
        default:
            console.log('incorrect operation');
    }   
}

mathOperation(6, 2, '/')