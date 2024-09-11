const updateCartSummary = () => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalPrice = 0;
    let totalQuantity = 0;

    cartItems.forEach(item => {
        totalPrice += item.price * item.quantity;
        totalQuantity += item.quantity;
    });

    document.querySelector('.cart-total-price').textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
    document.querySelector('.cart-total-quantity').textContent = `Total Items: ${totalQuantity}`;
};
