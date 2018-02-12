var cart = document.querySelector('.cart');

if (cart) {
  var cartForm = cart.querySelector('form');

  var removeCartItem = function (cartItem) {
    var quantityInput = cartItem.querySelector('input[id$=_qty]');
    
    quantityInput.value = 0;
    
    cartForm.submit();
  };

  var incrementCartItem = function (cartItem) {
    var quantityInput = cartItem.querySelector('input[id$=_qty]');
    
    quantityInput.value = parseInt(quantityInput.value) + 1;
    
    cartForm.submit();
  };

  var decrementCartItem = function (cartItem) {
    var quantityInput = cartItem.querySelector('input[id$=_qty]');
    
    quantityInput.value = parseInt(quantityInput.value) - 1;
    
    cartForm.submit();
  };

  cart.addEventListener('click', function (event) {
    event.preventDefault()

    var cartItemRemoveLink = event.target.closest('.cart-item__remove');
    var cartItemIncrementLink = event.target.closest('.cart-item__add-control');
    var cartItemDecrementLink = event.target.closest('.cart-item__remove-control');

    if (cartItemRemoveLink) {
      removeCartItem(cartItemRemoveLink.closest('.cart-item'));
    }

    if (cartItemIncrementLink) {
      incrementCartItem(cartItemIncrementLink.closest('.cart-item'));
    }

    if (cartItemDecrementLink) {
      decrementCartItem(cartItemDecrementLink.closest('.cart-item'));
    }
  });
}
