let cart = [];

const cartInfoEl = document.querySelector('#cart');
const showcaseEl = document.querySelector('main');

function loadCart() {
  cart = JSON.parse(window.localStorage.getItem('task')) || [];
}

function getCartInfo() {
  if (cart.length == 0) {
    return 'Корзина пуста';
  }

  return `В корзине ${getCartQuantity()} товаров на сумму ${getCartPrice()}$`;
}

function drawCartInfo() {
  cartInfoEl.textContent = getCartInfo();
}

function getCartQuantity() {
  return cart.length;
}

function getCartPrice() {
  let result = 0;
  for (let i = 0; i < cart.length; i++) {
    result += cart[i].price;
  }

  return result;
}

const cartBlocks = [
  document.querySelector('#list'),
  document.querySelector('#delivery'),
  document.querySelector('#comment'),
];

function blocksBasket() {	  
	let cardP = document.createElement('P');	
	cardP.textContent = `Состав корзины`;
	cartBlocks[0].classList.add('product-card__title');
	cartBlocks[0].append(cardP);
	for (let product of cart) {        
		let cardEl = document.createElement('DIV');
		let imgEl = document.createElement('IMG');
		let titleEl = document.createElement('P');
		let priceEl = document.createElement('P');		
			// назначаем класс каждому элементу
		cardEl.classList.add('product-card');
		imgEl.classList.add('product-card__img');
		titleEl.classList.add('product-card__title');
		priceEl.classList.add('product-card__price');		
			// данные
		imgEl.setAttribute('src', product.img);
		titleEl.textContent = product.title;
		priceEl.textContent = product.price + '$';		
			// сборка
		cardEl.append(imgEl);
		cardEl.append(titleEl);
		cardEl.append(priceEl);		
		cartBlocks[0].append(cardEl);
	}
}

let currentBlock = 0;
let cardP = document.createElement('P');

function nextBlock() {
  cartBlocks[currentBlock % 3].style.display = 'none';
  currentBlock++;
  cartBlocks[currentBlock % 3].style.display = 'flex';

  switch (currentBlock % 3) {
    case 1:	
		
		cardP.textContent = `Адрес доставки`;
		cartBlocks[1].classList.add('product-card__title');	  
		cartBlocks[1].append(cardP);		
      break;   
    case 2:	      
	  
		cardP.textContent = `Комментарий`;
		cartBlocks[2].classList.add('product-card__title');			
		cartBlocks[2].append(cardP);				
      break;
  }
}



document.querySelector('#nextBtn').addEventListener('click', () => {
  nextBlock()
})

loadCart();
drawCartInfo();
blocksBasket();


console.log(cart);