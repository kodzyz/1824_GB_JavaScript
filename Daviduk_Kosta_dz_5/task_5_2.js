/* 
2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в
HTML-структуре. Там должен быть только div, в который будет вставляться корзина,
сгенерированная на базе JS:
a. Пустая корзина должна выводить строку «Корзина пуста»;
b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
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


let basket = []; // «Корзина пуста»
basket.push(vacuum_cleaner, laptop, tv); //закомментировать//«В корзине: n товаров на сумму m рублей»


function countBasketPrice (array){

    let board = document.querySelector('.board');

    let message = document.createElement("h1");
    board.appendChild(message);
    if (array.length == 0) {
        message.textContent = "Корзина пуста";
        return
    }   

    let sum_prices = 0;

    for (let i = 0; i < array.length; i++) {        
        sum_prices += array[i].price;
    }

    message.textContent = "В корзине: " + array.length + " товаров на сумму " + sum_prices + " рублей";
}


countBasketPrice(basket);