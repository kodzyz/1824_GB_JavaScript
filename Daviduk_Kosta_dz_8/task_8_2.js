/*
2. Не выполняя код, ответить, что выведет браузер и почему:
*/

//a.
if (!("a" in window)) {
    var a = 1;
}
console.log(a); // undefined

//ответ1:
var a = 1;
console.log("a" in window); // true
//ответ2:
if ("a" in window) {
    var a = 1;
}
console.log(a); // 1


//b. в методичке явно не дописали задание (?!)
var a = 1,
    b = function a(x) {
        x && a(--x);
    };
console.log(a); // 1
//ответ: переменная 'a' не становится функцией в глобальном лексическом окружении
console.log(typeof a); // number   
console.log(typeof b); // function 


//c.
function a(x) {
    return x * 2;
}
var a;
console.log(a);
/*

ƒ a(x) {
    return x * 2;
}

*/
//ответ: функция инициализируются раньше в окружении и переопределяет инициализацию переменной 
console.log(typeof a); // function


//d.
function b(x, y, a) {
    arguments[2] = 10;
    console.log(a);
}
b(1, 2, 3); // 10
//ответ: Объект arguments — это подобный массиву объект, который содержит аргументы, переданные в функцию.
function func1(a, b, c) {
    console.log(arguments[0]); //  1  
    console.log(arguments[1]); //  2  
    console.log(arguments[2]); //  3
}
func1(1, 2, 3);


//e. *
function a() {
    console.log(this);
}
a.call(null); // window (без 'use strict')

//ответ: Вызов a.call(null) запустит функцию, установив this = null || undefined = window
function a() {
    'use strict'
    console.log(this); // null -> по новому стандарту
}
a.call(null);