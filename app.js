// Cart State Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart badge across all pages
const updateCartBadge = () => {
  const badge = document.getElementById('cart-count');
  if (badge) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
    
    // Animation bump
    if (totalItems > 0) {
      badge.classList.add('bump');
      setTimeout(() => badge.classList.remove('bump'), 300);
    }
  }
};

// Save cart to storage
const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartBadge();
};

// Add to Cart function
const addToCart = (productId, quantity = 1) => {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  
  saveCart();
  showToast(`${product.name} added to cart!`);
};

// Toast Notification
const showToast = (message) => {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
  
  container.appendChild(toast);
  
  // Animate in
  setTimeout(() => toast.classList.add('show'), 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

// Render Products Grid
const renderProductsGrid = (productsToRender, containerId) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  productsToRender.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
      <div class="product-img-wrapper">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating">
          <i class="fas fa-star"></i> ${product.rating}
        </div>
        <div class="product-footer">
          <span class="product-price">${formatPrice(product.price)}</span>
          <button class="btn-add-cart" onclick="addToCart('${product.id}')" title="Add to Cart">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
};

// Scroll header effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
});
