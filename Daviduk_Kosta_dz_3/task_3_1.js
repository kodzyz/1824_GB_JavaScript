/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100 */

let i = 2;
let j;
mass = [];
while (i < 100) {
    mass.push(i);
    j = 2;
    while (j < i) {   
        if  (i == 2) {
            break
        }
        if (i % j == 0) {
            mass.pop();
            break                       
        }
        j++;
    }     
    i++
}

console.log('prime less hundred:', mass.join());
// prime less hundred: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97