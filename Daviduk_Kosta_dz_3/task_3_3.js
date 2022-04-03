/*
Товары в корзине хранятся в массиве. 
Задачи:
a. Организовать такой массив для хранения товаров в корзине;
b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

let products = [['product1', 50], ['product2', 30], ['product3', 10]];

function countBasketPrice(array) {
    let sum_prices = 0;
    for (let i = 0; i < array.length; i++) {
        sum_prices += array[i][1];
    }
    return sum_prices;
}

console.log(countBasketPrice(products))