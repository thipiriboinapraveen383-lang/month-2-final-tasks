// =============================================
// E-COMMERCE PRODUCT PAGE — script.js
// =============================================

// =============================================
// State
// =============================================
let cartCount   = 0;       // Total items in cart
let quantity    = 1;       // Selected quantity
let selectedSize  = null;  // Selected shoe size
let selectedColor = 'Cream'; // Selected color name
let wishlisted  = false;   // Wishlist toggle state

// =============================================
// DOM References
// =============================================
const cartCountEl   = document.getElementById('cartCount');
const qtyDisplay    = document.getElementById('qtyDisplay');
const selectedSizeEl  = document.getElementById('selectedSize');
const selectedColorEl = document.getElementById('selectedColor');
const addToCartBtn  = document.getElementById('addToCartBtn');
const wishlistBtn   = document.getElementById('wishlistBtn');
const toast         = document.getElementById('toast');
const mainImage     = document.getElementById('mainImage');
const imgDisplay    = document.getElementById('imgDisplay');

// Selector element collections
const sizeBtns    = document.querySelectorAll('.size-btn');
const colorSwatches = document.querySelectorAll('.swatch');
const thumbs      = document.querySelectorAll('.thumb');
const decreaseQty = document.getElementById('decreaseQty');
const increaseQty = document.getElementById('increaseQty');

// =============================================
// SIZE SELECTION
// =============================================
sizeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove 'active' from all size buttons
    sizeBtns.forEach(b => b.classList.remove('active'));

    // Mark this button as active
    btn.classList.add('active');
    selectedSize = btn.dataset.size;

    // Update the size label
    selectedSizeEl.textContent = `US ${selectedSize}`;
  });
});

// =============================================
// COLOR SELECTION
// =============================================

// Emoji shoe icon per color for visual change
const colorEmoji = {
  'Cream':    '👟',
  'Midnight': '🥿',
  'Sage':     '👟',
  'Blush':    '👠'
};

// Background color for the image panel per color
const colorBg = {
  'Cream':    '#f5f0e8',
  'Midnight': '#1a1a2e',
  'Sage':     '#e8f5e0',
  'Blush':    '#fde8e8'
};

colorSwatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    // Remove active from all swatches
    colorSwatches.forEach(s => s.classList.remove('active'));
    swatch.classList.add('active');

    selectedColor = swatch.dataset.color;
    selectedColorEl.textContent = selectedColor;

    // Update main image area background and emoji
    mainImage.style.background  = colorBg[selectedColor] || '#f5f0e8';
    imgDisplay.textContent       = colorEmoji[selectedColor] || '👟';
  });
});

// =============================================
// THUMBNAIL GALLERY
// Thumbnails also update the main image view
// =============================================
thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    // Remove active state from all thumbs
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');

    // Each thumbnail corresponds to a color swatch
    const colorSwatch = colorSwatches[index];
    if (colorSwatch) {
      // Simulate clicking the corresponding color swatch
      colorSwatch.click();
    }
  });
});

// =============================================
// QUANTITY CONTROLS
// =============================================

// Decrease quantity (minimum 1)
decreaseQty.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    qtyDisplay.textContent = quantity;
  }
});

// Increase quantity (maximum 10)
increaseQty.addEventListener('click', () => {
  if (quantity < 10) {
    quantity++;
    qtyDisplay.textContent = quantity;
  }
});

// =============================================
// ADD TO CART
// =============================================
addToCartBtn.addEventListener('click', () => {
  // Require a size to be selected before adding to cart
  if (!selectedSize) {
    // Briefly shake the size section to prompt selection
    const sizeGrid = document.querySelector('.size-grid');
    sizeGrid.style.animation = 'none';
    sizeGrid.style.outline   = '2px solid #e74c3c';
    sizeGrid.style.borderRadius = '10px';
    setTimeout(() => { sizeGrid.style.outline = 'none'; }, 1500);

    showToast('Please select a size first! 👟');
    return;
  }

  // Add quantity to cart count
  cartCount += quantity;
  cartCountEl.textContent = cartCount;

  // Animate the cart icon
  const cartIcon = document.getElementById('cartIcon');
  cartIcon.style.transform = 'scale(1.3)';
  setTimeout(() => { cartIcon.style.transform = 'scale(1)'; }, 200);

  // Show success toast
  showToast(`${quantity} × AeroFlex Runner X1 (${selectedColor}, US ${selectedSize}) added to cart! 🛒`);
});

// =============================================
// WISHLIST TOGGLE
// =============================================
wishlistBtn.addEventListener('click', () => {
  wishlisted = !wishlisted;

  if (wishlisted) {
    wishlistBtn.textContent = '♥ Wishlisted';
    wishlistBtn.classList.add('wishlisted');
    showToast('Added to wishlist! ♥');
  } else {
    wishlistBtn.textContent = '♡ Wishlist';
    wishlistBtn.classList.remove('wishlisted');
  }
});

// =============================================
// TOAST NOTIFICATION
// Show a temporary message at the bottom
// =============================================
let toastTimeout; // Store timeout reference to reset if called quickly

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');

  // Clear any existing timeout to prevent overlap
  clearTimeout(toastTimeout);

  // Hide toast after 3 seconds
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}