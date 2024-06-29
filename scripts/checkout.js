import { cart, removeFromCart} from "../data/cart.js";
import {products} from '../data/products.js';
import {formatCurrency} from '../data/money.js';

let cartSummaryHTML = '';
cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let sameProduct;
    products.forEach((product) => {
        if (product.id === productId){
            sameProduct = product;
        }
    });
    cartSummaryHTML +=`
    
    <div class="check-container js-cart-item-container-${sameProduct.id}">
      <div class="check-1">
  <div class="delivery-date">
     Delivery date: Monday, June 25
  </div>
      <div class="check-image">
       <img src="${sameProduct.image}">
       <div class="check-item-details">
       <div class="product-name">
       ${sameProduct.name}
       </div>
       <div class="check-price">
        $${formatCurrency(sameProduct.priceCents)}
       </div>
       <div class="check-quantity">
         <span>
             Quantity: <span class="quantity-label">${cartItem.quantity}</span>
           </span>
           <span class="update-quantity-link link-primary">
             Update OR
           </span>
           <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${sameProduct.id}">
             Delete
           </span>
       </div>
       </div>
       <div class="delivery-options">
         <div class="delivery-options-title">
           Choose a delivery option:
         </div>
         <div class="delivery-option">
           <input type="radio" checked
             class="delivery-option-input"
             name="-${sameProduct.id}">
           <div>
             <div class="delivery-option-date">
               5 Hours Time
             </div>
             <div class="delivery-option-price">
               FREE Delivery
             </div>
           </div>
         </div>
         <div class="delivery-option">
           <input type="radio"
             class="delivery-option-input"
             name="-${sameProduct.id}">
           <div>
             <div class="delivery-option-date">
               2 Hours Time
             </div>
             <div class="delivery-option-price">
               $4.99 - Delivery
             </div>
           </div>
         </div>
         <div class="delivery-option">
           <input type="radio"
             class="delivery-option-input"
             name="delivery-option-${sameProduct.id}">
           <div>
             <div class="delivery-option-date">
               30 Minutes Time
             </div>
             <div class="delivery-option-price">
               $9.99 - Delivery
             </div>
           </div>
         </div>
       </div>
      </div>
      </div>

     </div>
   
    `
    
});
document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
document.querySelectorAll('.js-delete-link')
.forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();
    // console.log(container);
  });
});
