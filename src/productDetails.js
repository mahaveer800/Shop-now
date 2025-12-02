 import './style.css'
import './Product.css'
import './productDetails.css'


let product = JSON.parse(localStorage.getItem("singleProduct"));

// ---------- SAFE CHECKS for product detail elements ----------
if (product) {
    if (document.getElementById("pImg"))
        document.getElementById("pImg").src = product.img;

    if (document.getElementById("pTitle"))
        document.getElementById("pTitle").textContent = product.name;

    if (document.getElementById("pPrice"))
        document.getElementById("pPrice").textContent = "Price: " + product.price;

    if (document.getElementById("pOld"))
        document.getElementById("pOld").textContent = "Old Price: " + product.old;

    if (document.getElementById("pOff"))
        document.getElementById("pOff").textContent = "Discount: " + product.off;

    if (document.getElementById("pStar"))
        document.getElementById("pStar").textContent = "Rating: " + product.star;
}


// ---------- CART COUNTER ----------
function updateCartCount() {
    // console.log(
    //    " hello coder"
    // )
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let counterEl = document.getElementById("cartCount");
    if (!counterEl) return;   // if index page doesn't have counter, skip

    counterEl.textContent = cart.length;
    // console.log("counter fun is run");
}

// updateCartCount(); // page load par bhirun kare



// ---------- ADD TO CART BUTTON ----------
let addToCart = document.getElementById("addToCart");

// let addTo = document.getElementById("addToCart");

if (addToCart) {
    addToCart.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        // alert("Product added to cart!");

        updateCartCount();
    });
}


// ---------- BUY NOW BUTTON ----------
let buyBtn = document.getElementById("buyNow");

if (buyBtn) {
    buyBtn.addEventListener("click", () => {
        alert("Redirecting to payment...");
    });
}


// ---------------Cart-----------------

let cartBtn = document.getElementById("AddBtn");

if (cartBtn) {
    cartBtn.addEventListener("click", () => {
        window.location.href = "cart.html"; // cart page open
    });
}
