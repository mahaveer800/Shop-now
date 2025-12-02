 import './style.css'
import './Product.css'
//  import './Product.js'
//  import './productDetails.js'
 import products from '../Api/Pruduct.json'

let cardContainer = document.querySelector('.Product');

products.forEach((item) => {
  let div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
        <img src="${item.img}" alt="">
        <h3>${item.name}</h3>
        <p class="price">${item.price}</p>
        <p>
            <span class="oldPrice">${item.old}</span> 
            <span class="discount">${item.off}</span>
        </p>
        <p>${item.star}</p>
    `;

  // ⭐ CLICK = GO TO DETAILS PAGE
 div.addEventListener("click", () => {
  localStorage.setItem("singleProduct", JSON.stringify(item));
  window.location.href = "./src/productDetails.html"; 
});


  cardContainer.append(div);
});



function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let counterEl = document.getElementById("cartCount");

    if (counterEl) {
        counterEl.textContent = cart.length;
    }
}

updateCartCount();


// ---------------Cart-----------------

let cartBtn = document.getElementById("AddBtn");

if (cartBtn) {
    cartBtn.addEventListener("click", () => {
        window.location.href = "./src/cart.html";
 // cart page open
    });
}

