document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const productCard = button.closest('.product-card');
            const imgSrc = productCard.querySelector('img').src;
            const name = productCard.querySelector('.product-name').textContent;
            const price = parseFloat(productCard.querySelector('.product-price').textContent.replace('₹', ''));

            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const existingItemIndex = cartItems.findIndex(item => item.name === name);

            if (existingItemIndex > -1) {
                cartItems[existingItemIndex].quantity += 1;
            } else {
                cartItems.push({
                    img: imgSrc,
                    name: name,
                    price: price,
                    quantity: 1
                });
            }

            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert('Item added to cart!');
            // Update the cart display after adding an item
            displayCartItems();
        });
    });
});
