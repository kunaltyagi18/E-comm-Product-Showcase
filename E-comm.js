// ====================== Product Data ======================
const products = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 199.99,
    category: 'Electronics',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    specs: ['Bluetooth 5.0 connectivity', 'Active noise cancellation', '30-hour battery life', 'Foldable design with carrying case']
  },
  {
    id: 2,
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    category: 'Clothing',
    description: 'Comfortable and sustainable organic cotton t-shirt made from 100% certified organic materials.',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    specs: ['100% organic cotton', 'Breathable fabric', 'Machine washable', 'Available in multiple colors']
  },
  {
    id: 3,
    name: 'Smart Fitness Watch',
    price: 299.99,
    category: 'Electronics',
    description: 'Advanced fitness tracker with comprehensive health monitoring, built-in GPS, and waterproof design.',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    specs: ['Heart rate monitoring', 'Built-in GPS', 'Water resistant up to 50m', '7-day battery life']
  },
  {
    id: 4,
    name: 'Handcrafted Leather Wallet',
    price: 79.99,
    category: 'Accessories',
    description: 'Premium genuine leather wallet handcrafted by skilled artisans.',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    specs: ['Genuine leather', 'Multiple card slots', 'RFID protection', 'Compact design']
  },
  {
    id: 5,
    name: 'Ceramic Coffee Mug Set',
    price: 39.99,
    category: 'Home & Kitchen',
    description: 'Beautiful set of 4 ceramic coffee mugs with elegant minimalist design.',
    image: 'https://images.pexels.com/photos/16576782/pexels-photo-16576782.jpeg',
    specs: ['Set of 4 mugs', 'Microwave safe', 'Dishwasher safe', 'Lead-free ceramic']
  },
  {
    id: 6,
    name: 'Wireless Phone Charger',
    price: 34.99,
    category: 'Electronics',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=500',
    specs: ['Fast charging support', 'Qi-compatible', 'LED indicator', 'Compact design']
  },
  {
    id: 7,
    name: 'Classic Denim Jacket',
    price: 89.99,
    category: 'Clothing',
    description: 'Timeless denim jacket with modern fit and contemporary styling.',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    specs: ['Premium denim fabric', 'Classic button closure', 'Multiple pockets', 'Machine washable']
  },
  {
    id: 8,
    name: 'Essential Oil Diffuser',
    price: 49.99,
    category: 'Home & Kitchen',
    description: 'Ultrasonic aromatherapy diffuser with 7 LED color options and programmable timer.',
    image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=500',
    specs: ['Ultrasonic technology', '7 LED colors', 'Programmable timer', 'Quiet operation']
  },
  {
    id: 9,
    name: 'Stainless Steel Water Bottle',
    price: 24.99,
    category: 'Accessories',
    description: 'Double-walled vacuum insulated water bottle keeps drinks cold for 24h or hot for 12h.',
    image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=500',
    specs: ['Double-wall insulation', '24h cold / 12h hot', 'BPA-free', 'Leak-proof lid']
  },
  {
    id: 10,
    name: 'Bluetooth Speaker',
    price: 79.99,
    category: 'Electronics',
    description: 'Portable Bluetooth speaker with 360-degree sound and waterproof design.',
    image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=500',
    specs: ['360-degree sound', 'Waterproof IPX7', '12-hour battery', 'Portable design']
  },
  {
    id: 11,
    name: 'Gaming Mechanical Keyboard',
    price: 149.99,
    category: 'Electronics',
    description: 'RGB backlit mechanical keyboard with tactile switches and programmable keys.',
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg?auto=compress&cs=tinysrgb&w=500',
    specs: ['Mechanical switches', 'RGB backlighting', 'Programmable keys', 'Anti-ghosting']
  },
  {
    id: 12,
    name: 'Vintage Leather Boots',
    price: 159.99,
    category: 'Clothing',
    description: 'Handcrafted vintage-style leather boots with premium materials and classic design.',
    image: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=500',
    specs: ['Genuine leather', 'Durable rubber sole', 'Classic design', 'Comfortable fit']
  },
  {
    id: 13,
    name: 'Smart Home Security Camera',
    price: 129.99,
    category: 'Electronics',
    description: 'WiFi-enabled security camera with night vision, motion detection, and mobile app control.',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=500',
    specs: ['1080p HD video', 'Night vision', 'Motion detection', 'Mobile app control']
  },
  {
    id: 15,
    name: 'Bamboo Kitchen Utensil Set',
    price: 32.99,
    category: 'Home & Kitchen',
    description: 'Eco-friendly bamboo kitchen utensil set with 6 essential cooking tools.',
    image: 'https://images.pexels.com/photos/866287/pexels-photo-866287.jpeg',
    specs: ['6-piece set', 'Eco-friendly bamboo', 'Heat resistant', 'Durable construction']
  },
  {
    id: 16,
    name: 'Wireless Gaming Mouse',
    price: 69.99,
    category: 'Electronics',
    description: 'High-precision wireless gaming mouse with customizable DPI settings and ergonomic design.',
    image: 'https://images.pexels.com/photos/17821147/pexels-photo-17821147.jpeg',
    specs: ['High-precision sensor', 'Customizable DPI', 'Ergonomic design', 'Long battery life']
  }
];

// ====================== Global Variables ======================
let cart = [];
let selectedRating = 0;
let activeCategory = 'all';
let minPrice = 0;
let maxPrice = 500;
let searchQuery = '';

// ====================== Initialization ======================
function init() {
  loadFromLocalStorage();
  renderProducts();
  setupEventListeners();
  renderReviews();
  updateCartUI();
}

// ====================== LocalStorage ======================
function loadFromLocalStorage() {
  const savedCart = localStorage.getItem('shopCart');
  cart = savedCart ? JSON.parse(savedCart) : [];
}

function saveToLocalStorage() {
  localStorage.setItem('shopCart', JSON.stringify(cart));
}

// ====================== Render Products ======================
function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = '<p class="no-products">No products found matching your criteria.</p>';
    return;
  }

  productsGrid.innerHTML = filteredProducts.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <button class="view-details-btn" onclick="openProductModal(${product.id})">
          View Details
        </button>
      </div>
    </div>
  `).join('');
}

// ====================== Event Listeners ======================
function setupEventListeners() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelector('.cta-button').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.category;
      renderProducts();
    });
  });

  document.getElementById('searchInput').addEventListener('input', e => {
    searchQuery = e.target.value;
    renderProducts();
  });

  const minInput = document.getElementById('minPrice');
  const maxInput = document.getElementById('maxPrice');
  const priceValue = document.getElementById('priceValue');

  minInput.addEventListener('input', () => {
    minPrice = parseFloat(minInput.value);
    if (minPrice > maxPrice) { minPrice = maxPrice; minInput.value = minPrice; }
    priceValue.textContent = `${minPrice} - ${maxPrice}`;
    renderProducts();
  });

  maxInput.addEventListener('input', () => {
    maxPrice = parseFloat(maxInput.value);
    if (maxPrice < minPrice) { maxPrice = minPrice; maxInput.value = maxPrice; }
    priceValue.textContent = `${minPrice} - ${maxPrice}`;
    renderProducts();
  });

  document.getElementById('cartButton').addEventListener('click', toggleCart);
  document.getElementById('closeCart').addEventListener('click', toggleCart);
  document.getElementById('checkoutBtn').addEventListener('click', checkout);

  document.querySelector('.close-modal').addEventListener('click', closeModal);
  document.getElementById('productModal').addEventListener('click', e => {
    if (e.target.id === 'productModal') closeModal();
  });

  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    star.addEventListener('click', () => { selectedRating = parseInt(star.dataset.rating); updateStarDisplay(); });
    star.addEventListener('mouseenter', () => highlightStars(parseInt(star.dataset.rating)));
  });
  document.getElementById('starRating').addEventListener('mouseleave', updateStarDisplay);

  document.getElementById('reviewForm').addEventListener('submit', handleReviewSubmit);
}

// ====================== Cart Functions ======================
function toggleCart() { document.getElementById('cartSidebar').classList.toggle('active'); }

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) existingItem.quantity += 1;
  else cart.push({...product, quantity: 1});

  updateCartUI();
  saveToLocalStorage();
  showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
  saveToLocalStorage();
}

function updateQuantity(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) removeFromCart(productId);
  else { updateCartUI(); saveToLocalStorage(); }
}

function updateCartUI() {
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const cartCountEl = document.getElementById('cartCount');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  cartCountEl.textContent = totalItems;
  cartTotalEl.textContent = totalPrice.toFixed(2);

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    document.getElementById('checkoutBtn').disabled = true;
    return;
  }

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-details"><span>$${item.price.toFixed(2)}</span></div>
        <div class="cart-item-quantity">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart(${item.id})">&times;</button>
    </div>
  `).join('');

  document.getElementById('checkoutBtn').disabled = false;
}



function checkout() {
  if (cart.length === 0) {
    showNotification("Your cart is empty!");
    return;
  }

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

  // Show popup notification instead of alert
  showNotification(`✅ Order placed successfully! Total: $${total}`);

  cart = [];
  updateCartUI();
  saveToLocalStorage();
  toggleCart();
}


// ====================== Modal Functions ======================
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('modalBody').innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="modal-product-image" />
    <h2 class="modal-product-name">${product.name}</h2>
    <p class="modal-product-price">$${product.price.toFixed(2)}</p>
    <p class="modal-product-description">${product.description}</p>
    <div class="modal-product-specs">
      <h4>Specifications</h4>
      <ul>${product.specs.map(s => `<li>${s}</li>`).join('')}</ul>
    </div>
    <button class="add-to-cart-btn" onclick="addToCart(${product.id}); closeModal();">
      Add to Cart
    </button>
  `;
  document.getElementById('productModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// ====================== Star Rating ======================
function highlightStars(rating) {
  document.querySelectorAll('.star').forEach(star => {
    star.classList.toggle('active', parseInt(star.dataset.rating) <= rating);
  });
}

function updateStarDisplay() { highlightStars(selectedRating); }

// ====================== Review Form ======================
function handleReviewSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('reviewerName').value.trim();
  const text = document.getElementById('reviewText').value.trim();
  if (!name || !text || selectedRating === 0) return alert('Fill all fields and select rating!');
  showNotification('Thank you for your review!');
  document.getElementById('reviewForm').reset();
  selectedRating = 0;
  updateStarDisplay();
}

function renderReviews() {
  document.getElementById('reviewsList').innerHTML = '<p class="no-reviews">Reviews are not saved in this demo.</p>';
}

// ====================== Notifications ======================
function showNotification(message) {
  const notif = document.createElement('div');
  notif.textContent = message;
  notif.style.cssText = `
    position: fixed; top: 80px; right: 20px;
    background-color: #10b981; color: white;
    padding: 1rem 1.5rem; border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 3000;
    animation: slideIn 0.3s ease;
  `;
  document.body.appendChild(notif);
  setTimeout(() => { notif.style.animation = 'slideOut 0.3s ease'; setTimeout(() => notif.remove(), 300); }, 2000);
}



// ====================== Global Functions ======================
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openProductModal = openProductModal;
window.closeModal = closeModal;

// ====================== Start ======================
init();
