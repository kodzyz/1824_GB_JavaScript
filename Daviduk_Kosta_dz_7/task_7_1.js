/*
1. Реализовать страницу корзины:
a. Добавить возможность не только смотреть состав корзины, но и редактировать его,
обновляя общую стоимость или выводя сообщение «Корзина пуста».
*/



let products = []; // массив для витрины
let card = []; // массив для корзины

let mainEl = document.querySelector('main');

let lastId = 1;

function Product(title, price, img) {
    this.title = title;
    this.price = price;
    this.img = img;
    this.id = lastId++; // уникальное свойство
    this.quantity = 0; // количество товаров в корзине
}

let vacuum_cleaner = new Product('Karcher', 100, 'img/1.jpeg');
let laptop = new Product('Lenovo', 700, 'img/2.jpeg');
let tv = new Product('Horizont', 200, 'img/3.jpeg');

products.push(vacuum_cleaner, laptop, tv);
//console.log(products);

function saveCart() {
    window.localStorage.setItem('task', JSON.stringify(card));
}

saveCart();

function loadCart() {
    card = JSON.parse(window.localStorage.getItem('task')) || [];
}

function drawProductCard(product) { //отрисовываем товар
    // создаем элементы
    let cardEl = document.createElement('DIV');
    let imgEl = document.createElement('IMG');
    let titleEl = document.createElement('P');
    let priceEl = document.createElement('P');
    let btnEl = document.createElement('BUTTON');
    // назначаем класс каждому элементу
    cardEl.classList.add('product-card');
    imgEl.classList.add('product-card__img');
    titleEl.classList.add('product-card__title');
    priceEl.classList.add('product-card__price');
    btnEl.classList.add('product-card__btn');
    // данные
    imgEl.setAttribute('src', product.img);
    titleEl.textContent = product.title;
    priceEl.textContent = product.price + ' $';
    btnEl.textContent = 'Купить';
    // сборка
    cardEl.append(imgEl);
    cardEl.append(titleEl);
    cardEl.append(priceEl);
    cardEl.append(btnEl);
    mainEl.append(cardEl);
}

function drawProduct() {
    for (let product of products) {
        drawProductCard(product);
    }
}

drawProduct();

var button = document.getElementsByTagName("button");
for (let i = 0; i < button.length; i++) {
    button[i].onclick = changeCard;
}

function changeCard(eventObj) {
    let amt = document.createElement('DIV');
    let message = document.createElement('DIV');
    let cartDiv = document.getElementById("cart");
    let eventElement = eventObj.target;
    let title = eventElement.parentElement.children[1];
    console.log(title);
    for (let product of products) {
        if (title.textContent == product.title) {
            switch (product.id) {
                case 1:
                    product.quantity++;
                    cartDiv.textContent = `Добавлен Vacuum_cleaner`;
                    amt.textContent = `Всего ${product.quantity} шт.`;
                    break;
                case 2:
                    product.quantity++;
                    cartDiv.textContent = `Добавлен Laptop`;
                    amt.textContent = `Всего ${product.quantity} шт.`;
                    break;
                case 3:
                    product.quantity++;
                    cartDiv.textContent = `Добавлен TV`;
                    amt.textContent = `Всего ${product.quantity} шт.`;
                    break;
            }

            card.push(product);
            saveCart();
            //loadCart();
            //console.log(card);

            //message.textContent ='';
            cartDiv.appendChild(amt);
            cartDiv.appendChild(message);


            let sum_prices = 0;
            for (let i = 0; i < card.length; i++) {
                sum_prices += card[i].price;
            }

            message.textContent = "В корзине: " + card.length + " товаров на сумму " + sum_prices + " $";
        }
    }
}