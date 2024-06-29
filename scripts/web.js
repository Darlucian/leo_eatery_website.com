import { cart, addToCart } from '../data/cart.js';
import { products} from "../data/products.js";
import {formatCurrency} from '../data/money.js';

let productsHTML = '';
products.forEach((product) => {
	productsHTML += `
	<div class="mid-1">
	<img src="${product.image}">
	<div class="mid-1-0">
	 <p>${product.name}</p>
	 <p>  $${formatCurrency(product.priceCents)}</p>
	 <div class="rating">
	 <div class="product-rating">
		 <img src="ico/rating-${product.rating.stars}.png"></div>
		 <div class="ratings-count">${product.rating.count}</div>
  </div>
	 <div class="product-quantity-container">
		<select>
		  <option selected value="1">1</option>
		  <option value="2">2</option>
		  <option value="3">3</option>
		  <option value="4">4</option>
		  <option value="5">5</option>
		  <option value="6">6</option>
		  <option value="7">7</option>
		  <option value="8">8</option>
		  <option value="9">9</option>
		  <option value="10">10</option>
		</select>
	  </div>
	 <button class="js-add-to-cart" data-product-id="${product.id}">Add To Cart</button>
	</div>
</div>
	`
});
document.querySelector('.mid-sec').innerHTML = productsHTML;

function updateCartQuantity(){
	let cartQuantity = 0;

	cart.forEach((cartitem) => {
		cartQuantity += cartitem.quantity;
	});

	document.querySelector('.js-cart-num')
	.innerHTML = cartQuantity;
}
document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
	button.addEventListener('click', () => {
		const productId = button.dataset.productId;

		addToCart(productId);
		updateCartQuantity();
	});
});