// Fetch cart items from the user's cart or local storage
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Calculate cart summary
const calculateCartSummary = () => {
  let subtotal = 0;
  let shipping = 0;
  let total = 0;

  cartItems.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  shipping = subtotal > 50 ? 0 : 5.99; // Free shipping for orders over $50
  total = subtotal + shipping;

  document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cart-shipping').textContent = `$${shipping.toFixed(2)}`;
  document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
};

// Generate cart items
const cartItemsContainer = document.querySelector('.cart-items');

cartItems.forEach(item => {
  const cartItemElement = document.createElement('div');
  cartItemElement.classList.add('cart-item');

  cartItemElement.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div class="item-details">
      <h3>${item.name}</h3>
      <p>Price: $${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
      <button class="remove-item">Remove</button>
    </div>
  `;

  cartItemsContainer.appendChild(cartItemElement);
});

calculateCartSummary();