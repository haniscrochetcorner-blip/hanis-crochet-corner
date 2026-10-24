const mainImage = document.querySelector(".main-image");
const thumbnails = document.querySelectorAll(".thumbnail-gallery img");

thumbnails.forEach((img) => {
  img.addEventListener("click", () => {
    mainImage.src = img.src;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const daisySelect = document.getElementById("daisy");
  const daisyOptions = document.getElementById("daisy-options");

  daisyOptions.style.display = "none";

  daisySelect.addEventListener("change", function () {
    if (this.value === "Yes") {
      daisyOptions.style.display = "block";
    } else {
      daisyOptions.style.display = "none";
    }
  });
});
function updatePrice() {
    let size = document.getElementById("size");
    let price = size.value;

    document.getElementById("main-price").innerHTML = price;
}
