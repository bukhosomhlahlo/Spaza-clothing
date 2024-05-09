// Fetch product details based on the product ID
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch(`/api/products/${productId}`)
  .then(response => response.json())
  .then(product => {
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `$${product.price}`;

    // Populate size and color options based on the product data
    // ...
  })
  .catch(error => console.error('Error fetching product details:', error));