/*
Реализовать четыре основные арифметические операции в виде функций с двумя
параметрами. Обязательно использовать оператор return.
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

console.log(add(6, 2)); // 8
console.log(rob(6, 2)); // 4
console.log(multi(6, 2)); // 12
console.log(div(6, 2)); // 3