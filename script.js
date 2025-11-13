const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount
  totalPriceSpan.textContent = totalPrice.toFixed(2)
};


addProductButton.addEventListener('click', () => {
const productName = productNameInput.value.trim()
const productPrice = Number(productPriceInput.value)



let addedProduct = document.createElement('li')
addedProduct.dataset.price = productPrice
addedProduct.innerHTML = `${productName} COST $${productPrice.toFixed(2)} <button class="remove">Remove</button>`
cart.appendChild(addedProduct)

updateTotalPrice(productPrice)

});


cart.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    const item = event.target.closest('li')
      const price = parseFloat(item.dataset.price)
  updateTotalPrice(-price)
    item.remove()
  }
});

