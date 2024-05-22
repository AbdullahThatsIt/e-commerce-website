// OPEN & CLOSE CART
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}

function start() {
  addEvents();
}

function update() {
  addEvents();
  updateTotal();
}

function addEvents() {
  let cartRemove_btns = document.querySelectorAll(".cart-remove");
  console.log(cartRemove_btns);
  cartRemove_btns.forEach((btn) => {
    btn.addEventListener("click", handle_removeCartItem);
  });

  let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
  cartQuantity_inputs.forEach((input) => {
    input.addEventListener("change", handleQuantityChange());
  });

  let addCart_btns = document.querySelectorAll(".add-cart");
  addCart_btns.forEach((btn) => {
    btn.addEventListener("click", handle_addCartItem);
  });

  const buy_btn = document.querySelector(".btn-buy");
  buy_btn.addEventListener("click", handle_buyOrder);
}

let itemsAdded = [];

function handle_addCartItem() {
  let product = this.parentElement;
  let title = product.querySelector(".product-title").innerHTML;
  let price = product.querySelector(".product-price").innerHTML;
  let imgSrc = product.querySelector(".product-img").src;
  console.log(title, price, imgSrc);

  let newToAdd = {
    title,
    price,
    imgSrc,
  };

  if (itemsAdded.find((el) => el.title == newToAdd.title)) {
    alert("This Item Is Already Exist!");
    return;
  } else {
    itemsAdded.push(newToAdd);
  }

  let cartBoxElement = CartBoxComponent(title, price, imgSrc);
  let newNode = document.createElement("div");
  newNode.innerHTML = cartBoxElement;
  const cartContent = cart.querySelector(".cart-content");
  cartContent.appendChild(newNode);

  update();
}

function handle_removeCartItem() {
  this.parentElement.remove();
  itemsAdded = itemsAdded.filter(
    (el) =>
      el.title !=
      this.parentElement.querySelector(".cart-product-title").innerHTML
  );

  update();
}

// function handle_changeItemQuantity() {
//   if (isNaN(this.value) || this.value < 1) {
//     this.value = 1;
//   }
//   this.value = Math.floor(this.value); // to keep it integer

//   update();
// }

function handle_buyOrder() {
  if (itemsAdded.length <= 0) {
    alert("There is No Order to Place Yet! \nPlease Make an Order first.");
    return;
  }
  const cartContent = cart.querySelector(".cart-content");
  cartContent.innerHTML = "";
  alert("Your Order is Placed Successfully :)");
  itemsAdded = [];

  update();
}

// Function to handle quantity increment and decrement


// handleQuantityChange();

function handleQuantityChange() {
  // Add event listeners for increment buttons
  const incrementButtons = document.querySelectorAll(".quantity-right-plus");
  incrementButtons.forEach((button) => {
    console.log("Increment");
    button.addEventListener("click", () => {
      const inputField = button.parentElement.previousElementSibling;
      let quantity = parseInt(inputField.value);
      console.log(quantity);
      if (!isNaN(quantity)) {
        inputField.value = quantity + 1;
        updateTotal();
      }
    });
  });

  // Add event listeners for decrement buttons
  const decrementButtons = document.querySelectorAll(".quantity-left-minus");
  decrementButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const inputField = button.parentElement.nextElementSibling;
      let quantity = parseInt(inputField.value);
      if (!isNaN(quantity) && quantity > 1) {
        inputField.value = quantity - 1;
        updateTotal();
      }
    });
  });
}

// Function to update the total amount in the cart
function updateTotal() {
  let cartBoxes = document.querySelectorAll(".cart-box");
  const totalElement = document.querySelector(".total-price");
  let total = 0;
  cartBoxes.forEach((cartBox) => {
    let priceElement = cartBox.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("Rs.", ""));
    let quantityInput = cartBox.querySelector(".cart-quantity");
    let quantity = parseInt(quantityInput.value);
    total += price * quantity;
  });

  total = total.toFixed(2);
  // total = Math.round(total * 100) / 100;
  totalElement.innerHTML = "Rs." + total;
}

// // Add event listeners for quantity change
handleQuantityChange();

function CartBoxComponent(title, price, imgSrc) {
  return `
    <div class="cart-box">
        <img src=${imgSrc} alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <div class="input-group">
              <span class="input-group-btn">
                  <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field="">
                  <i class="fa-solid fa-minus"></i>
                  </button>
              </span>

              <input type="text" class="form-control cart-quantity" value="1" min="1" max="100">

              <span class="input-group-btn">
                  <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                  <i class="fa-solid fa-plus"></i>
                  </button>
              </span>
            </div>
        </div>
        <!-- REMOVE CART  -->
        <i class="fa-solid fa-trash cart-remove"></i>
    </div>`;
}
// for cart increase and decrease quantity old
/* <input type="number" value="1" class="cart-quantity"></input> */

// Product data array at home page

const products = [
  {
    id: 1,
    name: "iPhone 14 Pro Max",
    image: "img/product1.jpg",
    price: "Rs.195000",
    description: "Description of iPhone 14 Pro Max.",
  },
  {
    id: 2,
    name: "MacBook Air",
    image: "img/product2.jpg",
    price: "Rs.235499",
    description: "Description of iPhone 14 Pro Max.",
  },
  {
    id: 3,
    name: "AirPods Pro 2",
    image: "img/product3.jpg",
    price: "Rs.76500",
    description: "Description of iPhone 14 Pro Max.",
  },
  {
    id: 4,
    name: "AirPods Max",
    image: "img/product4.jpg",
    price: "Rs.153499",
    description: "Description of iPhone 14 Pro Max.",
  },
  {
    id: 5,
    name: "iPad 10th Generation",
    image: "img/product5.jpg",
    price: "Rs.182500",
    description: "Description of iPhone 14 Pro Max.",
  },
  {
    id: 6,
    name: "Vision Pro",
    image: "img/product6.jpg",
    price: "Rs.389500",
    description: "Description of iPhone 14 Pro Max.",
  },
  {
    id: 7,
    name: "Apple TV",
    image: "img/product7.jpg",
    price: "Rs.155500",
    description: "Description of iPhone 14 Pro Max.",
  },
  {
    id: 8,
    name: "Apple Watch",
    image: "img/product8.jpg",
    price: "Rs.89050",
    description: "Description of iPhone 14 Pro Max.",
  },

];

// Function to generate HTML content for products
function generateProductHTML(product) {
  return `
    <div class="product-box" data-product-id="${product.id}">
      <img src="${product.image}" alt="" class="product-img" />
      <h2 class="product-title">${product.name}</h2>
      <span class="product-price">${product.price}</span>
      <button class="view-details-btn">View Details</button>
      <i class="fa-solid fa-cart-plus add-cart"></i>
    </div>
  `;
}

function displayProducts() {
  const productContainer = document.getElementById("productContainer");
  let html = "";
  products.forEach((product) => {
    html += generateProductHTML(product);
  });
  productContainer.innerHTML = html;

  // Add click listeners to product boxes
  const productBoxes = document.querySelectorAll(".product-box");
  productBoxes.forEach((productBox) => {
    productBox.addEventListener("click", (event) => {
      const clickedElement = event.target;
      if (
        clickedElement.classList.contains("product-img") ||
        clickedElement.classList.contains("view-details-btn")
      ) {
        const productId = parseInt(productBox.dataset.productId);
        window.location.href = `product.html?id=${productId}`;
      }
    });
  });
}

// Call the function to display products when the page loads
displayProducts();

// const products = [
//   { id: 1, name: "iPhone 14 Pro Max", image: "img/product1.jpg", price: "Rs.195000", description: "Description of iPhone 14 Pro Max." },
//   { id: 2, name: "MacBook Air", image: "img/product2.jpg", price: "Rs.235499", description: "Description of MacBook Air." },
//   { id: 3, name: "AirPods Pro 2", image: "img/product3.jpg", price: "Rs.76500", description: "Description of AirPods Pro 2." },
//   { id: 4, name: "AirPods Max", image: "img/product4.jpg", price: "Rs.153499", description: "Description of AirPods Max." },
//   { id: 5, name: "iPad 10th Generation", image: "img/product5.jpg", price: "Rs.182500", description: "Description of iPad 10th Generation." },
//   { id: 6, name: "Vision Pro", image: "img/product6.jpg", price: "Rs.389500", description: "Description of Vision Pro." },
//   { id: 7, name: "Apple TV", image: "img/product7.jpg", price: "Rs.155500", description: "Description of Apple TV." },
//   { id: 8, name: "Apple Watch", image: "img/product8.jpg", price: "Rs.89050", description: "Description of Apple Watch." }
// ];

// function getProductIdFromUrl() {
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   return urlParams.get('id');
// }


// function populateProductDetails(productId) {
//   const product = products.find(p => p.id == productId);
//   if (product) {
//     document.getElementById("product-img").src = product.image;
//     document.getElementById("product-title").innerHTML = product.name;
//     document.getElementById("product-price").innerHTML = product.price;
//     document.getElementById("product-description").innerHTML = product.description;
//   }
// }

// // Get the product ID from the URL and populate the details
// const productId = getProductIdFromUrl();
// if (productId) {
//   populateProductDetails(productId);
// }
