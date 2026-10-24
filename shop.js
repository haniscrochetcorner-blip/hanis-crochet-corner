// ===============================
// Product Category Filter
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".filters button");
    const productLinks = document.querySelectorAll(".product-link");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));

            // Add active class to clicked button
            button.classList.add("active");

            // Get selected category
            const filter = button.dataset.filter;

            // Show or hide products
            productLinks.forEach(link => {

                const category = link.dataset.category;

                if (filter === "all" || category === filter) {
                    link.style.display = "block";
                } else {
                    link.style.display = "none";
                }

            });

        });

    });

});
