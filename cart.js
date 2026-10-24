let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const container =
document.getElementById("cart-container");

function saveCart(){
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}

function increaseQuantity(index){

    cart[index].quantity++;

    saveCart();

    renderCart();
}

function decreaseQuantity(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

        saveCart();

        renderCart();
    }
}

function removeItem(index){

    cart.splice(index,1);

    saveCart();

    renderCart();
}

function editItem(index){

    localStorage.setItem(
        "editingIndex",
        index
    );

    window.location.href =
    "bouquetcustomization.html";
}

function renderCart(){

    container.innerHTML="";

    let grandTotal = 0;

    cart.forEach((item,index)=>{

        const itemTotal =
        item.price * item.quantity;

        grandTotal += itemTotal;

        container.innerHTML += `
        <div class="cart-item">

            <h2>${item.product}</h2>

            <p><strong>Flowers:</strong><br>${item.flowers}</p>

            <p><strong>Colors:</strong><br>${item.colors}</p>

            <p><strong>Packaging:</strong> ${item.packaging}</p>

            <p><strong>Ribbon:</strong> ${item.ribbon}</p>

            <p><strong>Occasion:</strong> ${item.occasion}</p>

            <p>
            📸 Please DM us your inspiration photos and mention your name.
            </p>

            <div class="quantity-controls">

                <button onclick="decreaseQuantity(${index})">-</button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity(${index})">+</button>

            </div>

            <div class="action-buttons">

                <button onclick="editItem(${index})">
                    Edit
                </button>

                <button onclick="removeItem(${index})">
                    Remove
                </button>

            </div>

            <div class="total-price">

                Rs. ${itemTotal.toLocaleString()}

            </div>

        </div>
        `;
    });

    document.getElementById(
        "cart-total"
    ).innerHTML =

    `Cart Total: Rs. ${grandTotal.toLocaleString()}`;
}

renderCart();