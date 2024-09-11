document.addEventListener('DOMContentLoaded', () => {
    const cartItemsHTML = document.querySelector('.cart-items');

    const displayCartItems = () => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItemsHTML.innerHTML = '';

        cartItems.forEach((item, index) => {
            const cartItemHTML = `
                <div class="cart-item">
                    <img src="${item.img}" alt="Item Image">
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p>Price: ₹${item.price}</p>
                        <label for="quantity-${index}">Quantity:</label>
                        <input type="number" id="quantity-${index}" name="quantity" value="${item.quantity}" min="1">
                    </div>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            `;
            cartItemsHTML.insertAdjacentHTML('beforeend', cartItemHTML);
        });

        document.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', removeItem);
        });

        document.querySelectorAll('input[name="quantity"]').forEach(input => {
            input.addEventListener('change', updateQuantity);
        });

        updateCartSummary();
    };

    const removeItem = (e) => {
        const index = e.target.getAttribute('data-index');
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        displayCartItems();
    };

    const updateQuantity = (e) => {
        const index = e.target.id.split('-')[1];
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems[index].quantity = parseInt(e.target.value, 10);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartSummary();  
    };

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

    displayCartItems();
});
