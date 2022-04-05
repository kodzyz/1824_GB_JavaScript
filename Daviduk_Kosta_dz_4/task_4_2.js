/* 
2. Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу
 */

function Product(name, producer, discount=0, price=0, in_stock=false, order=false) {
    this.name = name;
    this.producer = producer;
    this.discount = discount;
    this.in_stock = in_stock;    
    this.price = price
}

vacuum_cleaner = new Product('WD 3','Karcher', 5, 1999, true, true);
laptop = new Product('IdeaPad 3 15ALC6', 'Lenovo', 10, 351, true, true);
tv = new Product('32LE7011D', 'Horizont', 5, 565, true, true);

let basket = [];

basket.push(vacuum_cleaner, laptop, tv);

function countBasketPrice (array){
    let sum_prices = 0;
    for (let i = 0; i < array.length; i++) {
        //console.log(array[i].price);
        sum_prices += array[i].price;
    }
    return sum_prices;
}

console.log(countBasketPrice(basket));