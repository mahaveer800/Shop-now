function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let counterEl = document.getElementById("cartCount");

    if (counterEl) {
        counterEl.textContent = cart.length;
    }
}

function showCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let box = document.getElementById("cartItems");

    box.innerHTML = ""; 

    if (cart.length === 0) {
        box.innerHTML = "<h3 style='display:flex ; text-align:center'>No Product</h3>";
        return;
    }

    cart.forEach((item, index) => {
        let div = document.createElement("div");

        div.innerHTML = `
            <div style="display:flex; align-items:center; gap:20px; margin:10px 0; padding:10px; border:1px solid #ddd;">
                <img src="${item.img}" width="80">
                <div>
                    <h3>${item.name}</h3>
                    <p>₹ ${item.price}</p>
                </div>
                <button class="removeBtn" data-index="${index}"
                    style="margin-left:auto; padding:5px 10px; background:red; color:white; border:none; cursor:pointer;">
                    Remove
                </button>
            </div>
        `;

        box.appendChild(div);
    });

    attachRemoveEvents();
}

function attachRemoveEvents() {
    let buttons = document.querySelectorAll(".removeBtn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            let index = btn.getAttribute("data-index");

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));

            updateCartCount();
            showCartItems();
        });
    });
}

showCartItems();
updateCartCount();
