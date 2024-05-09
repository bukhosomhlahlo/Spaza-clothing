// Fetch product data from an API or database
fetch('/api/products')
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

  
// slideshow
  const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === n) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// for the slideshow to move down when hovering over the menu

const dropdownMenus = document.querySelectorAll('.dropdown');
const slideshow = document.querySelector('.slideshow');

dropdownMenus.forEach(menu => {
  menu.addEventListener('mouseenter', () => {
    slideshow.classList.add('dropdown-open');
  });

  menu.addEventListener('mouseleave', () => {
    slideshow.classList.remove('dropdown-open');
  });
});