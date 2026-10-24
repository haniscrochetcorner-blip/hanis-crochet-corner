function addCustomBouquetToCart() {

    const bouquet = {

        product: "Custom Crochet Bouquet",

        quantity: 1,

        price: 3500,

        name:
            document.getElementById("customer-name").value,

        email:
            document.getElementById("customer-email").value,

        flowers:
            document.getElementById("flower-request").value,

        packaging:
            document.getElementById("packaging-color").value,

        ribbon:
            document.getElementById("ribbon-color").value,

        budget:
            document.getElementById("budget").value,

        details:
            document.getElementById("additional-details").value
    };

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const editingIndex =
        localStorage.getItem("editingIndex");

    if(editingIndex !== null){

        cart[editingIndex] = bouquet;

        localStorage.removeItem(
            "editingIndex"
        );

    } else {

        cart.push(bouquet);
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
document.getElementById("success-message").innerHTML =
"✓ Bouquet added to cart successfully! <a href='cart.html'>View Cart</a>";
}

window.onload = function(){

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    const editingIndex =
        localStorage.getItem("editingIndex");

    if(editingIndex !== null){

        const item = cart[editingIndex];

        document.getElementById(
            "customer-name"
        ).value = item.name || "";

        document.getElementById(
            "customer-email"
        ).value = item.email || "";

        document.getElementById(
            "flower-request"
        ).value = item.flowers || "";

        document.getElementById(
            "packaging-color"
        ).value = item.packaging || "";

        document.getElementById(
            "ribbon-color"
        ).value = item.ribbon || "";

        document.getElementById(
            "budget"
        ).value = item.budget || "";

        document.getElementById(
            "additional-details"
        ).value = item.details || "";
    }
}