var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  var obj = {itemName:item, itemPrice:price};
  
 
  cart.push(obj);
  return item + " has been added to your cart.";

}

function viewCart() {
  if (cart.length ===0) {
    return 'Your shopping cart is empty.'
  }
  let result = 'In your cart, you have ';
  
  for (var i=0; i<cart.length; i++) {
    let element = cart[i];
    if (cart.length ===1) {
      result +=`${element.itemName} at $${element.itemPrice}.`
    }
  else if (i=== cart.length-1) {
      result +=`and ${element.itemName} at $${element.itemPrice}.`
    }
    else {
       result +=`${element.itemName} at $${element.itemPrice}, `
    }
    
  }

  return result;
}

function total() {
  let total = 0;
  total +=
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
