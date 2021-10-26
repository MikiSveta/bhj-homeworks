const addAmount = document.querySelectorAll('.product__quantity-control_inc');
const reduceAmount = document.querySelectorAll('.product__quantity-control_dec');
const quantity = document.querySelectorAll('.product__quantity-value');
const cart = document.querySelector('.cart__products');

for (let i = 0; i < addAmount.length; i++) {

	addAmount[i].addEventListener('click', () => {
		quantity[i].innerText = Number(quantity[i].textContent) + 1;
	})

	reduceAmount[i].addEventListener('click', () => {
		min = 1;

		if (Number(quantity[i].textContent) === min) {
			quantity[i].innerText = min;
		} else {
			quantity[i].innerText = Number(quantity[i].textContent) - 1;
		}
		
	})
}

Array.from(document.querySelectorAll('.product__add')).forEach(item => {

    const product = item.closest('.product');

    item.addEventListener('click', () => {
        let found = Array.from(cart.querySelectorAll('.cart__product')).find(elem => elem.dataset.id === product.dataset.id)
        
        if (found) {
            const add = +product.querySelector('.product__quantity-value').innerHTML;
            let cartQuantity = +found.querySelector('.cart__product-count').innerHTML;
            cartQuantity = cartQuantity + add;
            found.querySelector('.cart__product-count').innerHTML = cartQuantity;
        } else {
            cart.insertAdjacentHTML('beforeEnd',
            `<div class="cart__product" data-id="${product.getAttribute('data-id')}">
                <img class="cart__product-image" src="${product.querySelector('.product__image').getAttribute('src')}">
                <div class="cart__product-count">${product.querySelector('.product__quantity-value').innerHTML}</div>
            </div>`
            )
        }
    })
})