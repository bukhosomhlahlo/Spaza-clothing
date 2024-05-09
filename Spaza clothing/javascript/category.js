// Fetch product data based on the category (e.g., men's clothing)
fetch('/api/products/category/men')
  .then(response => response.json())
  .then(data => {
    const productGrid = document.querySelector('.product-grid');

    // Generate product cards dynamically
    data.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-details">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p class="price">$${product.price}</p>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      `;

      productGrid.appendChild(productCard);
    });
  })
  .catch(error => console.error('Error fetching products:', error));