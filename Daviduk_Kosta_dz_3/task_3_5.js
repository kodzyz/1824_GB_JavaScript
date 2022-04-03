/*
Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:

x
xx
xxx
xxxx
xxxxx
*/


for (let i = 0; i <= 20; i++){  
    var str = "";  
    for (let j = 0; j <= i; j++) {
        str += "*";
    }
    console.log(str)
}
