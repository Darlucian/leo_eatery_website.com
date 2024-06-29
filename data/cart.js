export let cart =
JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart =
  [{
    productId: 'e1',
    quantity: 2,
    }, {
      productId: 'e2',
    quantity: 1,
    }];
    
}


function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
    let matchingItem;

    
    cart.forEach((cartitem) => {
        if (productId === cartitem.productId) {
          matchingItem = cartitem;
        }
      });
    
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1
        });
      }
    saveToStorage();
    };

    
 export function removeFromCart(productId) {
  const freshCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId){
      freshCart.push(cartItem);
    }
  });
  cart = freshCart;
  saveToStorage();
 };